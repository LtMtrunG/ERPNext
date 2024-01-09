/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      Id
      Company_Name
      Types
      Next_Payment_Date
      Ec2_IP_Address
      Payment_Status
      id
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
        Id
        Company_Name
        Types
        Next_Payment_Date
        Ec2_IP_Address
        Payment_Status
        id
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
  query GetUser($User_Pool_Id: ID!) {
    getUser(User_Pool_Id: $User_Pool_Id) {
      User_Pool_Id
      Company_Name
      Phone_Number
      City
      Business_Field
      Contact_Person
      Contact_Phone_Number
      Description
      Amount_People
      Plan_Id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $User_Pool_Id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      User_Pool_Id: $User_Pool_Id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        User_Pool_Id
        Company_Name
        Phone_Number
        City
        Business_Field
        Contact_Person
        Contact_Phone_Number
        Description
        Amount_People
        Plan_Id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
