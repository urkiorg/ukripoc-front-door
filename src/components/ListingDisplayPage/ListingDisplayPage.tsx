import React, { FC, HTMLAttributes } from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { getOpportunity } from "../../graphql/queries";
import { GetOpportunityQuery } from "../../API";
import ListingDisplay from "../ListingDisplay/ListingDisplay";
interface Props extends HTMLAttributes<HTMLElement> {
    listingId?: string;
}

interface Props extends HTMLAttributes<HTMLElement> {}

const GET_OPPORTUNITY = gql(getOpportunity);

export const ListingDisplayPage: FC<Props> = ({ listingId, ...props }) => {
    const { data, error, loading } = useQuery<GetOpportunityQuery>(
        GET_OPPORTUNITY,
        {
            variables: { id: listingId },
            fetchPolicy: "cache-and-network"
        }
    );

    console.log(data);

    if (error) {
        return <p>Error</p>;
    }
    return <ListingDisplay opportunityListing={data} loading={loading} />;
};

export default ListingDisplayPage;
