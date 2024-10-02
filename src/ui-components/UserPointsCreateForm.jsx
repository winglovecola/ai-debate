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
import { createUserPoints } from "../graphql/mutations";
const client = generateClient();
export default function UserPointsCreateForm(props) {
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
    trReferralBonus: "",
    trLoyaltyBonus: "",
    trLoyaltyTotal: "",
    trLoyaltyBonusResetedTime: "",
    trTotalPoints: "",
    trScoreTotal: "",
  };
  const [trReferralBonus, setTrReferralBonus] = React.useState(
    initialValues.trReferralBonus
  );
  const [trLoyaltyBonus, setTrLoyaltyBonus] = React.useState(
    initialValues.trLoyaltyBonus
  );
  const [trLoyaltyTotal, setTrLoyaltyTotal] = React.useState(
    initialValues.trLoyaltyTotal
  );
  const [trLoyaltyBonusResetedTime, setTrLoyaltyBonusResetedTime] =
    React.useState(initialValues.trLoyaltyBonusResetedTime);
  const [trTotalPoints, setTrTotalPoints] = React.useState(
    initialValues.trTotalPoints
  );
  const [trScoreTotal, setTrScoreTotal] = React.useState(
    initialValues.trScoreTotal
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTrReferralBonus(initialValues.trReferralBonus);
    setTrLoyaltyBonus(initialValues.trLoyaltyBonus);
    setTrLoyaltyTotal(initialValues.trLoyaltyTotal);
    setTrLoyaltyBonusResetedTime(initialValues.trLoyaltyBonusResetedTime);
    setTrTotalPoints(initialValues.trTotalPoints);
    setTrScoreTotal(initialValues.trScoreTotal);
    setErrors({});
  };
  const validations = {
    trReferralBonus: [],
    trLoyaltyBonus: [],
    trLoyaltyTotal: [],
    trLoyaltyBonusResetedTime: [],
    trTotalPoints: [],
    trScoreTotal: [],
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
          trReferralBonus,
          trLoyaltyBonus,
          trLoyaltyTotal,
          trLoyaltyBonusResetedTime,
          trTotalPoints,
          trScoreTotal,
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
            query: createUserPoints.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "UserPointsCreateForm")}
      {...rest}
    >
      <TextField
        label="Tr referral bonus"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trReferralBonus}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              trReferralBonus: value,
              trLoyaltyBonus,
              trLoyaltyTotal,
              trLoyaltyBonusResetedTime,
              trTotalPoints,
              trScoreTotal,
            };
            const result = onChange(modelFields);
            value = result?.trReferralBonus ?? value;
          }
          if (errors.trReferralBonus?.hasError) {
            runValidationTasks("trReferralBonus", value);
          }
          setTrReferralBonus(value);
        }}
        onBlur={() => runValidationTasks("trReferralBonus", trReferralBonus)}
        errorMessage={errors.trReferralBonus?.errorMessage}
        hasError={errors.trReferralBonus?.hasError}
        {...getOverrideProps(overrides, "trReferralBonus")}
      ></TextField>
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
              trReferralBonus,
              trLoyaltyBonus: value,
              trLoyaltyTotal,
              trLoyaltyBonusResetedTime,
              trTotalPoints,
              trScoreTotal,
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
        label="Tr loyalty total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trLoyaltyTotal}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              trReferralBonus,
              trLoyaltyBonus,
              trLoyaltyTotal: value,
              trLoyaltyBonusResetedTime,
              trTotalPoints,
              trScoreTotal,
            };
            const result = onChange(modelFields);
            value = result?.trLoyaltyTotal ?? value;
          }
          if (errors.trLoyaltyTotal?.hasError) {
            runValidationTasks("trLoyaltyTotal", value);
          }
          setTrLoyaltyTotal(value);
        }}
        onBlur={() => runValidationTasks("trLoyaltyTotal", trLoyaltyTotal)}
        errorMessage={errors.trLoyaltyTotal?.errorMessage}
        hasError={errors.trLoyaltyTotal?.hasError}
        {...getOverrideProps(overrides, "trLoyaltyTotal")}
      ></TextField>
      <TextField
        label="Tr loyalty bonus reseted time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          trLoyaltyBonusResetedTime &&
          convertToLocal(convertTimeStampToDate(trLoyaltyBonusResetedTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              trReferralBonus,
              trLoyaltyBonus,
              trLoyaltyTotal,
              trLoyaltyBonusResetedTime: value,
              trTotalPoints,
              trScoreTotal,
            };
            const result = onChange(modelFields);
            value = result?.trLoyaltyBonusResetedTime ?? value;
          }
          if (errors.trLoyaltyBonusResetedTime?.hasError) {
            runValidationTasks("trLoyaltyBonusResetedTime", value);
          }
          setTrLoyaltyBonusResetedTime(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "trLoyaltyBonusResetedTime",
            trLoyaltyBonusResetedTime
          )
        }
        errorMessage={errors.trLoyaltyBonusResetedTime?.errorMessage}
        hasError={errors.trLoyaltyBonusResetedTime?.hasError}
        {...getOverrideProps(overrides, "trLoyaltyBonusResetedTime")}
      ></TextField>
      <TextField
        label="Tr total points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trTotalPoints}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              trReferralBonus,
              trLoyaltyBonus,
              trLoyaltyTotal,
              trLoyaltyBonusResetedTime,
              trTotalPoints: value,
              trScoreTotal,
            };
            const result = onChange(modelFields);
            value = result?.trTotalPoints ?? value;
          }
          if (errors.trTotalPoints?.hasError) {
            runValidationTasks("trTotalPoints", value);
          }
          setTrTotalPoints(value);
        }}
        onBlur={() => runValidationTasks("trTotalPoints", trTotalPoints)}
        errorMessage={errors.trTotalPoints?.errorMessage}
        hasError={errors.trTotalPoints?.hasError}
        {...getOverrideProps(overrides, "trTotalPoints")}
      ></TextField>
      <TextField
        label="Tr score total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trScoreTotal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              trReferralBonus,
              trLoyaltyBonus,
              trLoyaltyTotal,
              trLoyaltyBonusResetedTime,
              trTotalPoints,
              trScoreTotal: value,
            };
            const result = onChange(modelFields);
            value = result?.trScoreTotal ?? value;
          }
          if (errors.trScoreTotal?.hasError) {
            runValidationTasks("trScoreTotal", value);
          }
          setTrScoreTotal(value);
        }}
        onBlur={() => runValidationTasks("trScoreTotal", trScoreTotal)}
        errorMessage={errors.trScoreTotal?.errorMessage}
        hasError={errors.trScoreTotal?.hasError}
        {...getOverrideProps(overrides, "trScoreTotal")}
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
