/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
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
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
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
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
