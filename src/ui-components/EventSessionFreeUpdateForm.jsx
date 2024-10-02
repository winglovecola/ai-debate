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
import { getEventSessionFree } from "../graphql/queries";
import { updateEventSessionFree } from "../graphql/mutations";
const client = generateClient();
export default function EventSessionFreeUpdateForm(props) {
  const {
    id: idProp,
    eventSessionFree: eventSessionFreeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    eventType: "",
    rewardType: "",
    fingerPrintId: "",
    ip: "",
    loadedEventData: "",
    triviaSelectedAnswers: "",
    triviaStartTime: "",
    triviaEndedTime: "",
    triviaElapsedTime: "",
    score: "",
    scoreSubmitTime: "",
    prizeClaimType: "",
    prizeClaimTypeSubmitTime: "",
  };
  const [eventType, setEventType] = React.useState(initialValues.eventType);
  const [rewardType, setRewardType] = React.useState(initialValues.rewardType);
  const [fingerPrintId, setFingerPrintId] = React.useState(
    initialValues.fingerPrintId
  );
  const [ip, setIp] = React.useState(initialValues.ip);
  const [loadedEventData, setLoadedEventData] = React.useState(
    initialValues.loadedEventData
  );
  const [triviaSelectedAnswers, setTriviaSelectedAnswers] = React.useState(
    initialValues.triviaSelectedAnswers
  );
  const [triviaStartTime, setTriviaStartTime] = React.useState(
    initialValues.triviaStartTime
  );
  const [triviaEndedTime, setTriviaEndedTime] = React.useState(
    initialValues.triviaEndedTime
  );
  const [triviaElapsedTime, setTriviaElapsedTime] = React.useState(
    initialValues.triviaElapsedTime
  );
  const [score, setScore] = React.useState(initialValues.score);
  const [scoreSubmitTime, setScoreSubmitTime] = React.useState(
    initialValues.scoreSubmitTime
  );
  const [prizeClaimType, setPrizeClaimType] = React.useState(
    initialValues.prizeClaimType
  );
  const [prizeClaimTypeSubmitTime, setPrizeClaimTypeSubmitTime] =
    React.useState(initialValues.prizeClaimTypeSubmitTime);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventSessionFreeRecord
      ? { ...initialValues, ...eventSessionFreeRecord }
      : initialValues;
    setEventType(cleanValues.eventType);
    setRewardType(cleanValues.rewardType);
    setFingerPrintId(cleanValues.fingerPrintId);
    setIp(cleanValues.ip);
    setLoadedEventData(cleanValues.loadedEventData);
    setTriviaSelectedAnswers(cleanValues.triviaSelectedAnswers);
    setTriviaStartTime(cleanValues.triviaStartTime);
    setTriviaEndedTime(cleanValues.triviaEndedTime);
    setTriviaElapsedTime(cleanValues.triviaElapsedTime);
    setScore(cleanValues.score);
    setScoreSubmitTime(cleanValues.scoreSubmitTime);
    setPrizeClaimType(cleanValues.prizeClaimType);
    setPrizeClaimTypeSubmitTime(cleanValues.prizeClaimTypeSubmitTime);
    setErrors({});
  };
  const [eventSessionFreeRecord, setEventSessionFreeRecord] = React.useState(
    eventSessionFreeModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEventSessionFree.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEventSessionFree
        : eventSessionFreeModelProp;
      setEventSessionFreeRecord(record);
    };
    queryData();
  }, [idProp, eventSessionFreeModelProp]);
  React.useEffect(resetStateValues, [eventSessionFreeRecord]);
  const validations = {
    eventType: [],
    rewardType: [],
    fingerPrintId: [],
    ip: [],
    loadedEventData: [],
    triviaSelectedAnswers: [],
    triviaStartTime: [],
    triviaEndedTime: [],
    triviaElapsedTime: [],
    score: [],
    scoreSubmitTime: [],
    prizeClaimType: [],
    prizeClaimTypeSubmitTime: [],
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
          eventType: eventType ?? null,
          rewardType: rewardType ?? null,
          fingerPrintId: fingerPrintId ?? null,
          ip: ip ?? null,
          loadedEventData: loadedEventData ?? null,
          triviaSelectedAnswers: triviaSelectedAnswers ?? null,
          triviaStartTime: triviaStartTime ?? null,
          triviaEndedTime: triviaEndedTime ?? null,
          triviaElapsedTime: triviaElapsedTime ?? null,
          score: score ?? null,
          scoreSubmitTime: scoreSubmitTime ?? null,
          prizeClaimType: prizeClaimType ?? null,
          prizeClaimTypeSubmitTime: prizeClaimTypeSubmitTime ?? null,
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
            query: updateEventSessionFree.replaceAll("__typename", ""),
            variables: {
              input: {
                id: eventSessionFreeRecord.id,
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
      {...getOverrideProps(overrides, "EventSessionFreeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Event type"
        isRequired={false}
        isReadOnly={false}
        value={eventType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType: value,
              rewardType,
              fingerPrintId,
              ip,
              loadedEventData,
              triviaSelectedAnswers,
              triviaStartTime,
              triviaEndedTime,
              triviaElapsedTime,
              score,
              scoreSubmitTime,
              prizeClaimType,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.eventType ?? value;
          }
          if (errors.eventType?.hasError) {
            runValidationTasks("eventType", value);
          }
          setEventType(value);
        }}
        onBlur={() => runValidationTasks("eventType", eventType)}
        errorMessage={errors.eventType?.errorMessage}
        hasError={errors.eventType?.hasError}
        {...getOverrideProps(overrides, "eventType")}
      ></TextField>
      <TextField
        label="Reward type"
        isRequired={false}
        isReadOnly={false}
        value={rewardType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType: value,
              fingerPrintId,
              ip,
              loadedEventData,
              triviaSelectedAnswers,
              triviaStartTime,
              triviaEndedTime,
              triviaElapsedTime,
              score,
              scoreSubmitTime,
              prizeClaimType,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.rewardType ?? value;
          }
          if (errors.rewardType?.hasError) {
            runValidationTasks("rewardType", value);
          }
          setRewardType(value);
        }}
        onBlur={() => runValidationTasks("rewardType", rewardType)}
        errorMessage={errors.rewardType?.errorMessage}
        hasError={errors.rewardType?.hasError}
        {...getOverrideProps(overrides, "rewardType")}
      ></TextField>
      <TextField
        label="Finger print id"
        isRequired={false}
        isReadOnly={false}
        value={fingerPrintId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType,
              fingerPrintId: value,
              ip,
              loadedEventData,
              triviaSelectedAnswers,
              triviaStartTime,
              triviaEndedTime,
              triviaElapsedTime,
              score,
              scoreSubmitTime,
              prizeClaimType,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.fingerPrintId ?? value;
          }
          if (errors.fingerPrintId?.hasError) {
            runValidationTasks("fingerPrintId", value);
          }
          setFingerPrintId(value);
        }}
        onBlur={() => runValidationTasks("fingerPrintId", fingerPrintId)}
        errorMessage={errors.fingerPrintId?.errorMessage}
        hasError={errors.fingerPrintId?.hasError}
        {...getOverrideProps(overrides, "fingerPrintId")}
      ></TextField>
      <TextField
        label="Ip"
        isRequired={false}
        isReadOnly={false}
        value={ip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType,
              fingerPrintId,
              ip: value,
              loadedEventData,
              triviaSelectedAnswers,
              triviaStartTime,
              triviaEndedTime,
              triviaElapsedTime,
              score,
              scoreSubmitTime,
              prizeClaimType,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.ip ?? value;
          }
          if (errors.ip?.hasError) {
            runValidationTasks("ip", value);
          }
          setIp(value);
        }}
        onBlur={() => runValidationTasks("ip", ip)}
        errorMessage={errors.ip?.errorMessage}
        hasError={errors.ip?.hasError}
        {...getOverrideProps(overrides, "ip")}
      ></TextField>
      <TextField
        label="Loaded event data"
        isRequired={false}
        isReadOnly={false}
        value={loadedEventData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType,
              fingerPrintId,
              ip,
              loadedEventData: value,
              triviaSelectedAnswers,
              triviaStartTime,
              triviaEndedTime,
              triviaElapsedTime,
              score,
              scoreSubmitTime,
              prizeClaimType,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.loadedEventData ?? value;
          }
          if (errors.loadedEventData?.hasError) {
            runValidationTasks("loadedEventData", value);
          }
          setLoadedEventData(value);
        }}
        onBlur={() => runValidationTasks("loadedEventData", loadedEventData)}
        errorMessage={errors.loadedEventData?.errorMessage}
        hasError={errors.loadedEventData?.hasError}
        {...getOverrideProps(overrides, "loadedEventData")}
      ></TextField>
      <TextField
        label="Trivia selected answers"
        isRequired={false}
        isReadOnly={false}
        value={triviaSelectedAnswers}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType,
              fingerPrintId,
              ip,
              loadedEventData,
              triviaSelectedAnswers: value,
              triviaStartTime,
              triviaEndedTime,
              triviaElapsedTime,
              score,
              scoreSubmitTime,
              prizeClaimType,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.triviaSelectedAnswers ?? value;
          }
          if (errors.triviaSelectedAnswers?.hasError) {
            runValidationTasks("triviaSelectedAnswers", value);
          }
          setTriviaSelectedAnswers(value);
        }}
        onBlur={() =>
          runValidationTasks("triviaSelectedAnswers", triviaSelectedAnswers)
        }
        errorMessage={errors.triviaSelectedAnswers?.errorMessage}
        hasError={errors.triviaSelectedAnswers?.hasError}
        {...getOverrideProps(overrides, "triviaSelectedAnswers")}
      ></TextField>
      <TextField
        label="Trivia start time"
        isRequired={false}
        isReadOnly={false}
        value={triviaStartTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType,
              fingerPrintId,
              ip,
              loadedEventData,
              triviaSelectedAnswers,
              triviaStartTime: value,
              triviaEndedTime,
              triviaElapsedTime,
              score,
              scoreSubmitTime,
              prizeClaimType,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.triviaStartTime ?? value;
          }
          if (errors.triviaStartTime?.hasError) {
            runValidationTasks("triviaStartTime", value);
          }
          setTriviaStartTime(value);
        }}
        onBlur={() => runValidationTasks("triviaStartTime", triviaStartTime)}
        errorMessage={errors.triviaStartTime?.errorMessage}
        hasError={errors.triviaStartTime?.hasError}
        {...getOverrideProps(overrides, "triviaStartTime")}
      ></TextField>
      <TextField
        label="Trivia ended time"
        isRequired={false}
        isReadOnly={false}
        value={triviaEndedTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType,
              fingerPrintId,
              ip,
              loadedEventData,
              triviaSelectedAnswers,
              triviaStartTime,
              triviaEndedTime: value,
              triviaElapsedTime,
              score,
              scoreSubmitTime,
              prizeClaimType,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.triviaEndedTime ?? value;
          }
          if (errors.triviaEndedTime?.hasError) {
            runValidationTasks("triviaEndedTime", value);
          }
          setTriviaEndedTime(value);
        }}
        onBlur={() => runValidationTasks("triviaEndedTime", triviaEndedTime)}
        errorMessage={errors.triviaEndedTime?.errorMessage}
        hasError={errors.triviaEndedTime?.hasError}
        {...getOverrideProps(overrides, "triviaEndedTime")}
      ></TextField>
      <TextField
        label="Trivia elapsed time"
        isRequired={false}
        isReadOnly={false}
        value={triviaElapsedTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType,
              fingerPrintId,
              ip,
              loadedEventData,
              triviaSelectedAnswers,
              triviaStartTime,
              triviaEndedTime,
              triviaElapsedTime: value,
              score,
              scoreSubmitTime,
              prizeClaimType,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.triviaElapsedTime ?? value;
          }
          if (errors.triviaElapsedTime?.hasError) {
            runValidationTasks("triviaElapsedTime", value);
          }
          setTriviaElapsedTime(value);
        }}
        onBlur={() =>
          runValidationTasks("triviaElapsedTime", triviaElapsedTime)
        }
        errorMessage={errors.triviaElapsedTime?.errorMessage}
        hasError={errors.triviaElapsedTime?.hasError}
        {...getOverrideProps(overrides, "triviaElapsedTime")}
      ></TextField>
      <TextField
        label="Score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={score}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType,
              fingerPrintId,
              ip,
              loadedEventData,
              triviaSelectedAnswers,
              triviaStartTime,
              triviaEndedTime,
              triviaElapsedTime,
              score: value,
              scoreSubmitTime,
              prizeClaimType,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.score ?? value;
          }
          if (errors.score?.hasError) {
            runValidationTasks("score", value);
          }
          setScore(value);
        }}
        onBlur={() => runValidationTasks("score", score)}
        errorMessage={errors.score?.errorMessage}
        hasError={errors.score?.hasError}
        {...getOverrideProps(overrides, "score")}
      ></TextField>
      <TextField
        label="Score submit time"
        isRequired={false}
        isReadOnly={false}
        value={scoreSubmitTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType,
              fingerPrintId,
              ip,
              loadedEventData,
              triviaSelectedAnswers,
              triviaStartTime,
              triviaEndedTime,
              triviaElapsedTime,
              score,
              scoreSubmitTime: value,
              prizeClaimType,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.scoreSubmitTime ?? value;
          }
          if (errors.scoreSubmitTime?.hasError) {
            runValidationTasks("scoreSubmitTime", value);
          }
          setScoreSubmitTime(value);
        }}
        onBlur={() => runValidationTasks("scoreSubmitTime", scoreSubmitTime)}
        errorMessage={errors.scoreSubmitTime?.errorMessage}
        hasError={errors.scoreSubmitTime?.hasError}
        {...getOverrideProps(overrides, "scoreSubmitTime")}
      ></TextField>
      <TextField
        label="Prize claim type"
        isRequired={false}
        isReadOnly={false}
        value={prizeClaimType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType,
              fingerPrintId,
              ip,
              loadedEventData,
              triviaSelectedAnswers,
              triviaStartTime,
              triviaEndedTime,
              triviaElapsedTime,
              score,
              scoreSubmitTime,
              prizeClaimType: value,
              prizeClaimTypeSubmitTime,
            };
            const result = onChange(modelFields);
            value = result?.prizeClaimType ?? value;
          }
          if (errors.prizeClaimType?.hasError) {
            runValidationTasks("prizeClaimType", value);
          }
          setPrizeClaimType(value);
        }}
        onBlur={() => runValidationTasks("prizeClaimType", prizeClaimType)}
        errorMessage={errors.prizeClaimType?.errorMessage}
        hasError={errors.prizeClaimType?.hasError}
        {...getOverrideProps(overrides, "prizeClaimType")}
      ></TextField>
      <TextField
        label="Prize claim type submit time"
        isRequired={false}
        isReadOnly={false}
        value={prizeClaimTypeSubmitTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventType,
              rewardType,
              fingerPrintId,
              ip,
              loadedEventData,
              triviaSelectedAnswers,
              triviaStartTime,
              triviaEndedTime,
              triviaElapsedTime,
              score,
              scoreSubmitTime,
              prizeClaimType,
              prizeClaimTypeSubmitTime: value,
            };
            const result = onChange(modelFields);
            value = result?.prizeClaimTypeSubmitTime ?? value;
          }
          if (errors.prizeClaimTypeSubmitTime?.hasError) {
            runValidationTasks("prizeClaimTypeSubmitTime", value);
          }
          setPrizeClaimTypeSubmitTime(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "prizeClaimTypeSubmitTime",
            prizeClaimTypeSubmitTime
          )
        }
        errorMessage={errors.prizeClaimTypeSubmitTime?.errorMessage}
        hasError={errors.prizeClaimTypeSubmitTime?.hasError}
        {...getOverrideProps(overrides, "prizeClaimTypeSubmitTime")}
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
          isDisabled={!(idProp || eventSessionFreeModelProp)}
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
              !(idProp || eventSessionFreeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
