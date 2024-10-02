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
import { createEventInfo } from "../graphql/mutations";
const client = generateClient();
export default function EventInfoCreateForm(props) {
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
    prevEventId: "",
    prevEventBroadcastTime: "",
    latestEventId: "",
    latestEventBroadcastTime: "",
    nextEventId: "",
    nextEventBroadcastTime: "",
    upcomingEventsJsonData: "",
    upcomingEventsJsonDataUpdateTime: "",
    trLoyaltyBonusResetTime: "",
  };
  const [prevEventId, setPrevEventId] = React.useState(
    initialValues.prevEventId
  );
  const [prevEventBroadcastTime, setPrevEventBroadcastTime] = React.useState(
    initialValues.prevEventBroadcastTime
  );
  const [latestEventId, setLatestEventId] = React.useState(
    initialValues.latestEventId
  );
  const [latestEventBroadcastTime, setLatestEventBroadcastTime] =
    React.useState(initialValues.latestEventBroadcastTime);
  const [nextEventId, setNextEventId] = React.useState(
    initialValues.nextEventId
  );
  const [nextEventBroadcastTime, setNextEventBroadcastTime] = React.useState(
    initialValues.nextEventBroadcastTime
  );
  const [upcomingEventsJsonData, setUpcomingEventsJsonData] = React.useState(
    initialValues.upcomingEventsJsonData
  );
  const [
    upcomingEventsJsonDataUpdateTime,
    setUpcomingEventsJsonDataUpdateTime,
  ] = React.useState(initialValues.upcomingEventsJsonDataUpdateTime);
  const [trLoyaltyBonusResetTime, setTrLoyaltyBonusResetTime] = React.useState(
    initialValues.trLoyaltyBonusResetTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPrevEventId(initialValues.prevEventId);
    setPrevEventBroadcastTime(initialValues.prevEventBroadcastTime);
    setLatestEventId(initialValues.latestEventId);
    setLatestEventBroadcastTime(initialValues.latestEventBroadcastTime);
    setNextEventId(initialValues.nextEventId);
    setNextEventBroadcastTime(initialValues.nextEventBroadcastTime);
    setUpcomingEventsJsonData(initialValues.upcomingEventsJsonData);
    setUpcomingEventsJsonDataUpdateTime(
      initialValues.upcomingEventsJsonDataUpdateTime
    );
    setTrLoyaltyBonusResetTime(initialValues.trLoyaltyBonusResetTime);
    setErrors({});
  };
  const validations = {
    prevEventId: [],
    prevEventBroadcastTime: [],
    latestEventId: [],
    latestEventBroadcastTime: [],
    nextEventId: [],
    nextEventBroadcastTime: [],
    upcomingEventsJsonData: [],
    upcomingEventsJsonDataUpdateTime: [],
    trLoyaltyBonusResetTime: [],
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
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          prevEventId,
          prevEventBroadcastTime,
          latestEventId,
          latestEventBroadcastTime,
          nextEventId,
          nextEventBroadcastTime,
          upcomingEventsJsonData,
          upcomingEventsJsonDataUpdateTime,
          trLoyaltyBonusResetTime,
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
            query: createEventInfo.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "EventInfoCreateForm")}
      {...rest}
    >
      <TextField
        label="Prev event id"
        isRequired={false}
        isReadOnly={false}
        value={prevEventId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              prevEventId: value,
              prevEventBroadcastTime,
              latestEventId,
              latestEventBroadcastTime,
              nextEventId,
              nextEventBroadcastTime,
              upcomingEventsJsonData,
              upcomingEventsJsonDataUpdateTime,
              trLoyaltyBonusResetTime,
            };
            const result = onChange(modelFields);
            value = result?.prevEventId ?? value;
          }
          if (errors.prevEventId?.hasError) {
            runValidationTasks("prevEventId", value);
          }
          setPrevEventId(value);
        }}
        onBlur={() => runValidationTasks("prevEventId", prevEventId)}
        errorMessage={errors.prevEventId?.errorMessage}
        hasError={errors.prevEventId?.hasError}
        {...getOverrideProps(overrides, "prevEventId")}
      ></TextField>
      <TextField
        label="Prev event broadcast time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          prevEventBroadcastTime &&
          convertToLocal(convertTimeStampToDate(prevEventBroadcastTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              prevEventId,
              prevEventBroadcastTime: value,
              latestEventId,
              latestEventBroadcastTime,
              nextEventId,
              nextEventBroadcastTime,
              upcomingEventsJsonData,
              upcomingEventsJsonDataUpdateTime,
              trLoyaltyBonusResetTime,
            };
            const result = onChange(modelFields);
            value = result?.prevEventBroadcastTime ?? value;
          }
          if (errors.prevEventBroadcastTime?.hasError) {
            runValidationTasks("prevEventBroadcastTime", value);
          }
          setPrevEventBroadcastTime(value);
        }}
        onBlur={() =>
          runValidationTasks("prevEventBroadcastTime", prevEventBroadcastTime)
        }
        errorMessage={errors.prevEventBroadcastTime?.errorMessage}
        hasError={errors.prevEventBroadcastTime?.hasError}
        {...getOverrideProps(overrides, "prevEventBroadcastTime")}
      ></TextField>
      <TextField
        label="Latest event id"
        isRequired={false}
        isReadOnly={false}
        value={latestEventId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              prevEventId,
              prevEventBroadcastTime,
              latestEventId: value,
              latestEventBroadcastTime,
              nextEventId,
              nextEventBroadcastTime,
              upcomingEventsJsonData,
              upcomingEventsJsonDataUpdateTime,
              trLoyaltyBonusResetTime,
            };
            const result = onChange(modelFields);
            value = result?.latestEventId ?? value;
          }
          if (errors.latestEventId?.hasError) {
            runValidationTasks("latestEventId", value);
          }
          setLatestEventId(value);
        }}
        onBlur={() => runValidationTasks("latestEventId", latestEventId)}
        errorMessage={errors.latestEventId?.errorMessage}
        hasError={errors.latestEventId?.hasError}
        {...getOverrideProps(overrides, "latestEventId")}
      ></TextField>
      <TextField
        label="Latest event broadcast time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          latestEventBroadcastTime &&
          convertToLocal(convertTimeStampToDate(latestEventBroadcastTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              prevEventId,
              prevEventBroadcastTime,
              latestEventId,
              latestEventBroadcastTime: value,
              nextEventId,
              nextEventBroadcastTime,
              upcomingEventsJsonData,
              upcomingEventsJsonDataUpdateTime,
              trLoyaltyBonusResetTime,
            };
            const result = onChange(modelFields);
            value = result?.latestEventBroadcastTime ?? value;
          }
          if (errors.latestEventBroadcastTime?.hasError) {
            runValidationTasks("latestEventBroadcastTime", value);
          }
          setLatestEventBroadcastTime(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "latestEventBroadcastTime",
            latestEventBroadcastTime
          )
        }
        errorMessage={errors.latestEventBroadcastTime?.errorMessage}
        hasError={errors.latestEventBroadcastTime?.hasError}
        {...getOverrideProps(overrides, "latestEventBroadcastTime")}
      ></TextField>
      <TextField
        label="Next event id"
        isRequired={false}
        isReadOnly={false}
        value={nextEventId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              prevEventId,
              prevEventBroadcastTime,
              latestEventId,
              latestEventBroadcastTime,
              nextEventId: value,
              nextEventBroadcastTime,
              upcomingEventsJsonData,
              upcomingEventsJsonDataUpdateTime,
              trLoyaltyBonusResetTime,
            };
            const result = onChange(modelFields);
            value = result?.nextEventId ?? value;
          }
          if (errors.nextEventId?.hasError) {
            runValidationTasks("nextEventId", value);
          }
          setNextEventId(value);
        }}
        onBlur={() => runValidationTasks("nextEventId", nextEventId)}
        errorMessage={errors.nextEventId?.errorMessage}
        hasError={errors.nextEventId?.hasError}
        {...getOverrideProps(overrides, "nextEventId")}
      ></TextField>
      <TextField
        label="Next event broadcast time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          nextEventBroadcastTime &&
          convertToLocal(convertTimeStampToDate(nextEventBroadcastTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              prevEventId,
              prevEventBroadcastTime,
              latestEventId,
              latestEventBroadcastTime,
              nextEventId,
              nextEventBroadcastTime: value,
              upcomingEventsJsonData,
              upcomingEventsJsonDataUpdateTime,
              trLoyaltyBonusResetTime,
            };
            const result = onChange(modelFields);
            value = result?.nextEventBroadcastTime ?? value;
          }
          if (errors.nextEventBroadcastTime?.hasError) {
            runValidationTasks("nextEventBroadcastTime", value);
          }
          setNextEventBroadcastTime(value);
        }}
        onBlur={() =>
          runValidationTasks("nextEventBroadcastTime", nextEventBroadcastTime)
        }
        errorMessage={errors.nextEventBroadcastTime?.errorMessage}
        hasError={errors.nextEventBroadcastTime?.hasError}
        {...getOverrideProps(overrides, "nextEventBroadcastTime")}
      ></TextField>
      <TextField
        label="Upcoming events json data"
        isRequired={false}
        isReadOnly={false}
        value={upcomingEventsJsonData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              prevEventId,
              prevEventBroadcastTime,
              latestEventId,
              latestEventBroadcastTime,
              nextEventId,
              nextEventBroadcastTime,
              upcomingEventsJsonData: value,
              upcomingEventsJsonDataUpdateTime,
              trLoyaltyBonusResetTime,
            };
            const result = onChange(modelFields);
            value = result?.upcomingEventsJsonData ?? value;
          }
          if (errors.upcomingEventsJsonData?.hasError) {
            runValidationTasks("upcomingEventsJsonData", value);
          }
          setUpcomingEventsJsonData(value);
        }}
        onBlur={() =>
          runValidationTasks("upcomingEventsJsonData", upcomingEventsJsonData)
        }
        errorMessage={errors.upcomingEventsJsonData?.errorMessage}
        hasError={errors.upcomingEventsJsonData?.hasError}
        {...getOverrideProps(overrides, "upcomingEventsJsonData")}
      ></TextField>
      <TextField
        label="Upcoming events json data update time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          upcomingEventsJsonDataUpdateTime &&
          convertToLocal(
            convertTimeStampToDate(upcomingEventsJsonDataUpdateTime)
          )
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              prevEventId,
              prevEventBroadcastTime,
              latestEventId,
              latestEventBroadcastTime,
              nextEventId,
              nextEventBroadcastTime,
              upcomingEventsJsonData,
              upcomingEventsJsonDataUpdateTime: value,
              trLoyaltyBonusResetTime,
            };
            const result = onChange(modelFields);
            value = result?.upcomingEventsJsonDataUpdateTime ?? value;
          }
          if (errors.upcomingEventsJsonDataUpdateTime?.hasError) {
            runValidationTasks("upcomingEventsJsonDataUpdateTime", value);
          }
          setUpcomingEventsJsonDataUpdateTime(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "upcomingEventsJsonDataUpdateTime",
            upcomingEventsJsonDataUpdateTime
          )
        }
        errorMessage={errors.upcomingEventsJsonDataUpdateTime?.errorMessage}
        hasError={errors.upcomingEventsJsonDataUpdateTime?.hasError}
        {...getOverrideProps(overrides, "upcomingEventsJsonDataUpdateTime")}
      ></TextField>
      <TextField
        label="Tr loyalty bonus reset time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          trLoyaltyBonusResetTime &&
          convertToLocal(convertTimeStampToDate(trLoyaltyBonusResetTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              prevEventId,
              prevEventBroadcastTime,
              latestEventId,
              latestEventBroadcastTime,
              nextEventId,
              nextEventBroadcastTime,
              upcomingEventsJsonData,
              upcomingEventsJsonDataUpdateTime,
              trLoyaltyBonusResetTime: value,
            };
            const result = onChange(modelFields);
            value = result?.trLoyaltyBonusResetTime ?? value;
          }
          if (errors.trLoyaltyBonusResetTime?.hasError) {
            runValidationTasks("trLoyaltyBonusResetTime", value);
          }
          setTrLoyaltyBonusResetTime(value);
        }}
        onBlur={() =>
          runValidationTasks("trLoyaltyBonusResetTime", trLoyaltyBonusResetTime)
        }
        errorMessage={errors.trLoyaltyBonusResetTime?.errorMessage}
        hasError={errors.trLoyaltyBonusResetTime?.hasError}
        {...getOverrideProps(overrides, "trLoyaltyBonusResetTime")}
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
