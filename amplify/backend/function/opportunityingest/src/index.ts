import { Handler } from "aws-lambda";
import { DynamoDB } from "aws-sdk";

import { api } from "../../../amplify-meta.json";

export const getDBTableName = (env: string, apiId: string, type: string) =>
    `${type}-${apiId}-${env}`;

export const handler: Handler = async (
    event: OpportunityUpdateEvent,
    context
) => {
    const apiId = api.frontdoor.output.GraphQLAPIIdOutput;
    const client = new DynamoDB.DocumentClient({
        region: "eu-west-1"
    });

    const env = process.env.env;

    if (!env || !apiId) {
        context.done(new Error("Missing env"));
        return;
    }

    const TableName = getDBTableName(env, apiId, "Opportunity");
    console.log({ TableName });

    const now = new Date().toISOString();

    let { id, name, description, openDate, closeDate, funders } = event;

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
                name,
                description,
                openDate,
                closeDate,
                funders
            }
        })
        .promise();

    context.done(undefined, "Success");
};
