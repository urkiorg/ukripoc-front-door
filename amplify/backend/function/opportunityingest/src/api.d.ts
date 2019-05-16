interface OpportunityUpdateEvent {
    id: string;
    name: string;
    description: string;
    funders: string[];
    openDate?: string;
    closeDate?: string;
}
