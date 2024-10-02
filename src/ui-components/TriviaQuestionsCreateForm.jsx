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
import { createTriviaQuestions } from "../graphql/mutations";
const client = generateClient();
export default function TriviaQuestionsCreateForm(props) {
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
    category: "",
    type: "",
    difficultyLvl: "",
    question: "",
    answerData: "",
    ansChoices: "",
    ansEncData: "",
    relatedShowsData: "",
    status: "",
  };
  const [category, setCategory] = React.useState(initialValues.category);
  const [type, setType] = React.useState(initialValues.type);
  const [difficultyLvl, setDifficultyLvl] = React.useState(
    initialValues.difficultyLvl
  );
  const [question, setQuestion] = React.useState(initialValues.question);
  const [answerData, setAnswerData] = React.useState(initialValues.answerData);
  const [ansChoices, setAnsChoices] = React.useState(initialValues.ansChoices);
  const [ansEncData, setAnsEncData] = React.useState(initialValues.ansEncData);
  const [relatedShowsData, setRelatedShowsData] = React.useState(
    initialValues.relatedShowsData
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCategory(initialValues.category);
    setType(initialValues.type);
    setDifficultyLvl(initialValues.difficultyLvl);
    setQuestion(initialValues.question);
    setAnswerData(initialValues.answerData);
    setAnsChoices(initialValues.ansChoices);
    setAnsEncData(initialValues.ansEncData);
    setRelatedShowsData(initialValues.relatedShowsData);
    setStatus(initialValues.status);
    setErrors({});
  };
  const validations = {
    category: [],
    type: [],
    difficultyLvl: [],
    question: [],
    answerData: [],
    ansChoices: [],
    ansEncData: [],
    relatedShowsData: [],
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
          category,
          type,
          difficultyLvl,
          question,
          answerData,
          ansChoices,
          ansEncData,
          relatedShowsData,
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
            query: createTriviaQuestions.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TriviaQuestionsCreateForm")}
      {...rest}
    >
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category: value,
              type,
              difficultyLvl,
              question,
              answerData,
              ansChoices,
              ansEncData,
              relatedShowsData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              type: value,
              difficultyLvl,
              question,
              answerData,
              ansChoices,
              ansEncData,
              relatedShowsData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Difficulty lvl"
        isRequired={false}
        isReadOnly={false}
        value={difficultyLvl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              type,
              difficultyLvl: value,
              question,
              answerData,
              ansChoices,
              ansEncData,
              relatedShowsData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.difficultyLvl ?? value;
          }
          if (errors.difficultyLvl?.hasError) {
            runValidationTasks("difficultyLvl", value);
          }
          setDifficultyLvl(value);
        }}
        onBlur={() => runValidationTasks("difficultyLvl", difficultyLvl)}
        errorMessage={errors.difficultyLvl?.errorMessage}
        hasError={errors.difficultyLvl?.hasError}
        {...getOverrideProps(overrides, "difficultyLvl")}
      ></TextField>
      <TextField
        label="Question"
        isRequired={false}
        isReadOnly={false}
        value={question}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              type,
              difficultyLvl,
              question: value,
              answerData,
              ansChoices,
              ansEncData,
              relatedShowsData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.question ?? value;
          }
          if (errors.question?.hasError) {
            runValidationTasks("question", value);
          }
          setQuestion(value);
        }}
        onBlur={() => runValidationTasks("question", question)}
        errorMessage={errors.question?.errorMessage}
        hasError={errors.question?.hasError}
        {...getOverrideProps(overrides, "question")}
      ></TextField>
      <TextField
        label="Answer data"
        isRequired={false}
        isReadOnly={false}
        value={answerData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              type,
              difficultyLvl,
              question,
              answerData: value,
              ansChoices,
              ansEncData,
              relatedShowsData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.answerData ?? value;
          }
          if (errors.answerData?.hasError) {
            runValidationTasks("answerData", value);
          }
          setAnswerData(value);
        }}
        onBlur={() => runValidationTasks("answerData", answerData)}
        errorMessage={errors.answerData?.errorMessage}
        hasError={errors.answerData?.hasError}
        {...getOverrideProps(overrides, "answerData")}
      ></TextField>
      <TextField
        label="Ans choices"
        isRequired={false}
        isReadOnly={false}
        value={ansChoices}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              type,
              difficultyLvl,
              question,
              answerData,
              ansChoices: value,
              ansEncData,
              relatedShowsData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.ansChoices ?? value;
          }
          if (errors.ansChoices?.hasError) {
            runValidationTasks("ansChoices", value);
          }
          setAnsChoices(value);
        }}
        onBlur={() => runValidationTasks("ansChoices", ansChoices)}
        errorMessage={errors.ansChoices?.errorMessage}
        hasError={errors.ansChoices?.hasError}
        {...getOverrideProps(overrides, "ansChoices")}
      ></TextField>
      <TextField
        label="Ans enc data"
        isRequired={false}
        isReadOnly={false}
        value={ansEncData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              type,
              difficultyLvl,
              question,
              answerData,
              ansChoices,
              ansEncData: value,
              relatedShowsData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.ansEncData ?? value;
          }
          if (errors.ansEncData?.hasError) {
            runValidationTasks("ansEncData", value);
          }
          setAnsEncData(value);
        }}
        onBlur={() => runValidationTasks("ansEncData", ansEncData)}
        errorMessage={errors.ansEncData?.errorMessage}
        hasError={errors.ansEncData?.hasError}
        {...getOverrideProps(overrides, "ansEncData")}
      ></TextField>
      <TextField
        label="Related shows data"
        isRequired={false}
        isReadOnly={false}
        value={relatedShowsData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              type,
              difficultyLvl,
              question,
              answerData,
              ansChoices,
              ansEncData,
              relatedShowsData: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.relatedShowsData ?? value;
          }
          if (errors.relatedShowsData?.hasError) {
            runValidationTasks("relatedShowsData", value);
          }
          setRelatedShowsData(value);
        }}
        onBlur={() => runValidationTasks("relatedShowsData", relatedShowsData)}
        errorMessage={errors.relatedShowsData?.errorMessage}
        hasError={errors.relatedShowsData?.hasError}
        {...getOverrideProps(overrides, "relatedShowsData")}
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
              category,
              type,
              difficultyLvl,
              question,
              answerData,
              ansChoices,
              ansEncData,
              relatedShowsData,
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
