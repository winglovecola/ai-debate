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
import { createTrivia } from "../graphql/mutations";
const client = generateClient();
export default function TriviaCreateForm(props) {
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
    title: "",
    description: "",
    questionTotalCount: "",
    questionTimeLimit: "",
    questionSequenceData: "",
    status: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [questionTotalCount, setQuestionTotalCount] = React.useState(
    initialValues.questionTotalCount
  );
  const [questionTimeLimit, setQuestionTimeLimit] = React.useState(
    initialValues.questionTimeLimit
  );
  const [questionSequenceData, setQuestionSequenceData] = React.useState(
    initialValues.questionSequenceData
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setQuestionTotalCount(initialValues.questionTotalCount);
    setQuestionTimeLimit(initialValues.questionTimeLimit);
    setQuestionSequenceData(initialValues.questionSequenceData);
    setStatus(initialValues.status);
    setErrors({});
  };
  const validations = {
    title: [],
    description: [],
    questionTotalCount: [],
    questionTimeLimit: [],
    questionSequenceData: [],
    status: [],
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
          title,
          description,
          questionTotalCount,
          questionTimeLimit,
          questionSequenceData,
          status,
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
            query: createTrivia.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TriviaCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              questionTotalCount,
              questionTimeLimit,
              questionSequenceData,
              status,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              questionTotalCount,
              questionTimeLimit,
              questionSequenceData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Question total count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={questionTotalCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              questionTotalCount: value,
              questionTimeLimit,
              questionSequenceData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.questionTotalCount ?? value;
          }
          if (errors.questionTotalCount?.hasError) {
            runValidationTasks("questionTotalCount", value);
          }
          setQuestionTotalCount(value);
        }}
        onBlur={() =>
          runValidationTasks("questionTotalCount", questionTotalCount)
        }
        errorMessage={errors.questionTotalCount?.errorMessage}
        hasError={errors.questionTotalCount?.hasError}
        {...getOverrideProps(overrides, "questionTotalCount")}
      ></TextField>
      <TextField
        label="Question time limit"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={questionTimeLimit}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              questionTotalCount,
              questionTimeLimit: value,
              questionSequenceData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.questionTimeLimit ?? value;
          }
          if (errors.questionTimeLimit?.hasError) {
            runValidationTasks("questionTimeLimit", value);
          }
          setQuestionTimeLimit(value);
        }}
        onBlur={() =>
          runValidationTasks("questionTimeLimit", questionTimeLimit)
        }
        errorMessage={errors.questionTimeLimit?.errorMessage}
        hasError={errors.questionTimeLimit?.hasError}
        {...getOverrideProps(overrides, "questionTimeLimit")}
      ></TextField>
      <TextField
        label="Question sequence data"
        isRequired={false}
        isReadOnly={false}
        value={questionSequenceData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              questionTotalCount,
              questionTimeLimit,
              questionSequenceData: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.questionSequenceData ?? value;
          }
          if (errors.questionSequenceData?.hasError) {
            runValidationTasks("questionSequenceData", value);
          }
          setQuestionSequenceData(value);
        }}
        onBlur={() =>
          runValidationTasks("questionSequenceData", questionSequenceData)
        }
        errorMessage={errors.questionSequenceData?.errorMessage}
        hasError={errors.questionSequenceData?.hasError}
        {...getOverrideProps(overrides, "questionSequenceData")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              questionTotalCount,
              questionTimeLimit,
              questionSequenceData,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
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
