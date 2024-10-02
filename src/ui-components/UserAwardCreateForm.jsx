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
import { createUserAward } from "../graphql/mutations";
const client = generateClient();
export default function UserAwardCreateForm(props) {
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
    trLoyaltyBonusResetTime: "",
  };
  const [trReferralBonus, setTrReferralBonus] = React.useState(
    initialValues.trReferralBonus
  );
  const [trLoyaltyBonus, setTrLoyaltyBonus] = React.useState(
    initialValues.trLoyaltyBonus
  );
  const [trLoyaltyBonusResetTime, setTrLoyaltyBonusResetTime] = React.useState(
    initialValues.trLoyaltyBonusResetTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTrReferralBonus(initialValues.trReferralBonus);
    setTrLoyaltyBonus(initialValues.trLoyaltyBonus);
    setTrLoyaltyBonusResetTime(initialValues.trLoyaltyBonusResetTime);
    setErrors({});
  };
  const validations = {
    trReferralBonus: [],
    trLoyaltyBonus: [],
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
          trReferralBonus,
          trLoyaltyBonus,
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
            query: createUserAward.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "UserAwardCreateForm")}
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
              trLoyaltyBonusResetTime,
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
              trLoyaltyBonusResetTime,
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
              trReferralBonus,
              trLoyaltyBonus,
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
