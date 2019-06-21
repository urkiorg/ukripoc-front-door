import React, { FC, HTMLAttributes } from "react";
import BackLink from "@govuk-react/back-link";
import P from "@govuk-react/paragraph";
import HintText from "@govuk-react/hint-text";
import Label from "@govuk-react/label-text";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import Button from "@govuk-react/button";
import { Link as RouterLink } from "@reach/router";
import Skeleton from "react-loading-skeleton";

import { GetOpportunityQuery } from "../../API";

import { ukriGreen, Title } from "../../theme";

interface Props extends HTMLAttributes<HTMLElement> {
    opportunityListing?: GetOpportunityQuery;
    loading?: boolean;
}

export const ListingDisplay: FC<Props> = ({ opportunityListing, loading }) => {
    const backlink = (
        <BackLink as={RouterLink} to="../..">
            Back to all opportunities
        </BackLink>
    );

    if (loading) {
        return (
            <section>
                {backlink}
                <HintText>
                    <Skeleton height="25px" width="300px" />
                </HintText>
                <Title>
                    <Skeleton height="50px" width="500px" />
                </Title>
                <Skeleton count={4} />
            </section>
        );
    }

    if (!opportunityListing || !opportunityListing.getOpportunity) {
        return (
            <section>
                {backlink}
                <Title>Not found</Title>
            </section>
        );
    }

    const opp = opportunityListing.getOpportunity;

    const funders = opp.funders || [];

    let openDate: Date | undefined;
    if (opp.openDate) {
        openDate = new Date(opp.openDate);
    }

    let closeDate: Date | undefined;
    if (opp.closeDate) {
        closeDate = new Date(opp.closeDate);
    }

    const applicationUrl =
        "https://feature-demo.d1jo86e788g8p5.amplifyapp.com/";

    return (
        <section>
            {backlink}
            <HintText>Funding opportunity</HintText>
            <Title>{opp.name}</Title>
            {!!funders.length && (
                <GridRow>
                    <GridCol setWidth="30%">
                        <Label>
                            {funders.length === 1 ? "Funder" : "Funders"}:
                        </Label>
                    </GridCol>
                    <GridCol>
                        <Label>{funders.join(", ")}</Label>
                    </GridCol>
                </GridRow>
            )}
            {openDate && (
                <GridRow>
                    <GridCol setWidth="30%">
                        <Label>Opens:</Label>
                    </GridCol>
                    <GridCol>
                        <Label>{openDate.toLocaleDateString()}</Label>
                    </GridCol>
                </GridRow>
            )}
            {closeDate && (
                <GridRow mb={4}>
                    <GridCol setWidth="30%">
                        <Label>Closes:</Label>
                    </GridCol>
                    <GridCol>
                        <Label>{closeDate.toLocaleDateString()}</Label>
                    </GridCol>
                </GridRow>
            )}
            <P mb={9}>{opp.description}</P>
            <a href={`${applicationUrl}/apply/${opp.opportunityId}`}>
                <Button buttonColour={ukriGreen}>Start application</Button>
            </a>
        </section>
    );
};

export default ListingDisplay;
