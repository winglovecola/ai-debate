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
import { getEvents } from "../graphql/queries";
import { updateEvents } from "../graphql/mutations";
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
export default function EventsUpdateForm(props) {
  const {
    id: idProp,
    events: eventsModelProp,
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
    eventType: "",
    eventTags: [],
    rewardType: "",
    streamUrl: "",
    relatedShowsData: "",
    scorePoolData: "",
    scoreAccess: "",
    scoreAllowView: false,
    winnerCorrectAnswerCount: "",
    winnerQualifyTimeSec: "",
    eventAllowedUsers: [],
    initiateTime: "",
    broadcastTime: "",
    eventEndingTime: "",
    prizeClaimPin: "",
    prizePayoutCompletedAt: "",
    prizeCountDown: "",
    password: "",
    passwordProtected: false,
    status: "",
    winnerAndPrizefinalized: false,
    winnersCount: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [eventType, setEventType] = React.useState(initialValues.eventType);
  const [eventTags, setEventTags] = React.useState(initialValues.eventTags);
  const [rewardType, setRewardType] = React.useState(initialValues.rewardType);
  const [streamUrl, setStreamUrl] = React.useState(initialValues.streamUrl);
  const [relatedShowsData, setRelatedShowsData] = React.useState(
    initialValues.relatedShowsData
  );
  const [scorePoolData, setScorePoolData] = React.useState(
    initialValues.scorePoolData
  );
  const [scoreAccess, setScoreAccess] = React.useState(
    initialValues.scoreAccess
  );
  const [scoreAllowView, setScoreAllowView] = React.useState(
    initialValues.scoreAllowView
  );
  const [winnerCorrectAnswerCount, setWinnerCorrectAnswerCount] =
    React.useState(initialValues.winnerCorrectAnswerCount);
  const [winnerQualifyTimeSec, setWinnerQualifyTimeSec] = React.useState(
    initialValues.winnerQualifyTimeSec
  );
  const [eventAllowedUsers, setEventAllowedUsers] = React.useState(
    initialValues.eventAllowedUsers
  );
  const [initiateTime, setInitiateTime] = React.useState(
    initialValues.initiateTime
  );
  const [broadcastTime, setBroadcastTime] = React.useState(
    initialValues.broadcastTime
  );
  const [eventEndingTime, setEventEndingTime] = React.useState(
    initialValues.eventEndingTime
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
    const cleanValues = eventsRecord
      ? { ...initialValues, ...eventsRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setEventType(cleanValues.eventType);
    setEventTags(cleanValues.eventTags ?? []);
    setCurrentEventTagsValue("");
    setRewardType(cleanValues.rewardType);
    setStreamUrl(cleanValues.streamUrl);
    setRelatedShowsData(cleanValues.relatedShowsData);
    setScorePoolData(cleanValues.scorePoolData);
    setScoreAccess(cleanValues.scoreAccess);
    setScoreAllowView(cleanValues.scoreAllowView);
    setWinnerCorrectAnswerCount(cleanValues.winnerCorrectAnswerCount);
    setWinnerQualifyTimeSec(cleanValues.winnerQualifyTimeSec);
    setEventAllowedUsers(cleanValues.eventAllowedUsers ?? []);
    setCurrentEventAllowedUsersValue("");
    setInitiateTime(cleanValues.initiateTime);
    setBroadcastTime(cleanValues.broadcastTime);
    setEventEndingTime(cleanValues.eventEndingTime);
    setPrizeClaimPin(cleanValues.prizeClaimPin);
    setPrizePayoutCompletedAt(cleanValues.prizePayoutCompletedAt);
    setPrizeCountDown(cleanValues.prizeCountDown);
    setPassword(cleanValues.password);
    setPasswordProtected(cleanValues.passwordProtected);
    setStatus(cleanValues.status);
    setWinnerAndPrizefinalized(cleanValues.winnerAndPrizefinalized);
    setWinnersCount(cleanValues.winnersCount);
    setErrors({});
  };
  const [eventsRecord, setEventsRecord] = React.useState(eventsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEvents.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEvents
        : eventsModelProp;
      setEventsRecord(record);
    };
    queryData();
  }, [idProp, eventsModelProp]);
  React.useEffect(resetStateValues, [eventsRecord]);
  const [currentEventTagsValue, setCurrentEventTagsValue] = React.useState("");
  const eventTagsRef = React.createRef();
  const [currentEventAllowedUsersValue, setCurrentEventAllowedUsersValue] =
    React.useState("");
  const eventAllowedUsersRef = React.createRef();
  const validations = {
    title: [{ type: "Required" }],
    description: [],
    eventType: [],
    eventTags: [],
    rewardType: [],
    streamUrl: [],
    relatedShowsData: [],
    scorePoolData: [],
    scoreAccess: [],
    scoreAllowView: [],
    winnerCorrectAnswerCount: [],
    winnerQualifyTimeSec: [],
    eventAllowedUsers: [],
    initiateTime: [],
    broadcastTime: [],
    eventEndingTime: [],
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
          title,
          description: description ?? null,
          eventType: eventType ?? null,
          eventTags: eventTags ?? null,
          rewardType: rewardType ?? null,
          streamUrl: streamUrl ?? null,
          relatedShowsData: relatedShowsData ?? null,
          scorePoolData: scorePoolData ?? null,
          scoreAccess: scoreAccess ?? null,
          scoreAllowView: scoreAllowView ?? null,
          winnerCorrectAnswerCount: winnerCorrectAnswerCount ?? null,
          winnerQualifyTimeSec: winnerQualifyTimeSec ?? null,
          eventAllowedUsers: eventAllowedUsers ?? null,
          initiateTime: initiateTime ?? null,
          broadcastTime: broadcastTime ?? null,
          eventEndingTime: eventEndingTime ?? null,
          prizeClaimPin: prizeClaimPin ?? null,
          prizePayoutCompletedAt: prizePayoutCompletedAt ?? null,
          prizeCountDown: prizeCountDown ?? null,
          password: password ?? null,
          passwordProtected: passwordProtected ?? null,
          status: status ?? null,
          winnerAndPrizefinalized: winnerAndPrizefinalized ?? null,
          winnersCount: winnersCount ?? null,
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
            query: updateEvents.replaceAll("__typename", ""),
            variables: {
              input: {
                id: eventsRecord.id,
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
      {...getOverrideProps(overrides, "EventsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
              title,
              description: value,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
      <TextField
        label="Event type"
        isRequired={false}
        isReadOnly={false}
        value={eventType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType: value,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags: values,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
            values = result?.eventTags ?? values;
          }
          setEventTags(values);
          setCurrentEventTagsValue("");
        }}
        currentFieldValue={currentEventTagsValue}
        label={"Event tags"}
        items={eventTags}
        hasError={errors?.eventTags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("eventTags", currentEventTagsValue)
        }
        errorMessage={errors?.eventTags?.errorMessage}
        setFieldValue={setCurrentEventTagsValue}
        inputFieldRef={eventTagsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Event tags"
          isRequired={false}
          isReadOnly={false}
          value={currentEventTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.eventTags?.hasError) {
              runValidationTasks("eventTags", value);
            }
            setCurrentEventTagsValue(value);
          }}
          onBlur={() => runValidationTasks("eventTags", currentEventTagsValue)}
          errorMessage={errors.eventTags?.errorMessage}
          hasError={errors.eventTags?.hasError}
          ref={eventTagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "eventTags")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Reward type"
        isRequired={false}
        isReadOnly={false}
        value={rewardType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags,
              rewardType: value,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
        label="Stream url"
        isRequired={false}
        isReadOnly={false}
        value={streamUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl: value,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
        label="Related shows data"
        isRequired={false}
        isReadOnly={false}
        value={relatedShowsData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData: value,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
        label="Score pool data"
        isRequired={false}
        isReadOnly={false}
        value={scorePoolData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData: value,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
            value = result?.scorePoolData ?? value;
          }
          if (errors.scorePoolData?.hasError) {
            runValidationTasks("scorePoolData", value);
          }
          setScorePoolData(value);
        }}
        onBlur={() => runValidationTasks("scorePoolData", scorePoolData)}
        errorMessage={errors.scorePoolData?.errorMessage}
        hasError={errors.scorePoolData?.hasError}
        {...getOverrideProps(overrides, "scorePoolData")}
      ></TextField>
      <TextField
        label="Score access"
        isRequired={false}
        isReadOnly={false}
        value={scoreAccess}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess: value,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
            value = result?.scoreAccess ?? value;
          }
          if (errors.scoreAccess?.hasError) {
            runValidationTasks("scoreAccess", value);
          }
          setScoreAccess(value);
        }}
        onBlur={() => runValidationTasks("scoreAccess", scoreAccess)}
        errorMessage={errors.scoreAccess?.errorMessage}
        hasError={errors.scoreAccess?.hasError}
        {...getOverrideProps(overrides, "scoreAccess")}
      ></TextField>
      <SwitchField
        label="Score allow view"
        defaultChecked={false}
        isDisabled={false}
        isChecked={scoreAllowView}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView: value,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
            value = result?.scoreAllowView ?? value;
          }
          if (errors.scoreAllowView?.hasError) {
            runValidationTasks("scoreAllowView", value);
          }
          setScoreAllowView(value);
        }}
        onBlur={() => runValidationTasks("scoreAllowView", scoreAllowView)}
        errorMessage={errors.scoreAllowView?.errorMessage}
        hasError={errors.scoreAllowView?.hasError}
        {...getOverrideProps(overrides, "scoreAllowView")}
      ></SwitchField>
      <TextField
        label="Winner correct answer count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={winnerCorrectAnswerCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount: value,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
            value = result?.winnerCorrectAnswerCount ?? value;
          }
          if (errors.winnerCorrectAnswerCount?.hasError) {
            runValidationTasks("winnerCorrectAnswerCount", value);
          }
          setWinnerCorrectAnswerCount(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "winnerCorrectAnswerCount",
            winnerCorrectAnswerCount
          )
        }
        errorMessage={errors.winnerCorrectAnswerCount?.errorMessage}
        hasError={errors.winnerCorrectAnswerCount?.hasError}
        {...getOverrideProps(overrides, "winnerCorrectAnswerCount")}
      ></TextField>
      <TextField
        label="Winner qualify time sec"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={winnerQualifyTimeSec}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec: value,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
            value = result?.winnerQualifyTimeSec ?? value;
          }
          if (errors.winnerQualifyTimeSec?.hasError) {
            runValidationTasks("winnerQualifyTimeSec", value);
          }
          setWinnerQualifyTimeSec(value);
        }}
        onBlur={() =>
          runValidationTasks("winnerQualifyTimeSec", winnerQualifyTimeSec)
        }
        errorMessage={errors.winnerQualifyTimeSec?.errorMessage}
        hasError={errors.winnerQualifyTimeSec?.hasError}
        {...getOverrideProps(overrides, "winnerQualifyTimeSec")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers: values,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
            values = result?.eventAllowedUsers ?? values;
          }
          setEventAllowedUsers(values);
          setCurrentEventAllowedUsersValue("");
        }}
        currentFieldValue={currentEventAllowedUsersValue}
        label={"Event allowed users"}
        items={eventAllowedUsers}
        hasError={errors?.eventAllowedUsers?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "eventAllowedUsers",
            currentEventAllowedUsersValue
          )
        }
        errorMessage={errors?.eventAllowedUsers?.errorMessage}
        setFieldValue={setCurrentEventAllowedUsersValue}
        inputFieldRef={eventAllowedUsersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Event allowed users"
          isRequired={false}
          isReadOnly={false}
          value={currentEventAllowedUsersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.eventAllowedUsers?.hasError) {
              runValidationTasks("eventAllowedUsers", value);
            }
            setCurrentEventAllowedUsersValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "eventAllowedUsers",
              currentEventAllowedUsersValue
            )
          }
          errorMessage={errors.eventAllowedUsers?.errorMessage}
          hasError={errors.eventAllowedUsers?.hasError}
          ref={eventAllowedUsersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "eventAllowedUsers")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Initiate time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          initiateTime && convertToLocal(convertTimeStampToDate(initiateTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime: value,
              broadcastTime,
              eventEndingTime,
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
            value = result?.initiateTime ?? value;
          }
          if (errors.initiateTime?.hasError) {
            runValidationTasks("initiateTime", value);
          }
          setInitiateTime(value);
        }}
        onBlur={() => runValidationTasks("initiateTime", initiateTime)}
        errorMessage={errors.initiateTime?.errorMessage}
        hasError={errors.initiateTime?.hasError}
        {...getOverrideProps(overrides, "initiateTime")}
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
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime: value,
              eventEndingTime,
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
        label="Event ending time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          eventEndingTime &&
          convertToLocal(convertTimeStampToDate(eventEndingTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime: value,
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
            value = result?.eventEndingTime ?? value;
          }
          if (errors.eventEndingTime?.hasError) {
            runValidationTasks("eventEndingTime", value);
          }
          setEventEndingTime(value);
        }}
        onBlur={() => runValidationTasks("eventEndingTime", eventEndingTime)}
        errorMessage={errors.eventEndingTime?.errorMessage}
        hasError={errors.eventEndingTime?.hasError}
        {...getOverrideProps(overrides, "eventEndingTime")}
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
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
              title,
              description,
              eventType,
              eventTags,
              rewardType,
              streamUrl,
              relatedShowsData,
              scorePoolData,
              scoreAccess,
              scoreAllowView,
              winnerCorrectAnswerCount,
              winnerQualifyTimeSec,
              eventAllowedUsers,
              initiateTime,
              broadcastTime,
              eventEndingTime,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || eventsModelProp)}
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
              !(idProp || eventsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
