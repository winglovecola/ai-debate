/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createShows } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ShowsCreateForm(props) {
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
    mode: "",
    title: "",
    description: "",
    showTags: [],
    streamUrl: "",
    tapingTime: "",
    broadcastTime: "",
    prizeHeadline1: "",
    prizeHeadline2: "",
    prizeClaimPin: "",
    prizePayoutCompletedAt: "",
    prizeCountDown: "",
    password: "",
    passwordProtected: false,
    status: "",
    winnerAndPrizefinalized: false,
    winnersCount: "",
  };
  const [mode, setMode] = React.useState(initialValues.mode);
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [showTags, setShowTags] = React.useState(initialValues.showTags);
  const [streamUrl, setStreamUrl] = React.useState(initialValues.streamUrl);
  const [tapingTime, setTapingTime] = React.useState(initialValues.tapingTime);
  const [broadcastTime, setBroadcastTime] = React.useState(
    initialValues.broadcastTime
  );
  const [prizeHeadline1, setPrizeHeadline1] = React.useState(
    initialValues.prizeHeadline1
  );
  const [prizeHeadline2, setPrizeHeadline2] = React.useState(
    initialValues.prizeHeadline2
  );
  const [prizeClaimPin, setPrizeClaimPin] = React.useState(
    initialValues.prizeClaimPin
  );
  const [prizePayoutCompletedAt, setPrizePayoutCompletedAt] = React.useState(
    initialValues.prizePayoutCompletedAt
  );
  const [prizeCountDown, setPrizeCountDown] = React.useState(
    initialValues.prizeCountDown
  );
  const [password, setPassword] = React.useState(initialValues.password);
  const [passwordProtected, setPasswordProtected] = React.useState(
    initialValues.passwordProtected
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [winnerAndPrizefinalized, setWinnerAndPrizefinalized] = React.useState(
    initialValues.winnerAndPrizefinalized
  );
  const [winnersCount, setWinnersCount] = React.useState(
    initialValues.winnersCount
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMode(initialValues.mode);
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setShowTags(initialValues.showTags);
    setCurrentShowTagsValue("");
    setStreamUrl(initialValues.streamUrl);
    setTapingTime(initialValues.tapingTime);
    setBroadcastTime(initialValues.broadcastTime);
    setPrizeHeadline1(initialValues.prizeHeadline1);
    setPrizeHeadline2(initialValues.prizeHeadline2);
    setPrizeClaimPin(initialValues.prizeClaimPin);
    setPrizePayoutCompletedAt(initialValues.prizePayoutCompletedAt);
    setPrizeCountDown(initialValues.prizeCountDown);
    setPassword(initialValues.password);
    setPasswordProtected(initialValues.passwordProtected);
    setStatus(initialValues.status);
    setWinnerAndPrizefinalized(initialValues.winnerAndPrizefinalized);
    setWinnersCount(initialValues.winnersCount);
    setErrors({});
  };
  const [currentShowTagsValue, setCurrentShowTagsValue] = React.useState("");
  const showTagsRef = React.createRef();
  const validations = {
    mode: [],
    title: [{ type: "Required" }],
    description: [],
    showTags: [],
    streamUrl: [],
    tapingTime: [],
    broadcastTime: [],
    prizeHeadline1: [],
    prizeHeadline2: [],
    prizeClaimPin: [],
    prizePayoutCompletedAt: [],
    prizeCountDown: [],
    password: [],
    passwordProtected: [],
    status: [],
    winnerAndPrizefinalized: [],
    winnersCount: [],
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
          mode,
          title,
          description,
          showTags,
          streamUrl,
          tapingTime,
          broadcastTime,
          prizeHeadline1,
          prizeHeadline2,
          prizeClaimPin,
          prizePayoutCompletedAt,
          prizeCountDown,
          password,
          passwordProtected,
          status,
          winnerAndPrizefinalized,
          winnersCount,
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
            query: createShows.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ShowsCreateForm")}
      {...rest}
    >
      <TextField
        label="Mode"
        isRequired={false}
        isReadOnly={false}
        value={mode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mode: value,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
            };
            const result = onChange(modelFields);
            value = result?.mode ?? value;
          }
          if (errors.mode?.hasError) {
            runValidationTasks("mode", value);
          }
          setMode(value);
        }}
        onBlur={() => runValidationTasks("mode", mode)}
        errorMessage={errors.mode?.errorMessage}
        hasError={errors.mode?.hasError}
        {...getOverrideProps(overrides, "mode")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mode,
              title: value,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
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
              mode,
              title,
              description: value,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags: values,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
            };
            const result = onChange(modelFields);
            values = result?.showTags ?? values;
          }
          setShowTags(values);
          setCurrentShowTagsValue("");
        }}
        currentFieldValue={currentShowTagsValue}
        label={"Show tags"}
        items={showTags}
        hasError={errors?.showTags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("showTags", currentShowTagsValue)
        }
        errorMessage={errors?.showTags?.errorMessage}
        setFieldValue={setCurrentShowTagsValue}
        inputFieldRef={showTagsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Show tags"
          isRequired={false}
          isReadOnly={false}
          value={currentShowTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.showTags?.hasError) {
              runValidationTasks("showTags", value);
            }
            setCurrentShowTagsValue(value);
          }}
          onBlur={() => runValidationTasks("showTags", currentShowTagsValue)}
          errorMessage={errors.showTags?.errorMessage}
          hasError={errors.showTags?.hasError}
          ref={showTagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "showTags")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Stream url"
        isRequired={false}
        isReadOnly={false}
        value={streamUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl: value,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
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
        label="Taping time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={tapingTime && convertToLocal(convertTimeStampToDate(tapingTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime: value,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
            };
            const result = onChange(modelFields);
            value = result?.tapingTime ?? value;
          }
          if (errors.tapingTime?.hasError) {
            runValidationTasks("tapingTime", value);
          }
          setTapingTime(value);
        }}
        onBlur={() => runValidationTasks("tapingTime", tapingTime)}
        errorMessage={errors.tapingTime?.errorMessage}
        hasError={errors.tapingTime?.hasError}
        {...getOverrideProps(overrides, "tapingTime")}
      ></TextField>
      <TextField
        label="Broadcast time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          broadcastTime && convertToLocal(convertTimeStampToDate(broadcastTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime: value,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
            };
            const result = onChange(modelFields);
            value = result?.broadcastTime ?? value;
          }
          if (errors.broadcastTime?.hasError) {
            runValidationTasks("broadcastTime", value);
          }
          setBroadcastTime(value);
        }}
        onBlur={() => runValidationTasks("broadcastTime", broadcastTime)}
        errorMessage={errors.broadcastTime?.errorMessage}
        hasError={errors.broadcastTime?.hasError}
        {...getOverrideProps(overrides, "broadcastTime")}
      ></TextField>
      <TextField
        label="Prize headline1"
        isRequired={false}
        isReadOnly={false}
        value={prizeHeadline1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1: value,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
            };
            const result = onChange(modelFields);
            value = result?.prizeHeadline1 ?? value;
          }
          if (errors.prizeHeadline1?.hasError) {
            runValidationTasks("prizeHeadline1", value);
          }
          setPrizeHeadline1(value);
        }}
        onBlur={() => runValidationTasks("prizeHeadline1", prizeHeadline1)}
        errorMessage={errors.prizeHeadline1?.errorMessage}
        hasError={errors.prizeHeadline1?.hasError}
        {...getOverrideProps(overrides, "prizeHeadline1")}
      ></TextField>
      <TextField
        label="Prize headline2"
        isRequired={false}
        isReadOnly={false}
        value={prizeHeadline2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2: value,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
            };
            const result = onChange(modelFields);
            value = result?.prizeHeadline2 ?? value;
          }
          if (errors.prizeHeadline2?.hasError) {
            runValidationTasks("prizeHeadline2", value);
          }
          setPrizeHeadline2(value);
        }}
        onBlur={() => runValidationTasks("prizeHeadline2", prizeHeadline2)}
        errorMessage={errors.prizeHeadline2?.errorMessage}
        hasError={errors.prizeHeadline2?.hasError}
        {...getOverrideProps(overrides, "prizeHeadline2")}
      ></TextField>
      <TextField
        label="Prize claim pin"
        isRequired={false}
        isReadOnly={false}
        value={prizeClaimPin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin: value,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
            };
            const result = onChange(modelFields);
            value = result?.prizeClaimPin ?? value;
          }
          if (errors.prizeClaimPin?.hasError) {
            runValidationTasks("prizeClaimPin", value);
          }
          setPrizeClaimPin(value);
        }}
        onBlur={() => runValidationTasks("prizeClaimPin", prizeClaimPin)}
        errorMessage={errors.prizeClaimPin?.errorMessage}
        hasError={errors.prizeClaimPin?.hasError}
        {...getOverrideProps(overrides, "prizeClaimPin")}
      ></TextField>
      <TextField
        label="Prize payout completed at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          prizePayoutCompletedAt &&
          convertToLocal(convertTimeStampToDate(prizePayoutCompletedAt))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt: value,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
            };
            const result = onChange(modelFields);
            value = result?.prizePayoutCompletedAt ?? value;
          }
          if (errors.prizePayoutCompletedAt?.hasError) {
            runValidationTasks("prizePayoutCompletedAt", value);
          }
          setPrizePayoutCompletedAt(value);
        }}
        onBlur={() =>
          runValidationTasks("prizePayoutCompletedAt", prizePayoutCompletedAt)
        }
        errorMessage={errors.prizePayoutCompletedAt?.errorMessage}
        hasError={errors.prizePayoutCompletedAt?.hasError}
        {...getOverrideProps(overrides, "prizePayoutCompletedAt")}
      ></TextField>
      <TextField
        label="Prize count down"
        isRequired={false}
        isReadOnly={false}
        value={prizeCountDown}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown: value,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
            };
            const result = onChange(modelFields);
            value = result?.prizeCountDown ?? value;
          }
          if (errors.prizeCountDown?.hasError) {
            runValidationTasks("prizeCountDown", value);
          }
          setPrizeCountDown(value);
        }}
        onBlur={() => runValidationTasks("prizeCountDown", prizeCountDown)}
        errorMessage={errors.prizeCountDown?.errorMessage}
        hasError={errors.prizeCountDown?.hasError}
        {...getOverrideProps(overrides, "prizeCountDown")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={false}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password: value,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <SwitchField
        label="Password protected"
        defaultChecked={false}
        isDisabled={false}
        isChecked={passwordProtected}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected: value,
              status,
              winnerAndPrizefinalized,
              winnersCount,
            };
            const result = onChange(modelFields);
            value = result?.passwordProtected ?? value;
          }
          if (errors.passwordProtected?.hasError) {
            runValidationTasks("passwordProtected", value);
          }
          setPasswordProtected(value);
        }}
        onBlur={() =>
          runValidationTasks("passwordProtected", passwordProtected)
        }
        errorMessage={errors.passwordProtected?.errorMessage}
        hasError={errors.passwordProtected?.hasError}
        {...getOverrideProps(overrides, "passwordProtected")}
      ></SwitchField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status: value,
              winnerAndPrizefinalized,
              winnersCount,
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
      <SwitchField
        label="Winner and prizefinalized"
        defaultChecked={false}
        isDisabled={false}
        isChecked={winnerAndPrizefinalized}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized: value,
              winnersCount,
            };
            const result = onChange(modelFields);
            value = result?.winnerAndPrizefinalized ?? value;
          }
          if (errors.winnerAndPrizefinalized?.hasError) {
            runValidationTasks("winnerAndPrizefinalized", value);
          }
          setWinnerAndPrizefinalized(value);
        }}
        onBlur={() =>
          runValidationTasks("winnerAndPrizefinalized", winnerAndPrizefinalized)
        }
        errorMessage={errors.winnerAndPrizefinalized?.errorMessage}
        hasError={errors.winnerAndPrizefinalized?.hasError}
        {...getOverrideProps(overrides, "winnerAndPrizefinalized")}
      ></SwitchField>
      <TextField
        label="Winners count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={winnersCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              mode,
              title,
              description,
              showTags,
              streamUrl,
              tapingTime,
              broadcastTime,
              prizeHeadline1,
              prizeHeadline2,
              prizeClaimPin,
              prizePayoutCompletedAt,
              prizeCountDown,
              password,
              passwordProtected,
              status,
              winnerAndPrizefinalized,
              winnersCount: value,
            };
            const result = onChange(modelFields);
            value = result?.winnersCount ?? value;
          }
          if (errors.winnersCount?.hasError) {
            runValidationTasks("winnersCount", value);
          }
          setWinnersCount(value);
        }}
        onBlur={() => runValidationTasks("winnersCount", winnersCount)}
        errorMessage={errors.winnersCount?.errorMessage}
        hasError={errors.winnersCount?.hasError}
        {...getOverrideProps(overrides, "winnersCount")}
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
