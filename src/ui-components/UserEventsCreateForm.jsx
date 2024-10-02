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
import { createUserEvents } from "../graphql/mutations";
const client = generateClient();
export default function UserEventsCreateForm(props) {
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
    event: "",
    eventAction: "",
    eventUpdatedTime: "",
    accountUpdatedTime: "",
  };
  const [event, setEvent] = React.useState(initialValues.event);
  const [eventAction, setEventAction] = React.useState(
    initialValues.eventAction
  );
  const [eventUpdatedTime, setEventUpdatedTime] = React.useState(
    initialValues.eventUpdatedTime
  );
  const [accountUpdatedTime, setAccountUpdatedTime] = React.useState(
    initialValues.accountUpdatedTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEvent(initialValues.event);
    setEventAction(initialValues.eventAction);
    setEventUpdatedTime(initialValues.eventUpdatedTime);
    setAccountUpdatedTime(initialValues.accountUpdatedTime);
    setErrors({});
  };
  const validations = {
    event: [],
    eventAction: [],
    eventUpdatedTime: [],
    accountUpdatedTime: [],
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
          event,
          eventAction,
          eventUpdatedTime,
          accountUpdatedTime,
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
            query: createUserEvents.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "UserEventsCreateForm")}
      {...rest}
    >
      <TextField
        label="Event"
        isRequired={false}
        isReadOnly={false}
        value={event}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              event: value,
              eventAction,
              eventUpdatedTime,
              accountUpdatedTime,
            };
            const result = onChange(modelFields);
            value = result?.event ?? value;
          }
          if (errors.event?.hasError) {
            runValidationTasks("event", value);
          }
          setEvent(value);
        }}
        onBlur={() => runValidationTasks("event", event)}
        errorMessage={errors.event?.errorMessage}
        hasError={errors.event?.hasError}
        {...getOverrideProps(overrides, "event")}
      ></TextField>
      <TextField
        label="Event action"
        isRequired={false}
        isReadOnly={false}
        value={eventAction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              event,
              eventAction: value,
              eventUpdatedTime,
              accountUpdatedTime,
            };
            const result = onChange(modelFields);
            value = result?.eventAction ?? value;
          }
          if (errors.eventAction?.hasError) {
            runValidationTasks("eventAction", value);
          }
          setEventAction(value);
        }}
        onBlur={() => runValidationTasks("eventAction", eventAction)}
        errorMessage={errors.eventAction?.errorMessage}
        hasError={errors.eventAction?.hasError}
        {...getOverrideProps(overrides, "eventAction")}
      ></TextField>
      <TextField
        label="Event updated time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          eventUpdatedTime &&
          convertToLocal(convertTimeStampToDate(eventUpdatedTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              event,
              eventAction,
              eventUpdatedTime: value,
              accountUpdatedTime,
            };
            const result = onChange(modelFields);
            value = result?.eventUpdatedTime ?? value;
          }
          if (errors.eventUpdatedTime?.hasError) {
            runValidationTasks("eventUpdatedTime", value);
          }
          setEventUpdatedTime(value);
        }}
        onBlur={() => runValidationTasks("eventUpdatedTime", eventUpdatedTime)}
        errorMessage={errors.eventUpdatedTime?.errorMessage}
        hasError={errors.eventUpdatedTime?.hasError}
        {...getOverrideProps(overrides, "eventUpdatedTime")}
      ></TextField>
      <TextField
        label="Account updated time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          accountUpdatedTime &&
          convertToLocal(convertTimeStampToDate(accountUpdatedTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              event,
              eventAction,
              eventUpdatedTime,
              accountUpdatedTime: value,
            };
            const result = onChange(modelFields);
            value = result?.accountUpdatedTime ?? value;
          }
          if (errors.accountUpdatedTime?.hasError) {
            runValidationTasks("accountUpdatedTime", value);
          }
          setAccountUpdatedTime(value);
        }}
        onBlur={() =>
          runValidationTasks("accountUpdatedTime", accountUpdatedTime)
        }
        errorMessage={errors.accountUpdatedTime?.errorMessage}
        hasError={errors.accountUpdatedTime?.hasError}
        {...getOverrideProps(overrides, "accountUpdatedTime")}
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
