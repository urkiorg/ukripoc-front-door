import React, { FC, HTMLAttributes } from "react";
import { H4 } from "@govuk-react/heading";
import P from "@govuk-react/paragraph";
import Label from "@govuk-react/label-text";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import SectionBreak from "@govuk-react/section-break";
import { Opportunity } from "../OpportunityIndex/OpportunityIndex";

interface Props extends HTMLAttributes<HTMLElement> {
    opportunity?: Opportunity;
}

export const OpportunityListItem: FC<Props> = ({ opportunity: opp }) => {
    if (!opp) {
        return null;
    }
    const funders = opp.funders || [];
    return (
        <section key={opp.id}>
            <H4>{opp.name}</H4>
            <P>{opp.description}</P>
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
            <GridRow>
                <GridCol>
                    <Label>Opens:</Label>
                </GridCol>
                <GridCol>
                    <Label>{opp.openDate}</Label>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol>
                    <Label>Closes:</Label>
                </GridCol>
                <GridCol>
                    <Label>{opp.closeDate}</Label>
                </GridCol>
            </GridRow>
            <SectionBreak visible />
        </section>
    );
};

export default OpportunityListItem;
