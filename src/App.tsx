import React, { FC } from "react";

import Amplify from "aws-amplify";
import Auth from "@aws-amplify/auth";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import { ApolloProvider } from "react-apollo-hooks";
import Main from "@govuk-react/main";

import { Router, Link } from "@reach/router";
import { Route } from "./components/Route";

import { NewOpportunityPage } from "./components/NewOpportunityPage";

import config from "./aws-exports";
import { OpportunityIndexPage } from "./components/OpportunityIndexPage";

const client = new AWSAppSyncClient({
    url: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    auth: {
        type: config.aws_appsync_authenticationType as AUTH_TYPE,
        apiKey: config.aws_appsync_apiKey
    }
});

Amplify.configure(config);

// retrieve temporary AWS credentials and sign requests
Auth.configure(config);

export const App: FC = () => (
    // See https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/166 for why we need to coerce to any
    <ApolloProvider client={client as any}>
        <Main>
            <Router>
                <Route component={OpportunityIndexPage} path="/" />
                <Route component={NewOpportunityPage} path="/new" />
            </Router>

            <nav className="primary-nav">
                <Link to="/new">
                    <span aria-label="New">New </span>
                </Link>
            </nav>
        </Main>
    </ApolloProvider>
);

(window as any).LOG_LEVEL = "DEBUG";

export default App;
