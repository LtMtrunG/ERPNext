/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onCreatePlan(filter: $filter) {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onUpdatePlan(filter: $filter) {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($filter: ModelSubscriptionPlanFilterInput) {
    onDeletePlan(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      User_Pool_Id
      EventID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      User_Pool_Id
      EventID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      User_Pool_Id
      EventID
      createdAt
      updatedAt
      __typename
    }
  }
`;
