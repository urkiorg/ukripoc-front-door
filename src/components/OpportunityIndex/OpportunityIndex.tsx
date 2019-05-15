import React, { FC, HTMLAttributes } from "react";
import { H2 } from "@govuk-react/heading";
import P from "@govuk-react/paragraph";
import { OpportunityListItem } from "../OpportunityListItem";
import SectionBreak from "@govuk-react/section-break";
// import { ListOpportunitysQuery } from "../../API";

interface Props extends HTMLAttributes<HTMLElement> {
    opportunities: Opportunity[];
}

export interface Opportunity {
    __typename: "Opportunity";
    id: string;
    name: string;
    description: string | null;
    openDate: string | null;
    closeDate: string | null;
    funders: {
        __typename: "ModelFunderConnection";
        items: Array<{ id: string; name: string }>;
        nextToken: string | null;
    } | null;
    type: {
        __typename: "OpportunityType";
        id: string;
        name: string;
        description: string;
    } | null;
}

export const OpportunityIndex: FC<Props> = ({ opportunities }) => {
    if (!opportunities) {
        return <P>Nothing found</P>;
    }

    return (
        <div>
            <H2>Funding Opportunities</H2>
            <p>All opportunities ({opportunities.length})</p>
            <SectionBreak visible />
            {opportunities.map(opp => (
                <OpportunityListItem key={opp.id} opportunity={opp} />
            ))}
        </div>
    );
};

export default OpportunityIndex;
