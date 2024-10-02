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
import { getUserPayoutMethod } from "../graphql/queries";
import { updateUserPayoutMethod } from "../graphql/mutations";
const client = generateClient();
export default function UserPayoutMethodUpdateForm(props) {
  const {
    id: idProp,
    userPayoutMethod: userPayoutMethodModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    paypal: "",
    interac: "",
    paperCheck: "",
    cashApp: "",
    venmo: "",
    verificationIdType: "",
    verificationId: "",
    country: "",
    defaultPayoutMethod: "",
    customContactEmail: "",
    owner: "",
  };
  const [paypal, setPaypal] = React.useState(initialValues.paypal);
  const [interac, setInterac] = React.useState(initialValues.interac);
  const [paperCheck, setPaperCheck] = React.useState(initialValues.paperCheck);
  const [cashApp, setCashApp] = React.useState(initialValues.cashApp);
  const [venmo, setVenmo] = React.useState(initialValues.venmo);
  const [verificationIdType, setVerificationIdType] = React.useState(
    initialValues.verificationIdType
  );
  const [verificationId, setVerificationId] = React.useState(
    initialValues.verificationId
  );
  const [country, setCountry] = React.useState(initialValues.country);
  const [defaultPayoutMethod, setDefaultPayoutMethod] = React.useState(
    initialValues.defaultPayoutMethod
  );
  const [customContactEmail, setCustomContactEmail] = React.useState(
    initialValues.customContactEmail
  );
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userPayoutMethodRecord
      ? { ...initialValues, ...userPayoutMethodRecord }
      : initialValues;
    setPaypal(cleanValues.paypal);
    setInterac(cleanValues.interac);
    setPaperCheck(cleanValues.paperCheck);
    setCashApp(cleanValues.cashApp);
    setVenmo(cleanValues.venmo);
    setVerificationIdType(cleanValues.verificationIdType);
    setVerificationId(cleanValues.verificationId);
    setCountry(cleanValues.country);
    setDefaultPayoutMethod(cleanValues.defaultPayoutMethod);
    setCustomContactEmail(cleanValues.customContactEmail);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [userPayoutMethodRecord, setUserPayoutMethodRecord] = React.useState(
    userPayoutMethodModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserPayoutMethod.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserPayoutMethod
        : userPayoutMethodModelProp;
      setUserPayoutMethodRecord(record);
    };
    queryData();
  }, [idProp, userPayoutMethodModelProp]);
  React.useEffect(resetStateValues, [userPayoutMethodRecord]);
  const validations = {
    paypal: [],
    interac: [],
    paperCheck: [],
    cashApp: [],
    venmo: [],
    verificationIdType: [],
    verificationId: [],
    country: [],
    defaultPayoutMethod: [],
    customContactEmail: [],
    owner: [],
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
          paypal: paypal ?? null,
          interac: interac ?? null,
          paperCheck: paperCheck ?? null,
          cashApp: cashApp ?? null,
          venmo: venmo ?? null,
          verificationIdType: verificationIdType ?? null,
          verificationId: verificationId ?? null,
          country: country ?? null,
          defaultPayoutMethod: defaultPayoutMethod ?? null,
          customContactEmail: customContactEmail ?? null,
          owner: owner ?? null,
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
            query: updateUserPayoutMethod.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userPayoutMethodRecord.id,
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
      {...getOverrideProps(overrides, "UserPayoutMethodUpdateForm")}
      {...rest}
    >
      <TextField
        label="Paypal"
        isRequired={false}
        isReadOnly={false}
        value={paypal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paypal: value,
              interac,
              paperCheck,
              cashApp,
              venmo,
              verificationIdType,
              verificationId,
              country,
              defaultPayoutMethod,
              customContactEmail,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.paypal ?? value;
          }
          if (errors.paypal?.hasError) {
            runValidationTasks("paypal", value);
          }
          setPaypal(value);
        }}
        onBlur={() => runValidationTasks("paypal", paypal)}
        errorMessage={errors.paypal?.errorMessage}
        hasError={errors.paypal?.hasError}
        {...getOverrideProps(overrides, "paypal")}
      ></TextField>
      <TextField
        label="Interac"
        isRequired={false}
        isReadOnly={false}
        value={interac}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paypal,
              interac: value,
              paperCheck,
              cashApp,
              venmo,
              verificationIdType,
              verificationId,
              country,
              defaultPayoutMethod,
              customContactEmail,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.interac ?? value;
          }
          if (errors.interac?.hasError) {
            runValidationTasks("interac", value);
          }
          setInterac(value);
        }}
        onBlur={() => runValidationTasks("interac", interac)}
        errorMessage={errors.interac?.errorMessage}
        hasError={errors.interac?.hasError}
        {...getOverrideProps(overrides, "interac")}
      ></TextField>
      <TextField
        label="Paper check"
        isRequired={false}
        isReadOnly={false}
        value={paperCheck}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paypal,
              interac,
              paperCheck: value,
              cashApp,
              venmo,
              verificationIdType,
              verificationId,
              country,
              defaultPayoutMethod,
              customContactEmail,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.paperCheck ?? value;
          }
          if (errors.paperCheck?.hasError) {
            runValidationTasks("paperCheck", value);
          }
          setPaperCheck(value);
        }}
        onBlur={() => runValidationTasks("paperCheck", paperCheck)}
        errorMessage={errors.paperCheck?.errorMessage}
        hasError={errors.paperCheck?.hasError}
        {...getOverrideProps(overrides, "paperCheck")}
      ></TextField>
      <TextField
        label="Cash app"
        isRequired={false}
        isReadOnly={false}
        value={cashApp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paypal,
              interac,
              paperCheck,
              cashApp: value,
              venmo,
              verificationIdType,
              verificationId,
              country,
              defaultPayoutMethod,
              customContactEmail,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.cashApp ?? value;
          }
          if (errors.cashApp?.hasError) {
            runValidationTasks("cashApp", value);
          }
          setCashApp(value);
        }}
        onBlur={() => runValidationTasks("cashApp", cashApp)}
        errorMessage={errors.cashApp?.errorMessage}
        hasError={errors.cashApp?.hasError}
        {...getOverrideProps(overrides, "cashApp")}
      ></TextField>
      <TextField
        label="Venmo"
        isRequired={false}
        isReadOnly={false}
        value={venmo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paypal,
              interac,
              paperCheck,
              cashApp,
              venmo: value,
              verificationIdType,
              verificationId,
              country,
              defaultPayoutMethod,
              customContactEmail,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.venmo ?? value;
          }
          if (errors.venmo?.hasError) {
            runValidationTasks("venmo", value);
          }
          setVenmo(value);
        }}
        onBlur={() => runValidationTasks("venmo", venmo)}
        errorMessage={errors.venmo?.errorMessage}
        hasError={errors.venmo?.hasError}
        {...getOverrideProps(overrides, "venmo")}
      ></TextField>
      <TextField
        label="Verification id type"
        isRequired={false}
        isReadOnly={false}
        value={verificationIdType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paypal,
              interac,
              paperCheck,
              cashApp,
              venmo,
              verificationIdType: value,
              verificationId,
              country,
              defaultPayoutMethod,
              customContactEmail,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.verificationIdType ?? value;
          }
          if (errors.verificationIdType?.hasError) {
            runValidationTasks("verificationIdType", value);
          }
          setVerificationIdType(value);
        }}
        onBlur={() =>
          runValidationTasks("verificationIdType", verificationIdType)
        }
        errorMessage={errors.verificationIdType?.errorMessage}
        hasError={errors.verificationIdType?.hasError}
        {...getOverrideProps(overrides, "verificationIdType")}
      ></TextField>
      <TextField
        label="Verification id"
        isRequired={false}
        isReadOnly={false}
        value={verificationId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paypal,
              interac,
              paperCheck,
              cashApp,
              venmo,
              verificationIdType,
              verificationId: value,
              country,
              defaultPayoutMethod,
              customContactEmail,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.verificationId ?? value;
          }
          if (errors.verificationId?.hasError) {
            runValidationTasks("verificationId", value);
          }
          setVerificationId(value);
        }}
        onBlur={() => runValidationTasks("verificationId", verificationId)}
        errorMessage={errors.verificationId?.errorMessage}
        hasError={errors.verificationId?.hasError}
        {...getOverrideProps(overrides, "verificationId")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paypal,
              interac,
              paperCheck,
              cashApp,
              venmo,
              verificationIdType,
              verificationId,
              country: value,
              defaultPayoutMethod,
              customContactEmail,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Default payout method"
        isRequired={false}
        isReadOnly={false}
        value={defaultPayoutMethod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paypal,
              interac,
              paperCheck,
              cashApp,
              venmo,
              verificationIdType,
              verificationId,
              country,
              defaultPayoutMethod: value,
              customContactEmail,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.defaultPayoutMethod ?? value;
          }
          if (errors.defaultPayoutMethod?.hasError) {
            runValidationTasks("defaultPayoutMethod", value);
          }
          setDefaultPayoutMethod(value);
        }}
        onBlur={() =>
          runValidationTasks("defaultPayoutMethod", defaultPayoutMethod)
        }
        errorMessage={errors.defaultPayoutMethod?.errorMessage}
        hasError={errors.defaultPayoutMethod?.hasError}
        {...getOverrideProps(overrides, "defaultPayoutMethod")}
      ></TextField>
      <TextField
        label="Custom contact email"
        isRequired={false}
        isReadOnly={false}
        value={customContactEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paypal,
              interac,
              paperCheck,
              cashApp,
              venmo,
              verificationIdType,
              verificationId,
              country,
              defaultPayoutMethod,
              customContactEmail: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.customContactEmail ?? value;
          }
          if (errors.customContactEmail?.hasError) {
            runValidationTasks("customContactEmail", value);
          }
          setCustomContactEmail(value);
        }}
        onBlur={() =>
          runValidationTasks("customContactEmail", customContactEmail)
        }
        errorMessage={errors.customContactEmail?.errorMessage}
        hasError={errors.customContactEmail?.hasError}
        {...getOverrideProps(overrides, "customContactEmail")}
      ></TextField>
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paypal,
              interac,
              paperCheck,
              cashApp,
              venmo,
              verificationIdType,
              verificationId,
              country,
              defaultPayoutMethod,
              customContactEmail,
              owner: value,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
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
          isDisabled={!(idProp || userPayoutMethodModelProp)}
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
              !(idProp || userPayoutMethodModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
