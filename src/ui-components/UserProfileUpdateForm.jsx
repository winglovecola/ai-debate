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
import { getUserProfile } from "../graphql/queries";
import { updateUserProfile } from "../graphql/mutations";
const client = generateClient();
export default function UserProfileUpdateForm(props) {
  const {
    id: idProp,
    userProfile: userProfileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    profileId: "",
    profileName: "",
    profilePicUrl: "",
    profileStreamUrl: "",
    profileInfo: "",
    profileDescription: "",
    profileLinks: "",
    userGroups: "",
  };
  const [profileId, setProfileId] = React.useState(initialValues.profileId);
  const [profileName, setProfileName] = React.useState(
    initialValues.profileName
  );
  const [profilePicUrl, setProfilePicUrl] = React.useState(
    initialValues.profilePicUrl
  );
  const [profileStreamUrl, setProfileStreamUrl] = React.useState(
    initialValues.profileStreamUrl
  );
  const [profileInfo, setProfileInfo] = React.useState(
    initialValues.profileInfo
  );
  const [profileDescription, setProfileDescription] = React.useState(
    initialValues.profileDescription
  );
  const [profileLinks, setProfileLinks] = React.useState(
    initialValues.profileLinks
  );
  const [userGroups, setUserGroups] = React.useState(initialValues.userGroups);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userProfileRecord
      ? { ...initialValues, ...userProfileRecord }
      : initialValues;
    setProfileId(cleanValues.profileId);
    setProfileName(cleanValues.profileName);
    setProfilePicUrl(cleanValues.profilePicUrl);
    setProfileStreamUrl(cleanValues.profileStreamUrl);
    setProfileInfo(cleanValues.profileInfo);
    setProfileDescription(cleanValues.profileDescription);
    setProfileLinks(cleanValues.profileLinks);
    setUserGroups(cleanValues.userGroups);
    setErrors({});
  };
  const [userProfileRecord, setUserProfileRecord] =
    React.useState(userProfileModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserProfile.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserProfile
        : userProfileModelProp;
      setUserProfileRecord(record);
    };
    queryData();
  }, [idProp, userProfileModelProp]);
  React.useEffect(resetStateValues, [userProfileRecord]);
  const validations = {
    profileId: [],
    profileName: [],
    profilePicUrl: [],
    profileStreamUrl: [],
    profileInfo: [],
    profileDescription: [],
    profileLinks: [],
    userGroups: [],
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
          profileId: profileId ?? null,
          profileName: profileName ?? null,
          profilePicUrl: profilePicUrl ?? null,
          profileStreamUrl: profileStreamUrl ?? null,
          profileInfo: profileInfo ?? null,
          profileDescription: profileDescription ?? null,
          profileLinks: profileLinks ?? null,
          userGroups: userGroups ?? null,
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
            query: updateUserProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userProfileRecord.id,
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
      {...getOverrideProps(overrides, "UserProfileUpdateForm")}
      {...rest}
    >
      <TextField
        label="Profile id"
        isRequired={false}
        isReadOnly={false}
        value={profileId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profileId: value,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileDescription,
              profileLinks,
              userGroups,
            };
            const result = onChange(modelFields);
            value = result?.profileId ?? value;
          }
          if (errors.profileId?.hasError) {
            runValidationTasks("profileId", value);
          }
          setProfileId(value);
        }}
        onBlur={() => runValidationTasks("profileId", profileId)}
        errorMessage={errors.profileId?.errorMessage}
        hasError={errors.profileId?.hasError}
        {...getOverrideProps(overrides, "profileId")}
      ></TextField>
      <TextField
        label="Profile name"
        isRequired={false}
        isReadOnly={false}
        value={profileName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profileId,
              profileName: value,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileDescription,
              profileLinks,
              userGroups,
            };
            const result = onChange(modelFields);
            value = result?.profileName ?? value;
          }
          if (errors.profileName?.hasError) {
            runValidationTasks("profileName", value);
          }
          setProfileName(value);
        }}
        onBlur={() => runValidationTasks("profileName", profileName)}
        errorMessage={errors.profileName?.errorMessage}
        hasError={errors.profileName?.hasError}
        {...getOverrideProps(overrides, "profileName")}
      ></TextField>
      <TextField
        label="Profile pic url"
        isRequired={false}
        isReadOnly={false}
        value={profilePicUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profileId,
              profileName,
              profilePicUrl: value,
              profileStreamUrl,
              profileInfo,
              profileDescription,
              profileLinks,
              userGroups,
            };
            const result = onChange(modelFields);
            value = result?.profilePicUrl ?? value;
          }
          if (errors.profilePicUrl?.hasError) {
            runValidationTasks("profilePicUrl", value);
          }
          setProfilePicUrl(value);
        }}
        onBlur={() => runValidationTasks("profilePicUrl", profilePicUrl)}
        errorMessage={errors.profilePicUrl?.errorMessage}
        hasError={errors.profilePicUrl?.hasError}
        {...getOverrideProps(overrides, "profilePicUrl")}
      ></TextField>
      <TextField
        label="Profile stream url"
        isRequired={false}
        isReadOnly={false}
        value={profileStreamUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl: value,
              profileInfo,
              profileDescription,
              profileLinks,
              userGroups,
            };
            const result = onChange(modelFields);
            value = result?.profileStreamUrl ?? value;
          }
          if (errors.profileStreamUrl?.hasError) {
            runValidationTasks("profileStreamUrl", value);
          }
          setProfileStreamUrl(value);
        }}
        onBlur={() => runValidationTasks("profileStreamUrl", profileStreamUrl)}
        errorMessage={errors.profileStreamUrl?.errorMessage}
        hasError={errors.profileStreamUrl?.hasError}
        {...getOverrideProps(overrides, "profileStreamUrl")}
      ></TextField>
      <TextField
        label="Profile info"
        isRequired={false}
        isReadOnly={false}
        value={profileInfo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo: value,
              profileDescription,
              profileLinks,
              userGroups,
            };
            const result = onChange(modelFields);
            value = result?.profileInfo ?? value;
          }
          if (errors.profileInfo?.hasError) {
            runValidationTasks("profileInfo", value);
          }
          setProfileInfo(value);
        }}
        onBlur={() => runValidationTasks("profileInfo", profileInfo)}
        errorMessage={errors.profileInfo?.errorMessage}
        hasError={errors.profileInfo?.hasError}
        {...getOverrideProps(overrides, "profileInfo")}
      ></TextField>
      <TextField
        label="Profile description"
        isRequired={false}
        isReadOnly={false}
        value={profileDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileDescription: value,
              profileLinks,
              userGroups,
            };
            const result = onChange(modelFields);
            value = result?.profileDescription ?? value;
          }
          if (errors.profileDescription?.hasError) {
            runValidationTasks("profileDescription", value);
          }
          setProfileDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("profileDescription", profileDescription)
        }
        errorMessage={errors.profileDescription?.errorMessage}
        hasError={errors.profileDescription?.hasError}
        {...getOverrideProps(overrides, "profileDescription")}
      ></TextField>
      <TextField
        label="Profile links"
        isRequired={false}
        isReadOnly={false}
        value={profileLinks}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileDescription,
              profileLinks: value,
              userGroups,
            };
            const result = onChange(modelFields);
            value = result?.profileLinks ?? value;
          }
          if (errors.profileLinks?.hasError) {
            runValidationTasks("profileLinks", value);
          }
          setProfileLinks(value);
        }}
        onBlur={() => runValidationTasks("profileLinks", profileLinks)}
        errorMessage={errors.profileLinks?.errorMessage}
        hasError={errors.profileLinks?.hasError}
        {...getOverrideProps(overrides, "profileLinks")}
      ></TextField>
      <TextField
        label="User groups"
        isRequired={false}
        isReadOnly={false}
        value={userGroups}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileDescription,
              profileLinks,
              userGroups: value,
            };
            const result = onChange(modelFields);
            value = result?.userGroups ?? value;
          }
          if (errors.userGroups?.hasError) {
            runValidationTasks("userGroups", value);
          }
          setUserGroups(value);
        }}
        onBlur={() => runValidationTasks("userGroups", userGroups)}
        errorMessage={errors.userGroups?.errorMessage}
        hasError={errors.userGroups?.hasError}
        {...getOverrideProps(overrides, "userGroups")}
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
          isDisabled={!(idProp || userProfileModelProp)}
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
              !(idProp || userProfileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
