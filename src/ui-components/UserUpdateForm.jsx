/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUser } from "../graphql/queries";
import { updateUser } from "../graphql/mutations";
const client = generateClient();
export default function UserUpdateForm(props) {
  const {
    User_Pool_Id: User_Pool_IdProp,
    user: userModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    User_Pool_Id: "",
    Company_Name: "",
    Phone_Number: "",
    City: "",
    Business_Field: "",
    Contact_Person: "",
    Contact_Phone_Number: "",
    Description: "",
    Amount_People: "",
    Plan_Id: "",
  };
  const [User_Pool_Id, setUser_Pool_Id] = React.useState(
    initialValues.User_Pool_Id
  );
  const [Company_Name, setCompany_Name] = React.useState(
    initialValues.Company_Name
  );
  const [Phone_Number, setPhone_Number] = React.useState(
    initialValues.Phone_Number
  );
  const [City, setCity] = React.useState(initialValues.City);
  const [Business_Field, setBusiness_Field] = React.useState(
    initialValues.Business_Field
  );
  const [Contact_Person, setContact_Person] = React.useState(
    initialValues.Contact_Person
  );
  const [Contact_Phone_Number, setContact_Phone_Number] = React.useState(
    initialValues.Contact_Phone_Number
  );
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Amount_People, setAmount_People] = React.useState(
    initialValues.Amount_People
  );
  const [Plan_Id, setPlan_Id] = React.useState(initialValues.Plan_Id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setUser_Pool_Id(cleanValues.User_Pool_Id);
    setCompany_Name(cleanValues.Company_Name);
    setPhone_Number(cleanValues.Phone_Number);
    setCity(cleanValues.City);
    setBusiness_Field(cleanValues.Business_Field);
    setContact_Person(cleanValues.Contact_Person);
    setContact_Phone_Number(cleanValues.Contact_Phone_Number);
    setDescription(cleanValues.Description);
    setAmount_People(cleanValues.Amount_People);
    setPlan_Id(cleanValues.Plan_Id);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = User_Pool_IdProp
        ? (
            await client.graphql({
              query: getUser.replaceAll("__typename", ""),
              variables: { User_Pool_Id: User_Pool_IdProp },
            })
          )?.data?.getUser
        : userModelProp;
      setUserRecord(record);
    };
    queryData();
  }, [User_Pool_IdProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    User_Pool_Id: [{ type: "Required" }],
    Company_Name: [],
    Phone_Number: [],
    City: [],
    Business_Field: [],
    Contact_Person: [],
    Contact_Phone_Number: [],
    Description: [],
    Amount_People: [],
    Plan_Id: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          User_Pool_Id,
          Company_Name: Company_Name ?? null,
          Phone_Number: Phone_Number ?? null,
          City: City ?? null,
          Business_Field: Business_Field ?? null,
          Contact_Person: Contact_Person ?? null,
          Contact_Phone_Number: Contact_Phone_Number ?? null,
          Description: Description ?? null,
          Amount_People: Amount_People ?? null,
          Plan_Id: Plan_Id ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateUser.replaceAll("__typename", ""),
            variables: {
              input: {
                User_Pool_Id: userRecord.User_Pool_Id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
      <TextField
        label="User pool id"
        isRequired={true}
        isReadOnly={true}
        value={User_Pool_Id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_Pool_Id: value,
              Company_Name,
              Phone_Number,
              City,
              Business_Field,
              Contact_Person,
              Contact_Phone_Number,
              Description,
              Amount_People,
              Plan_Id,
            };
            const result = onChange(modelFields);
            value = result?.User_Pool_Id ?? value;
          }
          if (errors.User_Pool_Id?.hasError) {
            runValidationTasks("User_Pool_Id", value);
          }
          setUser_Pool_Id(value);
        }}
        onBlur={() => runValidationTasks("User_Pool_Id", User_Pool_Id)}
        errorMessage={errors.User_Pool_Id?.errorMessage}
        hasError={errors.User_Pool_Id?.hasError}
        {...getOverrideProps(overrides, "User_Pool_Id")}
      ></TextField>
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={Company_Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_Pool_Id,
              Company_Name: value,
              Phone_Number,
              City,
              Business_Field,
              Contact_Person,
              Contact_Phone_Number,
              Description,
              Amount_People,
              Plan_Id,
            };
            const result = onChange(modelFields);
            value = result?.Company_Name ?? value;
          }
          if (errors.Company_Name?.hasError) {
            runValidationTasks("Company_Name", value);
          }
          setCompany_Name(value);
        }}
        onBlur={() => runValidationTasks("Company_Name", Company_Name)}
        errorMessage={errors.Company_Name?.errorMessage}
        hasError={errors.Company_Name?.hasError}
        {...getOverrideProps(overrides, "Company_Name")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        value={Phone_Number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_Pool_Id,
              Company_Name,
              Phone_Number: value,
              City,
              Business_Field,
              Contact_Person,
              Contact_Phone_Number,
              Description,
              Amount_People,
              Plan_Id,
            };
            const result = onChange(modelFields);
            value = result?.Phone_Number ?? value;
          }
          if (errors.Phone_Number?.hasError) {
            runValidationTasks("Phone_Number", value);
          }
          setPhone_Number(value);
        }}
        onBlur={() => runValidationTasks("Phone_Number", Phone_Number)}
        errorMessage={errors.Phone_Number?.errorMessage}
        hasError={errors.Phone_Number?.hasError}
        {...getOverrideProps(overrides, "Phone_Number")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={City}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_Pool_Id,
              Company_Name,
              Phone_Number,
              City: value,
              Business_Field,
              Contact_Person,
              Contact_Phone_Number,
              Description,
              Amount_People,
              Plan_Id,
            };
            const result = onChange(modelFields);
            value = result?.City ?? value;
          }
          if (errors.City?.hasError) {
            runValidationTasks("City", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("City", City)}
        errorMessage={errors.City?.errorMessage}
        hasError={errors.City?.hasError}
        {...getOverrideProps(overrides, "City")}
      ></TextField>
      <TextField
        label="Business field"
        isRequired={false}
        isReadOnly={false}
        value={Business_Field}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_Pool_Id,
              Company_Name,
              Phone_Number,
              City,
              Business_Field: value,
              Contact_Person,
              Contact_Phone_Number,
              Description,
              Amount_People,
              Plan_Id,
            };
            const result = onChange(modelFields);
            value = result?.Business_Field ?? value;
          }
          if (errors.Business_Field?.hasError) {
            runValidationTasks("Business_Field", value);
          }
          setBusiness_Field(value);
        }}
        onBlur={() => runValidationTasks("Business_Field", Business_Field)}
        errorMessage={errors.Business_Field?.errorMessage}
        hasError={errors.Business_Field?.hasError}
        {...getOverrideProps(overrides, "Business_Field")}
      ></TextField>
      <TextField
        label="Contact person"
        isRequired={false}
        isReadOnly={false}
        value={Contact_Person}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_Pool_Id,
              Company_Name,
              Phone_Number,
              City,
              Business_Field,
              Contact_Person: value,
              Contact_Phone_Number,
              Description,
              Amount_People,
              Plan_Id,
            };
            const result = onChange(modelFields);
            value = result?.Contact_Person ?? value;
          }
          if (errors.Contact_Person?.hasError) {
            runValidationTasks("Contact_Person", value);
          }
          setContact_Person(value);
        }}
        onBlur={() => runValidationTasks("Contact_Person", Contact_Person)}
        errorMessage={errors.Contact_Person?.errorMessage}
        hasError={errors.Contact_Person?.hasError}
        {...getOverrideProps(overrides, "Contact_Person")}
      ></TextField>
      <TextField
        label="Contact phone number"
        isRequired={false}
        isReadOnly={false}
        value={Contact_Phone_Number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_Pool_Id,
              Company_Name,
              Phone_Number,
              City,
              Business_Field,
              Contact_Person,
              Contact_Phone_Number: value,
              Description,
              Amount_People,
              Plan_Id,
            };
            const result = onChange(modelFields);
            value = result?.Contact_Phone_Number ?? value;
          }
          if (errors.Contact_Phone_Number?.hasError) {
            runValidationTasks("Contact_Phone_Number", value);
          }
          setContact_Phone_Number(value);
        }}
        onBlur={() =>
          runValidationTasks("Contact_Phone_Number", Contact_Phone_Number)
        }
        errorMessage={errors.Contact_Phone_Number?.errorMessage}
        hasError={errors.Contact_Phone_Number?.hasError}
        {...getOverrideProps(overrides, "Contact_Phone_Number")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_Pool_Id,
              Company_Name,
              Phone_Number,
              City,
              Business_Field,
              Contact_Person,
              Contact_Phone_Number,
              Description: value,
              Amount_People,
              Plan_Id,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <TextField
        label="Amount people"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Amount_People}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              User_Pool_Id,
              Company_Name,
              Phone_Number,
              City,
              Business_Field,
              Contact_Person,
              Contact_Phone_Number,
              Description,
              Amount_People: value,
              Plan_Id,
            };
            const result = onChange(modelFields);
            value = result?.Amount_People ?? value;
          }
          if (errors.Amount_People?.hasError) {
            runValidationTasks("Amount_People", value);
          }
          setAmount_People(value);
        }}
        onBlur={() => runValidationTasks("Amount_People", Amount_People)}
        errorMessage={errors.Amount_People?.errorMessage}
        hasError={errors.Amount_People?.hasError}
        {...getOverrideProps(overrides, "Amount_People")}
      ></TextField>
      <TextField
        label="Plan id"
        isRequired={false}
        isReadOnly={false}
        value={Plan_Id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_Pool_Id,
              Company_Name,
              Phone_Number,
              City,
              Business_Field,
              Contact_Person,
              Contact_Phone_Number,
              Description,
              Amount_People,
              Plan_Id: value,
            };
            const result = onChange(modelFields);
            value = result?.Plan_Id ?? value;
          }
          if (errors.Plan_Id?.hasError) {
            runValidationTasks("Plan_Id", value);
          }
          setPlan_Id(value);
        }}
        onBlur={() => runValidationTasks("Plan_Id", Plan_Id)}
        errorMessage={errors.Plan_Id?.errorMessage}
        hasError={errors.Plan_Id?.hasError}
        {...getOverrideProps(overrides, "Plan_Id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(User_Pool_IdProp || userModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(User_Pool_IdProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
