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
import { createShowInfo } from "../graphql/mutations";
const client = generateClient();
export default function ShowInfoCreateForm(props) {
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
    prevShowId: "",
    prevShowBroadcastTime: "",
    latestShowId: "",
    latestShowBroadcastTime: "",
    nextShowId: "",
    nextShowBroadcastTime: "",
    upcomingShowsJsonData: "",
    upcomingShowsJsonDataUpdateTime: "",
  };
  const [prevShowId, setPrevShowId] = React.useState(initialValues.prevShowId);
  const [prevShowBroadcastTime, setPrevShowBroadcastTime] = React.useState(
    initialValues.prevShowBroadcastTime
  );
  const [latestShowId, setLatestShowId] = React.useState(
    initialValues.latestShowId
  );
  const [latestShowBroadcastTime, setLatestShowBroadcastTime] = React.useState(
    initialValues.latestShowBroadcastTime
  );
  const [nextShowId, setNextShowId] = React.useState(initialValues.nextShowId);
  const [nextShowBroadcastTime, setNextShowBroadcastTime] = React.useState(
    initialValues.nextShowBroadcastTime
  );
  const [upcomingShowsJsonData, setUpcomingShowsJsonData] = React.useState(
    initialValues.upcomingShowsJsonData
  );
  const [upcomingShowsJsonDataUpdateTime, setUpcomingShowsJsonDataUpdateTime] =
    React.useState(initialValues.upcomingShowsJsonDataUpdateTime);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPrevShowId(initialValues.prevShowId);
    setPrevShowBroadcastTime(initialValues.prevShowBroadcastTime);
    setLatestShowId(initialValues.latestShowId);
    setLatestShowBroadcastTime(initialValues.latestShowBroadcastTime);
    setNextShowId(initialValues.nextShowId);
    setNextShowBroadcastTime(initialValues.nextShowBroadcastTime);
    setUpcomingShowsJsonData(initialValues.upcomingShowsJsonData);
    setUpcomingShowsJsonDataUpdateTime(
      initialValues.upcomingShowsJsonDataUpdateTime
    );
    setErrors({});
  };
  const validations = {
    prevShowId: [],
    prevShowBroadcastTime: [],
    latestShowId: [],
    latestShowBroadcastTime: [],
    nextShowId: [],
    nextShowBroadcastTime: [],
    upcomingShowsJsonData: [],
    upcomingShowsJsonDataUpdateTime: [],
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
          prevShowId,
          prevShowBroadcastTime,
          latestShowId,
          latestShowBroadcastTime,
          nextShowId,
          nextShowBroadcastTime,
          upcomingShowsJsonData,
          upcomingShowsJsonDataUpdateTime,
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
            query: createShowInfo.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ShowInfoCreateForm")}
      {...rest}
    >
      <TextField
        label="Prev show id"
        isRequired={false}
        isReadOnly={false}
        value={prevShowId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              prevShowId: value,
              prevShowBroadcastTime,
              latestShowId,
              latestShowBroadcastTime,
              nextShowId,
              nextShowBroadcastTime,
              upcomingShowsJsonData,
              upcomingShowsJsonDataUpdateTime,
            };
            const result = onChange(modelFields);
            value = result?.prevShowId ?? value;
          }
          if (errors.prevShowId?.hasError) {
            runValidationTasks("prevShowId", value);
          }
          setPrevShowId(value);
        }}
        onBlur={() => runValidationTasks("prevShowId", prevShowId)}
        errorMessage={errors.prevShowId?.errorMessage}
        hasError={errors.prevShowId?.hasError}
        {...getOverrideProps(overrides, "prevShowId")}
      ></TextField>
      <TextField
        label="Prev show broadcast time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          prevShowBroadcastTime &&
          convertToLocal(convertTimeStampToDate(prevShowBroadcastTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              prevShowId,
              prevShowBroadcastTime: value,
              latestShowId,
              latestShowBroadcastTime,
              nextShowId,
              nextShowBroadcastTime,
              upcomingShowsJsonData,
              upcomingShowsJsonDataUpdateTime,
            };
            const result = onChange(modelFields);
            value = result?.prevShowBroadcastTime ?? value;
          }
          if (errors.prevShowBroadcastTime?.hasError) {
            runValidationTasks("prevShowBroadcastTime", value);
          }
          setPrevShowBroadcastTime(value);
        }}
        onBlur={() =>
          runValidationTasks("prevShowBroadcastTime", prevShowBroadcastTime)
        }
        errorMessage={errors.prevShowBroadcastTime?.errorMessage}
        hasError={errors.prevShowBroadcastTime?.hasError}
        {...getOverrideProps(overrides, "prevShowBroadcastTime")}
      ></TextField>
      <TextField
        label="Latest show id"
        isRequired={false}
        isReadOnly={false}
        value={latestShowId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              prevShowId,
              prevShowBroadcastTime,
              latestShowId: value,
              latestShowBroadcastTime,
              nextShowId,
              nextShowBroadcastTime,
              upcomingShowsJsonData,
              upcomingShowsJsonDataUpdateTime,
            };
            const result = onChange(modelFields);
            value = result?.latestShowId ?? value;
          }
          if (errors.latestShowId?.hasError) {
            runValidationTasks("latestShowId", value);
          }
          setLatestShowId(value);
        }}
        onBlur={() => runValidationTasks("latestShowId", latestShowId)}
        errorMessage={errors.latestShowId?.errorMessage}
        hasError={errors.latestShowId?.hasError}
        {...getOverrideProps(overrides, "latestShowId")}
      ></TextField>
      <TextField
        label="Latest show broadcast time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          latestShowBroadcastTime &&
          convertToLocal(convertTimeStampToDate(latestShowBroadcastTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              prevShowId,
              prevShowBroadcastTime,
              latestShowId,
              latestShowBroadcastTime: value,
              nextShowId,
              nextShowBroadcastTime,
              upcomingShowsJsonData,
              upcomingShowsJsonDataUpdateTime,
            };
            const result = onChange(modelFields);
            value = result?.latestShowBroadcastTime ?? value;
          }
          if (errors.latestShowBroadcastTime?.hasError) {
            runValidationTasks("latestShowBroadcastTime", value);
          }
          setLatestShowBroadcastTime(value);
        }}
        onBlur={() =>
          runValidationTasks("latestShowBroadcastTime", latestShowBroadcastTime)
        }
        errorMessage={errors.latestShowBroadcastTime?.errorMessage}
        hasError={errors.latestShowBroadcastTime?.hasError}
        {...getOverrideProps(overrides, "latestShowBroadcastTime")}
      ></TextField>
      <TextField
        label="Next show id"
        isRequired={false}
        isReadOnly={false}
        value={nextShowId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              prevShowId,
              prevShowBroadcastTime,
              latestShowId,
              latestShowBroadcastTime,
              nextShowId: value,
              nextShowBroadcastTime,
              upcomingShowsJsonData,
              upcomingShowsJsonDataUpdateTime,
            };
            const result = onChange(modelFields);
            value = result?.nextShowId ?? value;
          }
          if (errors.nextShowId?.hasError) {
            runValidationTasks("nextShowId", value);
          }
          setNextShowId(value);
        }}
        onBlur={() => runValidationTasks("nextShowId", nextShowId)}
        errorMessage={errors.nextShowId?.errorMessage}
        hasError={errors.nextShowId?.hasError}
        {...getOverrideProps(overrides, "nextShowId")}
      ></TextField>
      <TextField
        label="Next show broadcast time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          nextShowBroadcastTime &&
          convertToLocal(convertTimeStampToDate(nextShowBroadcastTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              prevShowId,
              prevShowBroadcastTime,
              latestShowId,
              latestShowBroadcastTime,
              nextShowId,
              nextShowBroadcastTime: value,
              upcomingShowsJsonData,
              upcomingShowsJsonDataUpdateTime,
            };
            const result = onChange(modelFields);
            value = result?.nextShowBroadcastTime ?? value;
          }
          if (errors.nextShowBroadcastTime?.hasError) {
            runValidationTasks("nextShowBroadcastTime", value);
          }
          setNextShowBroadcastTime(value);
        }}
        onBlur={() =>
          runValidationTasks("nextShowBroadcastTime", nextShowBroadcastTime)
        }
        errorMessage={errors.nextShowBroadcastTime?.errorMessage}
        hasError={errors.nextShowBroadcastTime?.hasError}
        {...getOverrideProps(overrides, "nextShowBroadcastTime")}
      ></TextField>
      <TextField
        label="Upcoming shows json data"
        isRequired={false}
        isReadOnly={false}
        value={upcomingShowsJsonData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              prevShowId,
              prevShowBroadcastTime,
              latestShowId,
              latestShowBroadcastTime,
              nextShowId,
              nextShowBroadcastTime,
              upcomingShowsJsonData: value,
              upcomingShowsJsonDataUpdateTime,
            };
            const result = onChange(modelFields);
            value = result?.upcomingShowsJsonData ?? value;
          }
          if (errors.upcomingShowsJsonData?.hasError) {
            runValidationTasks("upcomingShowsJsonData", value);
          }
          setUpcomingShowsJsonData(value);
        }}
        onBlur={() =>
          runValidationTasks("upcomingShowsJsonData", upcomingShowsJsonData)
        }
        errorMessage={errors.upcomingShowsJsonData?.errorMessage}
        hasError={errors.upcomingShowsJsonData?.hasError}
        {...getOverrideProps(overrides, "upcomingShowsJsonData")}
      ></TextField>
      <TextField
        label="Upcoming shows json data update time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          upcomingShowsJsonDataUpdateTime &&
          convertToLocal(
            convertTimeStampToDate(upcomingShowsJsonDataUpdateTime)
          )
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              prevShowId,
              prevShowBroadcastTime,
              latestShowId,
              latestShowBroadcastTime,
              nextShowId,
              nextShowBroadcastTime,
              upcomingShowsJsonData,
              upcomingShowsJsonDataUpdateTime: value,
            };
            const result = onChange(modelFields);
            value = result?.upcomingShowsJsonDataUpdateTime ?? value;
          }
          if (errors.upcomingShowsJsonDataUpdateTime?.hasError) {
            runValidationTasks("upcomingShowsJsonDataUpdateTime", value);
          }
          setUpcomingShowsJsonDataUpdateTime(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "upcomingShowsJsonDataUpdateTime",
            upcomingShowsJsonDataUpdateTime
          )
        }
        errorMessage={errors.upcomingShowsJsonDataUpdateTime?.errorMessage}
        hasError={errors.upcomingShowsJsonDataUpdateTime?.hasError}
        {...getOverrideProps(overrides, "upcomingShowsJsonDataUpdateTime")}
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
