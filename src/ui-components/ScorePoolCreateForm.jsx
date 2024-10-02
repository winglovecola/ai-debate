/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createScorePool } from "../graphql/mutations";
const client = generateClient();
export default function ScorePoolCreateForm(props) {
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
    type: "",
    category: "",
    title: "",
    loyaltyBonusPoints: "",
    loyaltyBonusPointsCumulative: false,
    scoreData: "",
    status: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [category, setCategory] = React.useState(initialValues.category);
  const [title, setTitle] = React.useState(initialValues.title);
  const [loyaltyBonusPoints, setLoyaltyBonusPoints] = React.useState(
    initialValues.loyaltyBonusPoints
  );
  const [loyaltyBonusPointsCumulative, setLoyaltyBonusPointsCumulative] =
    React.useState(initialValues.loyaltyBonusPointsCumulative);
  const [scoreData, setScoreData] = React.useState(initialValues.scoreData);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType(initialValues.type);
    setCategory(initialValues.category);
    setTitle(initialValues.title);
    setLoyaltyBonusPoints(initialValues.loyaltyBonusPoints);
    setLoyaltyBonusPointsCumulative(initialValues.loyaltyBonusPointsCumulative);
    setScoreData(initialValues.scoreData);
    setStatus(initialValues.status);
    setErrors({});
  };
  const validations = {
    type: [],
    category: [],
    title: [],
    loyaltyBonusPoints: [],
    loyaltyBonusPointsCumulative: [],
    scoreData: [],
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
          type,
          category,
          title,
          loyaltyBonusPoints,
          loyaltyBonusPointsCumulative,
          scoreData,
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
            query: createScorePool.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ScorePoolCreateForm")}
      {...rest}
    >
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              category,
              title,
              loyaltyBonusPoints,
              loyaltyBonusPointsCumulative,
              scoreData,
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
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              category: value,
              title,
              loyaltyBonusPoints,
              loyaltyBonusPointsCumulative,
              scoreData,
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
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              category,
              title: value,
              loyaltyBonusPoints,
              loyaltyBonusPointsCumulative,
              scoreData,
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
        label="Loyalty bonus points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={loyaltyBonusPoints}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              category,
              title,
              loyaltyBonusPoints: value,
              loyaltyBonusPointsCumulative,
              scoreData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.loyaltyBonusPoints ?? value;
          }
          if (errors.loyaltyBonusPoints?.hasError) {
            runValidationTasks("loyaltyBonusPoints", value);
          }
          setLoyaltyBonusPoints(value);
        }}
        onBlur={() =>
          runValidationTasks("loyaltyBonusPoints", loyaltyBonusPoints)
        }
        errorMessage={errors.loyaltyBonusPoints?.errorMessage}
        hasError={errors.loyaltyBonusPoints?.hasError}
        {...getOverrideProps(overrides, "loyaltyBonusPoints")}
      ></TextField>
      <SwitchField
        label="Loyalty bonus points cumulative"
        defaultChecked={false}
        isDisabled={false}
        isChecked={loyaltyBonusPointsCumulative}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              type,
              category,
              title,
              loyaltyBonusPoints,
              loyaltyBonusPointsCumulative: value,
              scoreData,
              status,
            };
            const result = onChange(modelFields);
            value = result?.loyaltyBonusPointsCumulative ?? value;
          }
          if (errors.loyaltyBonusPointsCumulative?.hasError) {
            runValidationTasks("loyaltyBonusPointsCumulative", value);
          }
          setLoyaltyBonusPointsCumulative(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "loyaltyBonusPointsCumulative",
            loyaltyBonusPointsCumulative
          )
        }
        errorMessage={errors.loyaltyBonusPointsCumulative?.errorMessage}
        hasError={errors.loyaltyBonusPointsCumulative?.hasError}
        {...getOverrideProps(overrides, "loyaltyBonusPointsCumulative")}
      ></SwitchField>
      <TextField
        label="Score data"
        isRequired={false}
        isReadOnly={false}
        value={scoreData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              category,
              title,
              loyaltyBonusPoints,
              loyaltyBonusPointsCumulative,
              scoreData: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.scoreData ?? value;
          }
          if (errors.scoreData?.hasError) {
            runValidationTasks("scoreData", value);
          }
          setScoreData(value);
        }}
        onBlur={() => runValidationTasks("scoreData", scoreData)}
        errorMessage={errors.scoreData?.errorMessage}
        hasError={errors.scoreData?.hasError}
        {...getOverrideProps(overrides, "scoreData")}
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
              type,
              category,
              title,
              loyaltyBonusPoints,
              loyaltyBonusPointsCumulative,
              scoreData,
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
