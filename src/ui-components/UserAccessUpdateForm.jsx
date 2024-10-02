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
import { getUserAccess } from "../graphql/queries";
import { updateUserAccess } from "../graphql/mutations";
const client = generateClient();
export default function UserAccessUpdateForm(props) {
  const {
    id: idProp,
    userAccess: userAccessModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    adminAccess: "",
  };
  const [adminAccess, setAdminAccess] = React.useState(
    initialValues.adminAccess
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userAccessRecord
      ? { ...initialValues, ...userAccessRecord }
      : initialValues;
    setAdminAccess(cleanValues.adminAccess);
    setErrors({});
  };
  const [userAccessRecord, setUserAccessRecord] =
    React.useState(userAccessModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserAccess.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserAccess
        : userAccessModelProp;
      setUserAccessRecord(record);
    };
    queryData();
  }, [idProp, userAccessModelProp]);
  React.useEffect(resetStateValues, [userAccessRecord]);
  const validations = {
    adminAccess: [],
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
          adminAccess: adminAccess ?? null,
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
            query: updateUserAccess.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userAccessRecord.id,
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
      {...getOverrideProps(overrides, "UserAccessUpdateForm")}
      {...rest}
    >
      <TextField
        label="Admin access"
        isRequired={false}
        isReadOnly={false}
        value={adminAccess}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminAccess: value,
            };
            const result = onChange(modelFields);
            value = result?.adminAccess ?? value;
          }
          if (errors.adminAccess?.hasError) {
            runValidationTasks("adminAccess", value);
          }
          setAdminAccess(value);
        }}
        onBlur={() => runValidationTasks("adminAccess", adminAccess)}
        errorMessage={errors.adminAccess?.errorMessage}
        hasError={errors.adminAccess?.hasError}
        {...getOverrideProps(overrides, "adminAccess")}
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
          isDisabled={!(idProp || userAccessModelProp)}
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
              !(idProp || userAccessModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
