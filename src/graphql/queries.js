/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      Company_Name
      Types
      Next_Payment_Date
      Ec2_IP_Address
      Payment_Status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Company_Name
        Types
        Next_Payment_Date
        Ec2_IP_Address
        Payment_Status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      Company_Name
      Phone_Number
      City
      Business_Field
      Contact_Person
      Contact_Phone_Number
      Description
      Amount_People
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Company_Name
        Phone_Number
        City
        Business_Field
        Contact_Person
        Contact_Phone_Number
        Description
        Amount_People
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
