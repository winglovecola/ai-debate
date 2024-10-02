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
import { getEventPrizesType } from "../graphql/queries";
import { updateEventPrizesType } from "../graphql/mutations";
const client = generateClient();
export default function EventPrizesTypeUpdateForm(props) {
  const {
    id: idProp,
    eventPrizesType: eventPrizesTypeModelProp,
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
    prizeType: "",
    prizeValue: "",
    info: "",
    imageUrl: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [prizeType, setPrizeType] = React.useState(initialValues.prizeType);
  const [prizeValue, setPrizeValue] = React.useState(initialValues.prizeValue);
  const [info, setInfo] = React.useState(initialValues.info);
  const [imageUrl, setImageUrl] = React.useState(initialValues.imageUrl);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventPrizesTypeRecord
      ? { ...initialValues, ...eventPrizesTypeRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setPrizeType(cleanValues.prizeType);
    setPrizeValue(cleanValues.prizeValue);
    setInfo(cleanValues.info);
    setImageUrl(cleanValues.imageUrl);
    setErrors({});
  };
  const [eventPrizesTypeRecord, setEventPrizesTypeRecord] = React.useState(
    eventPrizesTypeModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEventPrizesType.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEventPrizesType
        : eventPrizesTypeModelProp;
      setEventPrizesTypeRecord(record);
    };
    queryData();
  }, [idProp, eventPrizesTypeModelProp]);
  React.useEffect(resetStateValues, [eventPrizesTypeRecord]);
  const validations = {
    title: [{ type: "Required" }],
    prizeType: [{ type: "Required" }],
    prizeValue: [],
    info: [],
    imageUrl: [],
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
          title,
          prizeType,
          prizeValue: prizeValue ?? null,
          info: info ?? null,
          imageUrl: imageUrl ?? null,
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
            query: updateEventPrizesType.replaceAll("__typename", ""),
            variables: {
              input: {
                id: eventPrizesTypeRecord.id,
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
      {...getOverrideProps(overrides, "EventPrizesTypeUpdateForm")}
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
              prizeType,
              prizeValue,
              info,
              imageUrl,
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
        label="Prize type"
        isRequired={true}
        isReadOnly={false}
        value={prizeType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              prizeType: value,
              prizeValue,
              info,
              imageUrl,
            };
            const result = onChange(modelFields);
            value = result?.prizeType ?? value;
          }
          if (errors.prizeType?.hasError) {
            runValidationTasks("prizeType", value);
          }
          setPrizeType(value);
        }}
        onBlur={() => runValidationTasks("prizeType", prizeType)}
        errorMessage={errors.prizeType?.errorMessage}
        hasError={errors.prizeType?.hasError}
        {...getOverrideProps(overrides, "prizeType")}
      ></TextField>
      <TextField
        label="Prize value"
        isRequired={false}
        isReadOnly={false}
        value={prizeValue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              prizeType,
              prizeValue: value,
              info,
              imageUrl,
            };
            const result = onChange(modelFields);
            value = result?.prizeValue ?? value;
          }
          if (errors.prizeValue?.hasError) {
            runValidationTasks("prizeValue", value);
          }
          setPrizeValue(value);
        }}
        onBlur={() => runValidationTasks("prizeValue", prizeValue)}
        errorMessage={errors.prizeValue?.errorMessage}
        hasError={errors.prizeValue?.hasError}
        {...getOverrideProps(overrides, "prizeValue")}
      ></TextField>
      <TextField
        label="Info"
        isRequired={false}
        isReadOnly={false}
        value={info}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              prizeType,
              prizeValue,
              info: value,
              imageUrl,
            };
            const result = onChange(modelFields);
            value = result?.info ?? value;
          }
          if (errors.info?.hasError) {
            runValidationTasks("info", value);
          }
          setInfo(value);
        }}
        onBlur={() => runValidationTasks("info", info)}
        errorMessage={errors.info?.errorMessage}
        hasError={errors.info?.hasError}
        {...getOverrideProps(overrides, "info")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={imageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              prizeType,
              prizeValue,
              info,
              imageUrl: value,
            };
            const result = onChange(modelFields);
            value = result?.imageUrl ?? value;
          }
          if (errors.imageUrl?.hasError) {
            runValidationTasks("imageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("imageUrl", imageUrl)}
        errorMessage={errors.imageUrl?.errorMessage}
        hasError={errors.imageUrl?.hasError}
        {...getOverrideProps(overrides, "imageUrl")}
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
          isDisabled={!(idProp || eventPrizesTypeModelProp)}
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
              !(idProp || eventPrizesTypeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
