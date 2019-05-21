import React, { FC, HTMLAttributes } from "react";
import BackLink from "@govuk-react/back-link";
import P from "@govuk-react/paragraph";
import HintText from "@govuk-react/hint-text";
import Label from "@govuk-react/label-text";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import Button from "@govuk-react/button";
import { Link as RouterLink } from "@reach/router";

import { GetOpportunityQuery } from "../../API";
import { ukriGreen, Title } from "../../theme";
interface Props extends HTMLAttributes<HTMLElement> {
    opportunityListing?: GetOpportunityQuery;
}

export const ListingDisplay: FC<Props> = ({ opportunityListing }) => {
    const backlink = (
        <BackLink as={RouterLink} to="../..">
            Back to all opportunities
        </BackLink>
    );

    if (!opportunityListing || !opportunityListing.getOpportunity) {
        return <section>{backlink}</section>;
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
            <a href={`https://www.example.com/apply/${opp.id}`}>
                <Button buttonColour={ukriGreen}>Start application</Button>
            </a>
        </section>
    );
};

export default ListingDisplay;
