import { Handler, SQSEvent } from "aws-lambda";
import { DynamoDB } from "aws-sdk";
import console = require("console");

export const getDBTableName = (env: string, apiId: string, type: string) =>
    `${type}-${apiId}-${env}`;

const checkListing = (listing: OpportunityUpdateMessage) => {
    const required = ["id", "opportunityId", "name", "description"];
    return !required.find(field => !(field in listing));
};

const addRecord = async (
    listing: OpportunityUpdateMessage,
    TableName: string,
    client: DynamoDB.DocumentClient,
    now: string
) => {
    if (!checkListing(listing)) {
        console.log("Bad listing", listing);
        return;
    }

    let {
        id,
        name,
        description,
        openDate,
        closeDate,
        funders,
        opportunityId,
        lastPublished
    } = listing;

    let { Item } = await client.get({ TableName, Key: { id } }).promise();

    if (!Item) {
        console.log("New item");
        Item = {
            __typename: "Opportunity",
            createdAt: now,
            updatedAt: now
        };
    } else {
        console.log("Updated item");
        Item.updatedAt = now;
    }

    return client
        .put({
            TableName,
            Item: {
                ...Item,
                id,
                opportunityId,
                name,
                description,
                openDate,
                closeDate,
                funders,
                lastPublished
            }
        })
        .promise();
};

export const handler: Handler = async (event: SQSEvent, context) => {
    const apiId = process.env.AppSyncApiId;
    const client = new DynamoDB.DocumentClient({
        region: "eu-west-1"
    });
    console.log("event", event);
    const env = process.env.ENV;

    if (!env || !apiId) {
        context.done(new Error("Missing env"));
        return;
    }

    const TableName = getDBTableName(env, apiId, "Opportunity");

    const now = new Date().toISOString();

    const { Records } = event;

    const listings = Records.map(r => {
        try {
            return JSON.parse(r.body) as OpportunityUpdateEvent;
        } catch (e) {
            console.log("Error", e);
        }
        return undefined;
    }).filter(Boolean);

    await Promise.all(
        listings.map(async listing => {
            if (!listing) {
                return;
            }
            try {
                const message =
                    typeof listing.Message === "string"
                        ? JSON.parse(listing.Message)
                        : listing.Message;
                return addRecord(message, TableName, client, now);
            } catch (err) {
                console.warn("Message parse error:", { err }, listing.Message);
                return;
            }
        })
    );

    context.done(undefined, "Success");
};
