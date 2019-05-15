// tslint:disable
// this is an auto generated file. This will be overwritten

export const createOpportunity = `mutation CreateOpportunity($input: CreateOpportunityInput!) {
  createOpportunity(input: $input) {
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
export const updateOpportunity = `mutation UpdateOpportunity($input: UpdateOpportunityInput!) {
  updateOpportunity(input: $input) {
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
export const deleteOpportunity = `mutation DeleteOpportunity($input: DeleteOpportunityInput!) {
  deleteOpportunity(input: $input) {
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
export const createFunder = `mutation CreateFunder($input: CreateFunderInput!) {
  createFunder(input: $input) {
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
export const updateFunder = `mutation UpdateFunder($input: UpdateFunderInput!) {
  updateFunder(input: $input) {
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
export const deleteFunder = `mutation DeleteFunder($input: DeleteFunderInput!) {
  deleteFunder(input: $input) {
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
export const createOpportunityType = `mutation CreateOpportunityType($input: CreateOpportunityTypeInput!) {
  createOpportunityType(input: $input) {
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
export const updateOpportunityType = `mutation UpdateOpportunityType($input: UpdateOpportunityTypeInput!) {
  updateOpportunityType(input: $input) {
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
export const deleteOpportunityType = `mutation DeleteOpportunityType($input: DeleteOpportunityTypeInput!) {
  deleteOpportunityType(input: $input) {
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
