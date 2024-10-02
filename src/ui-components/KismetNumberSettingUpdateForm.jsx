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
import { getKismetNumberSetting } from "../graphql/queries";
import { updateKismetNumberSetting } from "../graphql/mutations";
const client = generateClient();
export default function KismetNumberSettingUpdateForm(props) {
  const {
    id: idProp,
    kismetNumberSetting: kismetNumberSettingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    oidCount: "",
  };
  const [oidCount, setOidCount] = React.useState(initialValues.oidCount);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = kismetNumberSettingRecord
      ? { ...initialValues, ...kismetNumberSettingRecord }
      : initialValues;
    setOidCount(cleanValues.oidCount);
    setErrors({});
  };
  const [kismetNumberSettingRecord, setKismetNumberSettingRecord] =
    React.useState(kismetNumberSettingModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getKismetNumberSetting.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getKismetNumberSetting
        : kismetNumberSettingModelProp;
      setKismetNumberSettingRecord(record);
    };
    queryData();
  }, [idProp, kismetNumberSettingModelProp]);
  React.useEffect(resetStateValues, [kismetNumberSettingRecord]);
  const validations = {
    oidCount: [],
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
          oidCount: oidCount ?? null,
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
            query: updateKismetNumberSetting.replaceAll("__typename", ""),
            variables: {
              input: {
                id: kismetNumberSettingRecord.id,
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
      {...getOverrideProps(overrides, "KismetNumberSettingUpdateForm")}
      {...rest}
    >
      <TextField
        label="Oid count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={oidCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              oidCount: value,
            };
            const result = onChange(modelFields);
            value = result?.oidCount ?? value;
          }
          if (errors.oidCount?.hasError) {
            runValidationTasks("oidCount", value);
          }
          setOidCount(value);
        }}
        onBlur={() => runValidationTasks("oidCount", oidCount)}
        errorMessage={errors.oidCount?.errorMessage}
        hasError={errors.oidCount?.hasError}
        {...getOverrideProps(overrides, "oidCount")}
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
          isDisabled={!(idProp || kismetNumberSettingModelProp)}
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
              !(idProp || kismetNumberSettingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
