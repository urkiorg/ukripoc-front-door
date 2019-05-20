import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import { createOpportunity } from "../../graphql/mutations";
import { NewOpportunity } from "../NewOpportunity";
import { navigate } from "@reach/router";
import {
    CreateOpportunityMutationVariables,
    CreateOpportunityMutation
} from "../../API";

const CREATE_OPPORTUNITY = gql(createOpportunity);

export const NewOpportunityPage: FC = () => {
    const addOpportunityMutation = useMutation<
        CreateOpportunityMutation,
        CreateOpportunityMutationVariables
    >(CREATE_OPPORTUNITY);

    const addOpportunity = useCallback(
        async (name: string) => {
            const result = await addOpportunityMutation({
                variables: {
                    input: {
                        name,
                        description: "Today",
                        funders: ["AHRC", "Innovate UK", "Me"]
                    }
                }
            });

            const { data, loading, error } = result;

            if (data) {
                navigate(`/setup/${data.createOpportunity.id}`);
            }
        },
        [addOpportunityMutation]
    );

    return <NewOpportunity addOpportunity={addOpportunity} />;
};

export default NewOpportunityPage;
