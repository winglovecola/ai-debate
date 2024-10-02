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
import { getDebateScore } from "../graphql/queries";
import { updateDebateScore } from "../graphql/mutations";
const client = generateClient();
export default function DebateScoreUpdateForm(props) {
  const {
    id: idProp,
    debateScore: debateScoreModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    winningTeam: "",
  };
  const [winningTeam, setWinningTeam] = React.useState(
    initialValues.winningTeam
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = debateScoreRecord
      ? { ...initialValues, ...debateScoreRecord }
      : initialValues;
    setWinningTeam(cleanValues.winningTeam);
    setErrors({});
  };
  const [debateScoreRecord, setDebateScoreRecord] =
    React.useState(debateScoreModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDebateScore.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDebateScore
        : debateScoreModelProp;
      setDebateScoreRecord(record);
    };
    queryData();
  }, [idProp, debateScoreModelProp]);
  React.useEffect(resetStateValues, [debateScoreRecord]);
  const validations = {
    winningTeam: [{ type: "Required" }],
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
          winningTeam,
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
            query: updateDebateScore.replaceAll("__typename", ""),
            variables: {
              input: {
                id: debateScoreRecord.id,
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
      {...getOverrideProps(overrides, "DebateScoreUpdateForm")}
      {...rest}
    >
      <TextField
        label="Winning team"
        isRequired={true}
        isReadOnly={false}
        value={winningTeam}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              winningTeam: value,
            };
            const result = onChange(modelFields);
            value = result?.winningTeam ?? value;
          }
          if (errors.winningTeam?.hasError) {
            runValidationTasks("winningTeam", value);
          }
          setWinningTeam(value);
        }}
        onBlur={() => runValidationTasks("winningTeam", winningTeam)}
        errorMessage={errors.winningTeam?.errorMessage}
        hasError={errors.winningTeam?.hasError}
        {...getOverrideProps(overrides, "winningTeam")}
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
          isDisabled={!(idProp || debateScoreModelProp)}
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
              !(idProp || debateScoreModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
