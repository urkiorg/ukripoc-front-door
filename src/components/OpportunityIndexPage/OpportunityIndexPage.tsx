import React, { FC, HTMLAttributes } from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { OpportunityIndex } from "../OpportunityIndex";
import LoadingBox from "@govuk-react/loading-box";
import { listOpportunitys } from "../../graphql/queries";
interface Props extends HTMLAttributes<HTMLElement> {}

const LIST_OPPORTUNITIES = gql(listOpportunitys, { limit: 100, offset: 0 });

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
