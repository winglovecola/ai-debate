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
import { createUserStat } from "../graphql/mutations";
const client = generateClient();
export default function UserStatCreateForm(props) {
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
    trPlayCount: "",
    trFreePlayCount: "",
  };
  const [trPlayCount, setTrPlayCount] = React.useState(
    initialValues.trPlayCount
  );
  const [trFreePlayCount, setTrFreePlayCount] = React.useState(
    initialValues.trFreePlayCount
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTrPlayCount(initialValues.trPlayCount);
    setTrFreePlayCount(initialValues.trFreePlayCount);
    setErrors({});
  };
  const validations = {
    trPlayCount: [],
    trFreePlayCount: [],
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
          trPlayCount,
          trFreePlayCount,
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
            query: createUserStat.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "UserStatCreateForm")}
      {...rest}
    >
      <TextField
        label="Tr play count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trPlayCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              trPlayCount: value,
              trFreePlayCount,
            };
            const result = onChange(modelFields);
            value = result?.trPlayCount ?? value;
          }
          if (errors.trPlayCount?.hasError) {
            runValidationTasks("trPlayCount", value);
          }
          setTrPlayCount(value);
        }}
        onBlur={() => runValidationTasks("trPlayCount", trPlayCount)}
        errorMessage={errors.trPlayCount?.errorMessage}
        hasError={errors.trPlayCount?.hasError}
        {...getOverrideProps(overrides, "trPlayCount")}
      ></TextField>
      <TextField
        label="Tr free play count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trFreePlayCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              trPlayCount,
              trFreePlayCount: value,
            };
            const result = onChange(modelFields);
            value = result?.trFreePlayCount ?? value;
          }
          if (errors.trFreePlayCount?.hasError) {
            runValidationTasks("trFreePlayCount", value);
          }
          setTrFreePlayCount(value);
        }}
        onBlur={() => runValidationTasks("trFreePlayCount", trFreePlayCount)}
        errorMessage={errors.trFreePlayCount?.errorMessage}
        hasError={errors.trFreePlayCount?.hasError}
        {...getOverrideProps(overrides, "trFreePlayCount")}
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
