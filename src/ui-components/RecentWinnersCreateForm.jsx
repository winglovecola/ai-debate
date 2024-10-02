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
import { createRecentWinners } from "../graphql/mutations";
const client = generateClient();
export default function RecentWinnersCreateForm(props) {
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
    title: "",
    description: "",
    streamUrl: "",
    showsID: "",
    eventsID: "",
    priorityOrder: "",
    createdTime: "",
    createdAt: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [streamUrl, setStreamUrl] = React.useState(initialValues.streamUrl);
  const [showsID, setShowsID] = React.useState(initialValues.showsID);
  const [eventsID, setEventsID] = React.useState(initialValues.eventsID);
  const [priorityOrder, setPriorityOrder] = React.useState(
    initialValues.priorityOrder
  );
  const [createdTime, setCreatedTime] = React.useState(
    initialValues.createdTime
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType(initialValues.type);
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setStreamUrl(initialValues.streamUrl);
    setShowsID(initialValues.showsID);
    setEventsID(initialValues.eventsID);
    setPriorityOrder(initialValues.priorityOrder);
    setCreatedTime(initialValues.createdTime);
    setCreatedAt(initialValues.createdAt);
    setErrors({});
  };
  const validations = {
    type: [],
    title: [],
    description: [],
    streamUrl: [],
    showsID: [],
    eventsID: [],
    priorityOrder: [],
    createdTime: [],
    createdAt: [{ type: "Required" }],
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
          type,
          title,
          description,
          streamUrl,
          showsID,
          eventsID,
          priorityOrder,
          createdTime,
          createdAt,
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
            query: createRecentWinners.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "RecentWinnersCreateForm")}
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
              title,
              description,
              streamUrl,
              showsID,
              eventsID,
              priorityOrder,
              createdTime,
              createdAt,
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
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              title: value,
              description,
              streamUrl,
              showsID,
              eventsID,
              priorityOrder,
              createdTime,
              createdAt,
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
              type,
              title,
              description: value,
              streamUrl,
              showsID,
              eventsID,
              priorityOrder,
              createdTime,
              createdAt,
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
        label="Stream url"
        isRequired={false}
        isReadOnly={false}
        value={streamUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              title,
              description,
              streamUrl: value,
              showsID,
              eventsID,
              priorityOrder,
              createdTime,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.streamUrl ?? value;
          }
          if (errors.streamUrl?.hasError) {
            runValidationTasks("streamUrl", value);
          }
          setStreamUrl(value);
        }}
        onBlur={() => runValidationTasks("streamUrl", streamUrl)}
        errorMessage={errors.streamUrl?.errorMessage}
        hasError={errors.streamUrl?.hasError}
        {...getOverrideProps(overrides, "streamUrl")}
      ></TextField>
      <TextField
        label="Shows id"
        isRequired={false}
        isReadOnly={false}
        value={showsID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              title,
              description,
              streamUrl,
              showsID: value,
              eventsID,
              priorityOrder,
              createdTime,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.showsID ?? value;
          }
          if (errors.showsID?.hasError) {
            runValidationTasks("showsID", value);
          }
          setShowsID(value);
        }}
        onBlur={() => runValidationTasks("showsID", showsID)}
        errorMessage={errors.showsID?.errorMessage}
        hasError={errors.showsID?.hasError}
        {...getOverrideProps(overrides, "showsID")}
      ></TextField>
      <TextField
        label="Events id"
        isRequired={false}
        isReadOnly={false}
        value={eventsID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              title,
              description,
              streamUrl,
              showsID,
              eventsID: value,
              priorityOrder,
              createdTime,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.eventsID ?? value;
          }
          if (errors.eventsID?.hasError) {
            runValidationTasks("eventsID", value);
          }
          setEventsID(value);
        }}
        onBlur={() => runValidationTasks("eventsID", eventsID)}
        errorMessage={errors.eventsID?.errorMessage}
        hasError={errors.eventsID?.hasError}
        {...getOverrideProps(overrides, "eventsID")}
      ></TextField>
      <TextField
        label="Priority order"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={priorityOrder}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              title,
              description,
              streamUrl,
              showsID,
              eventsID,
              priorityOrder: value,
              createdTime,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.priorityOrder ?? value;
          }
          if (errors.priorityOrder?.hasError) {
            runValidationTasks("priorityOrder", value);
          }
          setPriorityOrder(value);
        }}
        onBlur={() => runValidationTasks("priorityOrder", priorityOrder)}
        errorMessage={errors.priorityOrder?.errorMessage}
        hasError={errors.priorityOrder?.hasError}
        {...getOverrideProps(overrides, "priorityOrder")}
      ></TextField>
      <TextField
        label="Created time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          createdTime && convertToLocal(convertTimeStampToDate(createdTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              type,
              title,
              description,
              streamUrl,
              showsID,
              eventsID,
              priorityOrder,
              createdTime: value,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.createdTime ?? value;
          }
          if (errors.createdTime?.hasError) {
            runValidationTasks("createdTime", value);
          }
          setCreatedTime(value);
        }}
        onBlur={() => runValidationTasks("createdTime", createdTime)}
        errorMessage={errors.createdTime?.errorMessage}
        hasError={errors.createdTime?.hasError}
        {...getOverrideProps(overrides, "createdTime")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              title,
              description,
              streamUrl,
              showsID,
              eventsID,
              priorityOrder,
              createdTime,
              createdAt: value,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
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
