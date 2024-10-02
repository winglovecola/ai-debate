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
import { getUserPointsRecord } from "../graphql/queries";
import { updateUserPointsRecord } from "../graphql/mutations";
const client = generateClient();
export default function UserPointsRecordUpdateForm(props) {
  const {
    id: idProp,
    userPointsRecord: userPointsRecordModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    trLoyaltyBonus: "",
    trLoyalityPoints: "",
    trScore: "",
    trRanking: "",
    trRewardPoints: "",
    trTotalQuestions: "",
    trCorrectAnswers: "",
  };
  const [trLoyaltyBonus, setTrLoyaltyBonus] = React.useState(
    initialValues.trLoyaltyBonus
  );
  const [trLoyalityPoints, setTrLoyalityPoints] = React.useState(
    initialValues.trLoyalityPoints
  );
  const [trScore, setTrScore] = React.useState(initialValues.trScore);
  const [trRanking, setTrRanking] = React.useState(initialValues.trRanking);
  const [trRewardPoints, setTrRewardPoints] = React.useState(
    initialValues.trRewardPoints
  );
  const [trTotalQuestions, setTrTotalQuestions] = React.useState(
    initialValues.trTotalQuestions
  );
  const [trCorrectAnswers, setTrCorrectAnswers] = React.useState(
    initialValues.trCorrectAnswers
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userPointsRecordRecord
      ? { ...initialValues, ...userPointsRecordRecord }
      : initialValues;
    setTrLoyaltyBonus(cleanValues.trLoyaltyBonus);
    setTrLoyalityPoints(cleanValues.trLoyalityPoints);
    setTrScore(cleanValues.trScore);
    setTrRanking(cleanValues.trRanking);
    setTrRewardPoints(cleanValues.trRewardPoints);
    setTrTotalQuestions(cleanValues.trTotalQuestions);
    setTrCorrectAnswers(cleanValues.trCorrectAnswers);
    setErrors({});
  };
  const [userPointsRecordRecord, setUserPointsRecordRecord] = React.useState(
    userPointsRecordModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserPointsRecord.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserPointsRecord
        : userPointsRecordModelProp;
      setUserPointsRecordRecord(record);
    };
    queryData();
  }, [idProp, userPointsRecordModelProp]);
  React.useEffect(resetStateValues, [userPointsRecordRecord]);
  const validations = {
    trLoyaltyBonus: [],
    trLoyalityPoints: [],
    trScore: [],
    trRanking: [],
    trRewardPoints: [],
    trTotalQuestions: [],
    trCorrectAnswers: [],
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
          trLoyaltyBonus: trLoyaltyBonus ?? null,
          trLoyalityPoints: trLoyalityPoints ?? null,
          trScore: trScore ?? null,
          trRanking: trRanking ?? null,
          trRewardPoints: trRewardPoints ?? null,
          trTotalQuestions: trTotalQuestions ?? null,
          trCorrectAnswers: trCorrectAnswers ?? null,
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
            query: updateUserPointsRecord.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userPointsRecordRecord.id,
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
      {...getOverrideProps(overrides, "UserPointsRecordUpdateForm")}
      {...rest}
    >
      <TextField
        label="Tr loyalty bonus"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trLoyaltyBonus}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              trLoyaltyBonus: value,
              trLoyalityPoints,
              trScore,
              trRanking,
              trRewardPoints,
              trTotalQuestions,
              trCorrectAnswers,
            };
            const result = onChange(modelFields);
            value = result?.trLoyaltyBonus ?? value;
          }
          if (errors.trLoyaltyBonus?.hasError) {
            runValidationTasks("trLoyaltyBonus", value);
          }
          setTrLoyaltyBonus(value);
        }}
        onBlur={() => runValidationTasks("trLoyaltyBonus", trLoyaltyBonus)}
        errorMessage={errors.trLoyaltyBonus?.errorMessage}
        hasError={errors.trLoyaltyBonus?.hasError}
        {...getOverrideProps(overrides, "trLoyaltyBonus")}
      ></TextField>
      <TextField
        label="Tr loyality points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trLoyalityPoints}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              trLoyaltyBonus,
              trLoyalityPoints: value,
              trScore,
              trRanking,
              trRewardPoints,
              trTotalQuestions,
              trCorrectAnswers,
            };
            const result = onChange(modelFields);
            value = result?.trLoyalityPoints ?? value;
          }
          if (errors.trLoyalityPoints?.hasError) {
            runValidationTasks("trLoyalityPoints", value);
          }
          setTrLoyalityPoints(value);
        }}
        onBlur={() => runValidationTasks("trLoyalityPoints", trLoyalityPoints)}
        errorMessage={errors.trLoyalityPoints?.errorMessage}
        hasError={errors.trLoyalityPoints?.hasError}
        {...getOverrideProps(overrides, "trLoyalityPoints")}
      ></TextField>
      <TextField
        label="Tr score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trScore}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              trLoyaltyBonus,
              trLoyalityPoints,
              trScore: value,
              trRanking,
              trRewardPoints,
              trTotalQuestions,
              trCorrectAnswers,
            };
            const result = onChange(modelFields);
            value = result?.trScore ?? value;
          }
          if (errors.trScore?.hasError) {
            runValidationTasks("trScore", value);
          }
          setTrScore(value);
        }}
        onBlur={() => runValidationTasks("trScore", trScore)}
        errorMessage={errors.trScore?.errorMessage}
        hasError={errors.trScore?.hasError}
        {...getOverrideProps(overrides, "trScore")}
      ></TextField>
      <TextField
        label="Tr ranking"
        isRequired={false}
        isReadOnly={false}
        value={trRanking}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trLoyaltyBonus,
              trLoyalityPoints,
              trScore,
              trRanking: value,
              trRewardPoints,
              trTotalQuestions,
              trCorrectAnswers,
            };
            const result = onChange(modelFields);
            value = result?.trRanking ?? value;
          }
          if (errors.trRanking?.hasError) {
            runValidationTasks("trRanking", value);
          }
          setTrRanking(value);
        }}
        onBlur={() => runValidationTasks("trRanking", trRanking)}
        errorMessage={errors.trRanking?.errorMessage}
        hasError={errors.trRanking?.hasError}
        {...getOverrideProps(overrides, "trRanking")}
      ></TextField>
      <TextField
        label="Tr reward points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trRewardPoints}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              trLoyaltyBonus,
              trLoyalityPoints,
              trScore,
              trRanking,
              trRewardPoints: value,
              trTotalQuestions,
              trCorrectAnswers,
            };
            const result = onChange(modelFields);
            value = result?.trRewardPoints ?? value;
          }
          if (errors.trRewardPoints?.hasError) {
            runValidationTasks("trRewardPoints", value);
          }
          setTrRewardPoints(value);
        }}
        onBlur={() => runValidationTasks("trRewardPoints", trRewardPoints)}
        errorMessage={errors.trRewardPoints?.errorMessage}
        hasError={errors.trRewardPoints?.hasError}
        {...getOverrideProps(overrides, "trRewardPoints")}
      ></TextField>
      <TextField
        label="Tr total questions"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trTotalQuestions}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              trLoyaltyBonus,
              trLoyalityPoints,
              trScore,
              trRanking,
              trRewardPoints,
              trTotalQuestions: value,
              trCorrectAnswers,
            };
            const result = onChange(modelFields);
            value = result?.trTotalQuestions ?? value;
          }
          if (errors.trTotalQuestions?.hasError) {
            runValidationTasks("trTotalQuestions", value);
          }
          setTrTotalQuestions(value);
        }}
        onBlur={() => runValidationTasks("trTotalQuestions", trTotalQuestions)}
        errorMessage={errors.trTotalQuestions?.errorMessage}
        hasError={errors.trTotalQuestions?.hasError}
        {...getOverrideProps(overrides, "trTotalQuestions")}
      ></TextField>
      <TextField
        label="Tr correct answers"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trCorrectAnswers}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              trLoyaltyBonus,
              trLoyalityPoints,
              trScore,
              trRanking,
              trRewardPoints,
              trTotalQuestions,
              trCorrectAnswers: value,
            };
            const result = onChange(modelFields);
            value = result?.trCorrectAnswers ?? value;
          }
          if (errors.trCorrectAnswers?.hasError) {
            runValidationTasks("trCorrectAnswers", value);
          }
          setTrCorrectAnswers(value);
        }}
        onBlur={() => runValidationTasks("trCorrectAnswers", trCorrectAnswers)}
        errorMessage={errors.trCorrectAnswers?.errorMessage}
        hasError={errors.trCorrectAnswers?.hasError}
        {...getOverrideProps(overrides, "trCorrectAnswers")}
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
          isDisabled={!(idProp || userPointsRecordModelProp)}
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
              !(idProp || userPointsRecordModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
