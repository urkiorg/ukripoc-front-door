import { Handler } from "aws-lambda";
import { DynamoDB } from "aws-sdk";

export const getDBTableName = (env: string, apiId: string, type: string) =>
    `${type}-${apiId}-${env}`;

export const handler: Handler = async (
    event: OpportunityUpdateEvent,
    context
) => {
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
    console.log({ TableName });

    const now = new Date().toISOString();

    let {
        id,
        name,
        description,
        openDate,
        closeDate,
        funders,
        opportunityId,
        lastPublished
    } = event;

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

    await client
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

    context.done(undefined, "Success");
};
