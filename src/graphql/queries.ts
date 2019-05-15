// tslint:disable
// this is an auto generated file. This will be overwritten

export const getOpportunity = `query GetOpportunity($id: ID!) {
  getOpportunity(id: $id) {
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
      opportunities {
        id
        name
        description
        openDate
        closeDate
      }
    }
  }
}
`;
export const listOpportunitys = `query ListOpportunitys(
  $filter: ModelOpportunityFilterInput
  $limit: Int
  $nextToken: String
) {
  listOpportunitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      openDate
      closeDate
      funders {
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
export const getFunder = `query GetFunder($id: ID!) {
  getFunder(id: $id) {
    id
    name
    opportunities {
      id
      name
      description
      openDate
      closeDate
      funders {
        nextToken
      }
      type {
        id
        name
        description
      }
    }
  }
}
`;
export const listFunders = `query ListFunders(
  $filter: ModelFunderFilterInput
  $limit: Int
  $nextToken: String
) {
  listFunders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      opportunities {
        id
        name
        description
        openDate
        closeDate
      }
    }
    nextToken
  }
}
`;
export const getOpportunityType = `query GetOpportunityType($id: ID!) {
  getOpportunityType(id: $id) {
    id
    name
    description
    opportunities {
      id
      name
      description
      openDate
      closeDate
      funders {
        nextToken
      }
      type {
        id
        name
        description
      }
    }
  }
}
`;
export const listOpportunityTypes = `query ListOpportunityTypes(
  $filter: ModelOpportunityTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listOpportunityTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      opportunities {
        id
        name
        description
        openDate
        closeDate
      }
    }
    nextToken
  }
}
`;
