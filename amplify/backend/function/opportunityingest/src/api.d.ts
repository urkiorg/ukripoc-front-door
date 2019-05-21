interface OpportunityUpdateEvent {
    id: string;
    opportunityId: string;
    name: string;
    description: string;
    funders: string[];
    openDate?: string;
    closeDate?: string;
    lastPublished: string;
}
