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
import { createAppSetting } from "../graphql/mutations";
const client = generateClient();
export default function AppSettingCreateForm(props) {
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
    homeIntroDescription: "",
    homeIntroStreamUrl: "",
    homeWinnerDescription: "",
    homeWinnerStreamUrl: "",
  };
  const [homeIntroDescription, setHomeIntroDescription] = React.useState(
    initialValues.homeIntroDescription
  );
  const [homeIntroStreamUrl, setHomeIntroStreamUrl] = React.useState(
    initialValues.homeIntroStreamUrl
  );
  const [homeWinnerDescription, setHomeWinnerDescription] = React.useState(
    initialValues.homeWinnerDescription
  );
  const [homeWinnerStreamUrl, setHomeWinnerStreamUrl] = React.useState(
    initialValues.homeWinnerStreamUrl
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setHomeIntroDescription(initialValues.homeIntroDescription);
    setHomeIntroStreamUrl(initialValues.homeIntroStreamUrl);
    setHomeWinnerDescription(initialValues.homeWinnerDescription);
    setHomeWinnerStreamUrl(initialValues.homeWinnerStreamUrl);
    setErrors({});
  };
  const validations = {
    homeIntroDescription: [],
    homeIntroStreamUrl: [],
    homeWinnerDescription: [],
    homeWinnerStreamUrl: [],
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
          homeIntroDescription,
          homeIntroStreamUrl,
          homeWinnerDescription,
          homeWinnerStreamUrl,
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
            query: createAppSetting.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "AppSettingCreateForm")}
      {...rest}
    >
      <TextField
        label="Home intro description"
        isRequired={false}
        isReadOnly={false}
        value={homeIntroDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              homeIntroDescription: value,
              homeIntroStreamUrl,
              homeWinnerDescription,
              homeWinnerStreamUrl,
            };
            const result = onChange(modelFields);
            value = result?.homeIntroDescription ?? value;
          }
          if (errors.homeIntroDescription?.hasError) {
            runValidationTasks("homeIntroDescription", value);
          }
          setHomeIntroDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("homeIntroDescription", homeIntroDescription)
        }
        errorMessage={errors.homeIntroDescription?.errorMessage}
        hasError={errors.homeIntroDescription?.hasError}
        {...getOverrideProps(overrides, "homeIntroDescription")}
      ></TextField>
      <TextField
        label="Home intro stream url"
        isRequired={false}
        isReadOnly={false}
        value={homeIntroStreamUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              homeIntroDescription,
              homeIntroStreamUrl: value,
              homeWinnerDescription,
              homeWinnerStreamUrl,
            };
            const result = onChange(modelFields);
            value = result?.homeIntroStreamUrl ?? value;
          }
          if (errors.homeIntroStreamUrl?.hasError) {
            runValidationTasks("homeIntroStreamUrl", value);
          }
          setHomeIntroStreamUrl(value);
        }}
        onBlur={() =>
          runValidationTasks("homeIntroStreamUrl", homeIntroStreamUrl)
        }
        errorMessage={errors.homeIntroStreamUrl?.errorMessage}
        hasError={errors.homeIntroStreamUrl?.hasError}
        {...getOverrideProps(overrides, "homeIntroStreamUrl")}
      ></TextField>
      <TextField
        label="Home winner description"
        isRequired={false}
        isReadOnly={false}
        value={homeWinnerDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              homeIntroDescription,
              homeIntroStreamUrl,
              homeWinnerDescription: value,
              homeWinnerStreamUrl,
            };
            const result = onChange(modelFields);
            value = result?.homeWinnerDescription ?? value;
          }
          if (errors.homeWinnerDescription?.hasError) {
            runValidationTasks("homeWinnerDescription", value);
          }
          setHomeWinnerDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("homeWinnerDescription", homeWinnerDescription)
        }
        errorMessage={errors.homeWinnerDescription?.errorMessage}
        hasError={errors.homeWinnerDescription?.hasError}
        {...getOverrideProps(overrides, "homeWinnerDescription")}
      ></TextField>
      <TextField
        label="Home winner stream url"
        isRequired={false}
        isReadOnly={false}
        value={homeWinnerStreamUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              homeIntroDescription,
              homeIntroStreamUrl,
              homeWinnerDescription,
              homeWinnerStreamUrl: value,
            };
            const result = onChange(modelFields);
            value = result?.homeWinnerStreamUrl ?? value;
          }
          if (errors.homeWinnerStreamUrl?.hasError) {
            runValidationTasks("homeWinnerStreamUrl", value);
          }
          setHomeWinnerStreamUrl(value);
        }}
        onBlur={() =>
          runValidationTasks("homeWinnerStreamUrl", homeWinnerStreamUrl)
        }
        errorMessage={errors.homeWinnerStreamUrl?.errorMessage}
        hasError={errors.homeWinnerStreamUrl?.hasError}
        {...getOverrideProps(overrides, "homeWinnerStreamUrl")}
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
