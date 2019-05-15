import React, { FC, HTMLAttributes } from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { OpportunityIndex } from "../OpportunityIndex";
import LoadingBox from "@govuk-react/loading-box";
interface Props extends HTMLAttributes<HTMLElement> {}

const LIST_OPPORTUNITIES = gql`
    query ListOpportunitys(
        $filter: ModelOpportunityFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listOpportunitys(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                name
                description
                openDate
                closeDate
                funders {
                    items {
                        id
                        name
                    }
                    nextToken
                }
                type {
                    id
                    name
                    description
                }
            }
            nextToken
        }
    }
`;

export const OpportunityIndexPage: FC<Props> = ({ ...props }) => {
    const { data, error, loading } = useQuery(LIST_OPPORTUNITIES, {
        fetchPolicy: "cache-and-network"
    });

    if (error) {
        return <p>Error</p>;
    }
    return (
        <LoadingBox loading={loading}>
            <OpportunityIndex
                opportunities={
                    data && data.listOpportunitys
                        ? data.listOpportunitys.items
                        : []
                }
            />
        </LoadingBox>
    );
};

export default OpportunityIndexPage;
