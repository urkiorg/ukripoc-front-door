import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import { createOpportunity, createFunder } from "../../graphql/mutations";
import { NewOpportunity } from "../NewOpportunity";
import { navigate } from "@reach/router";
import {
    CreateOpportunityMutationVariables,
    CreateOpportunityMutation,
    CreateFunderMutationVariables
} from "../../API";

const CREATE_OPPORTUNITY = gql(createOpportunity);
const ADD_FUNDER = gql(createFunder);

export const NewOpportunityPage: FC = () => {
    const addOpportunityMutation = useMutation<
        CreateOpportunityMutation,
        CreateOpportunityMutationVariables
    >(CREATE_OPPORTUNITY);

    const addFunder = useMutation<{}, CreateFunderMutationVariables>(
        ADD_FUNDER
    );

    const addOpportunity = useCallback(
        async (name: string) => {
            const result = await addOpportunityMutation({
                variables: {
                    input: {
                        name,
                        description: "Today"
                    }
                }
            });

            const { data, loading, error } = result;

            if (data) {
                const funders = ["AHRC", "Innovate UK"];
                await Promise.all(
                    funders.map(funder =>
                        addFunder({
                            variables: {
                                input: {
                                    name: funder,
                                    funderOpportunitiesId:
                                        data.createOpportunity.id
                                }
                            }
                        })
                    )
                );

                navigate(`/setup/${data.createOpportunity.id}`);
            }
        },
        [addOpportunityMutation]
    );

    return <NewOpportunity addOpportunity={addOpportunity} />;
};

export default NewOpportunityPage;
