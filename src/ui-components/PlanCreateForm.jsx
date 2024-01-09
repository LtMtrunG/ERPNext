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
import { createPlan } from "../graphql/mutations";
const client = generateClient();
export default function PlanCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Id: "",
    Company_Name: "",
    Types: "",
    Next_Payment_Date: "",
    Ec2_IP_Address: "",
    Payment_Status: "",
  };
  const [Id, setId] = React.useState(initialValues.Id);
  const [Company_Name, setCompany_Name] = React.useState(
    initialValues.Company_Name
  );
  const [Types, setTypes] = React.useState(initialValues.Types);
  const [Next_Payment_Date, setNext_Payment_Date] = React.useState(
    initialValues.Next_Payment_Date
  );
  const [Ec2_IP_Address, setEc2_IP_Address] = React.useState(
    initialValues.Ec2_IP_Address
  );
  const [Payment_Status, setPayment_Status] = React.useState(
    initialValues.Payment_Status
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setId(initialValues.Id);
    setCompany_Name(initialValues.Company_Name);
    setTypes(initialValues.Types);
    setNext_Payment_Date(initialValues.Next_Payment_Date);
    setEc2_IP_Address(initialValues.Ec2_IP_Address);
    setPayment_Status(initialValues.Payment_Status);
    setErrors({});
  };
  const validations = {
    Id: [{ type: "Required" }],
    Company_Name: [],
    Types: [],
    Next_Payment_Date: [],
    Ec2_IP_Address: [],
    Payment_Status: [],
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
          Id,
          Company_Name,
          Types,
          Next_Payment_Date,
          Ec2_IP_Address,
          Payment_Status,
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
            query: createPlan.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlanCreateForm")}
      {...rest}
    >
      <TextField
        label="Id"
        isRequired={true}
        isReadOnly={false}
        value={Id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Id: value,
              Company_Name,
              Types,
              Next_Payment_Date,
              Ec2_IP_Address,
              Payment_Status,
            };
            const result = onChange(modelFields);
            value = result?.Id ?? value;
          }
          if (errors.Id?.hasError) {
            runValidationTasks("Id", value);
          }
          setId(value);
        }}
        onBlur={() => runValidationTasks("Id", Id)}
        errorMessage={errors.Id?.errorMessage}
        hasError={errors.Id?.hasError}
        {...getOverrideProps(overrides, "Id")}
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
              Id,
              Company_Name: value,
              Types,
              Next_Payment_Date,
              Ec2_IP_Address,
              Payment_Status,
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
        label="Types"
        isRequired={false}
        isReadOnly={false}
        value={Types}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Id,
              Company_Name,
              Types: value,
              Next_Payment_Date,
              Ec2_IP_Address,
              Payment_Status,
            };
            const result = onChange(modelFields);
            value = result?.Types ?? value;
          }
          if (errors.Types?.hasError) {
            runValidationTasks("Types", value);
          }
          setTypes(value);
        }}
        onBlur={() => runValidationTasks("Types", Types)}
        errorMessage={errors.Types?.errorMessage}
        hasError={errors.Types?.hasError}
        {...getOverrideProps(overrides, "Types")}
      ></TextField>
      <TextField
        label="Next payment date"
        isRequired={false}
        isReadOnly={false}
        value={Next_Payment_Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Id,
              Company_Name,
              Types,
              Next_Payment_Date: value,
              Ec2_IP_Address,
              Payment_Status,
            };
            const result = onChange(modelFields);
            value = result?.Next_Payment_Date ?? value;
          }
          if (errors.Next_Payment_Date?.hasError) {
            runValidationTasks("Next_Payment_Date", value);
          }
          setNext_Payment_Date(value);
        }}
        onBlur={() =>
          runValidationTasks("Next_Payment_Date", Next_Payment_Date)
        }
        errorMessage={errors.Next_Payment_Date?.errorMessage}
        hasError={errors.Next_Payment_Date?.hasError}
        {...getOverrideProps(overrides, "Next_Payment_Date")}
      ></TextField>
      <TextField
        label="Ec2 ip address"
        isRequired={false}
        isReadOnly={false}
        value={Ec2_IP_Address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Id,
              Company_Name,
              Types,
              Next_Payment_Date,
              Ec2_IP_Address: value,
              Payment_Status,
            };
            const result = onChange(modelFields);
            value = result?.Ec2_IP_Address ?? value;
          }
          if (errors.Ec2_IP_Address?.hasError) {
            runValidationTasks("Ec2_IP_Address", value);
          }
          setEc2_IP_Address(value);
        }}
        onBlur={() => runValidationTasks("Ec2_IP_Address", Ec2_IP_Address)}
        errorMessage={errors.Ec2_IP_Address?.errorMessage}
        hasError={errors.Ec2_IP_Address?.hasError}
        {...getOverrideProps(overrides, "Ec2_IP_Address")}
      ></TextField>
      <TextField
        label="Payment status"
        isRequired={false}
        isReadOnly={false}
        value={Payment_Status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Id,
              Company_Name,
              Types,
              Next_Payment_Date,
              Ec2_IP_Address,
              Payment_Status: value,
            };
            const result = onChange(modelFields);
            value = result?.Payment_Status ?? value;
          }
          if (errors.Payment_Status?.hasError) {
            runValidationTasks("Payment_Status", value);
          }
          setPayment_Status(value);
        }}
        onBlur={() => runValidationTasks("Payment_Status", Payment_Status)}
        errorMessage={errors.Payment_Status?.errorMessage}
        hasError={errors.Payment_Status?.hasError}
        {...getOverrideProps(overrides, "Payment_Status")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
