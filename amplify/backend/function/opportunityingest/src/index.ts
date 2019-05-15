import { Handler } from "aws-lambda";
import { api } from "../../../amplify-meta.json";

export const handler: Handler = (event, context) => {
    console.log("## ENVIRONMENT VARIABLES");
    console.log(JSON.stringify(process.env, null, 2));
    console.log("## EVENT ");
    console.log(JSON.stringify(event, null, 2));

    console.log("## META ");
    console.log(JSON.stringify(api.frontdoor.output.GraphQLAPIIdOutput));
    context.done(undefined, "Hello World"); // SUCCESS with message
};
