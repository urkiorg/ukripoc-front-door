import React, { FC, HTMLAttributes } from "react";
import P from "@govuk-react/paragraph";
import { OpportunityListItem } from "../OpportunityListItem";
import SectionBreak from "@govuk-react/section-break";
import { Title } from "../../theme";
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
    funders: string[] | null;
}

export const OpportunityIndex: FC<Props> = ({ opportunities }) => {
    if (!opportunities) {
        return <P>Nothing found</P>;
    }

    return (
        <div>
            <Title>Funding Opportunities</Title>
            <p>All opportunities ({opportunities.length})</p>
            <SectionBreak visible mb={4} />
            {opportunities.map(opp => (
                <OpportunityListItem key={opp.id} opportunity={opp} />
            ))}
        </div>
    );
};

export default OpportunityIndex;
