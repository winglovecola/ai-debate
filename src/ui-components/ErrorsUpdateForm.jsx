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
import { getErrors } from "../graphql/queries";
import { updateErrors } from "../graphql/mutations";
const client = generateClient();
export default function ErrorsUpdateForm(props) {
  const {
    id: idProp,
    errors: errorsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    errorType: "",
    title: "",
    detail: "",
  };
  const [errorType, setErrorType] = React.useState(initialValues.errorType);
  const [title, setTitle] = React.useState(initialValues.title);
  const [detail, setDetail] = React.useState(initialValues.detail);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = errorsRecord
      ? { ...initialValues, ...errorsRecord }
      : initialValues;
    setErrorType(cleanValues.errorType);
    setTitle(cleanValues.title);
    setDetail(cleanValues.detail);
    setErrors({});
  };
  const [errorsRecord, setErrorsRecord] = React.useState(errorsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getErrors.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getErrors
        : errorsModelProp;
      setErrorsRecord(record);
    };
    queryData();
  }, [idProp, errorsModelProp]);
  React.useEffect(resetStateValues, [errorsRecord]);
  const validations = {
    errorType: [],
    title: [],
    detail: [],
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
          errorType: errorType ?? null,
          title: title ?? null,
          detail: detail ?? null,
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
            query: updateErrors.replaceAll("__typename", ""),
            variables: {
              input: {
                id: errorsRecord.id,
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
      {...getOverrideProps(overrides, "ErrorsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Error type"
        isRequired={false}
        isReadOnly={false}
        value={errorType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              errorType: value,
              title,
              detail,
            };
            const result = onChange(modelFields);
            value = result?.errorType ?? value;
          }
          if (errors.errorType?.hasError) {
            runValidationTasks("errorType", value);
          }
          setErrorType(value);
        }}
        onBlur={() => runValidationTasks("errorType", errorType)}
        errorMessage={errors.errorType?.errorMessage}
        hasError={errors.errorType?.hasError}
        {...getOverrideProps(overrides, "errorType")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              errorType,
              title: value,
              detail,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Detail"
        isRequired={false}
        isReadOnly={false}
        value={detail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              errorType,
              title,
              detail: value,
            };
            const result = onChange(modelFields);
            value = result?.detail ?? value;
          }
          if (errors.detail?.hasError) {
            runValidationTasks("detail", value);
          }
          setDetail(value);
        }}
        onBlur={() => runValidationTasks("detail", detail)}
        errorMessage={errors.detail?.errorMessage}
        hasError={errors.detail?.hasError}
        {...getOverrideProps(overrides, "detail")}
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
          isDisabled={!(idProp || errorsModelProp)}
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
              !(idProp || errorsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
