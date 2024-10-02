/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUserAccount } from "../graphql/mutations";
const client = generateClient();
export default function UserAccountCreateForm(props) {
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
    ip: "",
    userData: "",
    userGroups: "",
    emailVerified: false,
    emailVerificationCode: "",
    idVerified: false,
    givenName: "",
    familyName: "",
    ageGroup: "",
    googleLogin: "",
    socialLoginAuth: "",
    profileId: "",
    profileName: "",
    profilePicUrl: "",
    profileStreamUrl: "",
    profileInfo: "",
    profileLinks: "",
    updateProfileCount: "",
    kismetNumberDefault: "",
    kismetNumberCountMax: "",
    kismetNumberCount: "",
    kismetNumberAvaliable: "",
    membersReferred: "",
    referrer0: "",
    referrer1: "",
    disableAccess: false,
    disableKismetDraw: false,
    loginTime: "",
    activeTime: "",
    owner: "",
  };
  const [ip, setIp] = React.useState(initialValues.ip);
  const [userData, setUserData] = React.useState(initialValues.userData);
  const [userGroups, setUserGroups] = React.useState(initialValues.userGroups);
  const [emailVerified, setEmailVerified] = React.useState(
    initialValues.emailVerified
  );
  const [emailVerificationCode, setEmailVerificationCode] = React.useState(
    initialValues.emailVerificationCode
  );
  const [idVerified, setIdVerified] = React.useState(initialValues.idVerified);
  const [givenName, setGivenName] = React.useState(initialValues.givenName);
  const [familyName, setFamilyName] = React.useState(initialValues.familyName);
  const [ageGroup, setAgeGroup] = React.useState(initialValues.ageGroup);
  const [googleLogin, setGoogleLogin] = React.useState(
    initialValues.googleLogin
  );
  const [socialLoginAuth, setSocialLoginAuth] = React.useState(
    initialValues.socialLoginAuth
  );
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
  const [profileLinks, setProfileLinks] = React.useState(
    initialValues.profileLinks
  );
  const [updateProfileCount, setUpdateProfileCount] = React.useState(
    initialValues.updateProfileCount
  );
  const [kismetNumberDefault, setKismetNumberDefault] = React.useState(
    initialValues.kismetNumberDefault
  );
  const [kismetNumberCountMax, setKismetNumberCountMax] = React.useState(
    initialValues.kismetNumberCountMax
  );
  const [kismetNumberCount, setKismetNumberCount] = React.useState(
    initialValues.kismetNumberCount
  );
  const [kismetNumberAvaliable, setKismetNumberAvaliable] = React.useState(
    initialValues.kismetNumberAvaliable
  );
  const [membersReferred, setMembersReferred] = React.useState(
    initialValues.membersReferred
  );
  const [referrer0, setReferrer0] = React.useState(initialValues.referrer0);
  const [referrer1, setReferrer1] = React.useState(initialValues.referrer1);
  const [disableAccess, setDisableAccess] = React.useState(
    initialValues.disableAccess
  );
  const [disableKismetDraw, setDisableKismetDraw] = React.useState(
    initialValues.disableKismetDraw
  );
  const [loginTime, setLoginTime] = React.useState(initialValues.loginTime);
  const [activeTime, setActiveTime] = React.useState(initialValues.activeTime);
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIp(initialValues.ip);
    setUserData(initialValues.userData);
    setUserGroups(initialValues.userGroups);
    setEmailVerified(initialValues.emailVerified);
    setEmailVerificationCode(initialValues.emailVerificationCode);
    setIdVerified(initialValues.idVerified);
    setGivenName(initialValues.givenName);
    setFamilyName(initialValues.familyName);
    setAgeGroup(initialValues.ageGroup);
    setGoogleLogin(initialValues.googleLogin);
    setSocialLoginAuth(initialValues.socialLoginAuth);
    setProfileId(initialValues.profileId);
    setProfileName(initialValues.profileName);
    setProfilePicUrl(initialValues.profilePicUrl);
    setProfileStreamUrl(initialValues.profileStreamUrl);
    setProfileInfo(initialValues.profileInfo);
    setProfileLinks(initialValues.profileLinks);
    setUpdateProfileCount(initialValues.updateProfileCount);
    setKismetNumberDefault(initialValues.kismetNumberDefault);
    setKismetNumberCountMax(initialValues.kismetNumberCountMax);
    setKismetNumberCount(initialValues.kismetNumberCount);
    setKismetNumberAvaliable(initialValues.kismetNumberAvaliable);
    setMembersReferred(initialValues.membersReferred);
    setReferrer0(initialValues.referrer0);
    setReferrer1(initialValues.referrer1);
    setDisableAccess(initialValues.disableAccess);
    setDisableKismetDraw(initialValues.disableKismetDraw);
    setLoginTime(initialValues.loginTime);
    setActiveTime(initialValues.activeTime);
    setOwner(initialValues.owner);
    setErrors({});
  };
  const validations = {
    ip: [],
    userData: [{ type: "Required" }],
    userGroups: [{ type: "Required" }],
    emailVerified: [],
    emailVerificationCode: [],
    idVerified: [],
    givenName: [{ type: "Required" }],
    familyName: [],
    ageGroup: [],
    googleLogin: [],
    socialLoginAuth: [],
    profileId: [],
    profileName: [],
    profilePicUrl: [],
    profileStreamUrl: [],
    profileInfo: [],
    profileLinks: [],
    updateProfileCount: [],
    kismetNumberDefault: [],
    kismetNumberCountMax: [{ type: "Required" }],
    kismetNumberCount: [{ type: "Required" }],
    kismetNumberAvaliable: [{ type: "Required" }],
    membersReferred: [{ type: "Required" }],
    referrer0: [],
    referrer1: [],
    disableAccess: [],
    disableKismetDraw: [],
    loginTime: [],
    activeTime: [],
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
          ip,
          userData,
          userGroups,
          emailVerified,
          emailVerificationCode,
          idVerified,
          givenName,
          familyName,
          ageGroup,
          googleLogin,
          socialLoginAuth,
          profileId,
          profileName,
          profilePicUrl,
          profileStreamUrl,
          profileInfo,
          profileLinks,
          updateProfileCount,
          kismetNumberDefault,
          kismetNumberCountMax,
          kismetNumberCount,
          kismetNumberAvaliable,
          membersReferred,
          referrer0,
          referrer1,
          disableAccess,
          disableKismetDraw,
          loginTime,
          activeTime,
          owner,
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
            query: createUserAccount.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "UserAccountCreateForm")}
      {...rest}
    >
      <TextField
        label="Ip"
        isRequired={false}
        isReadOnly={false}
        value={ip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip: value,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.ip ?? value;
          }
          if (errors.ip?.hasError) {
            runValidationTasks("ip", value);
          }
          setIp(value);
        }}
        onBlur={() => runValidationTasks("ip", ip)}
        errorMessage={errors.ip?.errorMessage}
        hasError={errors.ip?.hasError}
        {...getOverrideProps(overrides, "ip")}
      ></TextField>
      <TextField
        label="User data"
        isRequired={true}
        isReadOnly={false}
        value={userData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData: value,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.userData ?? value;
          }
          if (errors.userData?.hasError) {
            runValidationTasks("userData", value);
          }
          setUserData(value);
        }}
        onBlur={() => runValidationTasks("userData", userData)}
        errorMessage={errors.userData?.errorMessage}
        hasError={errors.userData?.hasError}
        {...getOverrideProps(overrides, "userData")}
      ></TextField>
      <TextField
        label="User groups"
        isRequired={true}
        isReadOnly={false}
        value={userGroups}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups: value,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
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
      <SwitchField
        label="Email verified"
        defaultChecked={false}
        isDisabled={false}
        isChecked={emailVerified}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified: value,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.emailVerified ?? value;
          }
          if (errors.emailVerified?.hasError) {
            runValidationTasks("emailVerified", value);
          }
          setEmailVerified(value);
        }}
        onBlur={() => runValidationTasks("emailVerified", emailVerified)}
        errorMessage={errors.emailVerified?.errorMessage}
        hasError={errors.emailVerified?.hasError}
        {...getOverrideProps(overrides, "emailVerified")}
      ></SwitchField>
      <TextField
        label="Email verification code"
        isRequired={false}
        isReadOnly={false}
        value={emailVerificationCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode: value,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.emailVerificationCode ?? value;
          }
          if (errors.emailVerificationCode?.hasError) {
            runValidationTasks("emailVerificationCode", value);
          }
          setEmailVerificationCode(value);
        }}
        onBlur={() =>
          runValidationTasks("emailVerificationCode", emailVerificationCode)
        }
        errorMessage={errors.emailVerificationCode?.errorMessage}
        hasError={errors.emailVerificationCode?.hasError}
        {...getOverrideProps(overrides, "emailVerificationCode")}
      ></TextField>
      <SwitchField
        label="Id verified"
        defaultChecked={false}
        isDisabled={false}
        isChecked={idVerified}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified: value,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.idVerified ?? value;
          }
          if (errors.idVerified?.hasError) {
            runValidationTasks("idVerified", value);
          }
          setIdVerified(value);
        }}
        onBlur={() => runValidationTasks("idVerified", idVerified)}
        errorMessage={errors.idVerified?.errorMessage}
        hasError={errors.idVerified?.hasError}
        {...getOverrideProps(overrides, "idVerified")}
      ></SwitchField>
      <TextField
        label="Given name"
        isRequired={true}
        isReadOnly={false}
        value={givenName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName: value,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.givenName ?? value;
          }
          if (errors.givenName?.hasError) {
            runValidationTasks("givenName", value);
          }
          setGivenName(value);
        }}
        onBlur={() => runValidationTasks("givenName", givenName)}
        errorMessage={errors.givenName?.errorMessage}
        hasError={errors.givenName?.hasError}
        {...getOverrideProps(overrides, "givenName")}
      ></TextField>
      <TextField
        label="Family name"
        isRequired={false}
        isReadOnly={false}
        value={familyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName: value,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.familyName ?? value;
          }
          if (errors.familyName?.hasError) {
            runValidationTasks("familyName", value);
          }
          setFamilyName(value);
        }}
        onBlur={() => runValidationTasks("familyName", familyName)}
        errorMessage={errors.familyName?.errorMessage}
        hasError={errors.familyName?.hasError}
        {...getOverrideProps(overrides, "familyName")}
      ></TextField>
      <TextField
        label="Age group"
        isRequired={false}
        isReadOnly={false}
        value={ageGroup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup: value,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.ageGroup ?? value;
          }
          if (errors.ageGroup?.hasError) {
            runValidationTasks("ageGroup", value);
          }
          setAgeGroup(value);
        }}
        onBlur={() => runValidationTasks("ageGroup", ageGroup)}
        errorMessage={errors.ageGroup?.errorMessage}
        hasError={errors.ageGroup?.hasError}
        {...getOverrideProps(overrides, "ageGroup")}
      ></TextField>
      <TextField
        label="Google login"
        isRequired={false}
        isReadOnly={false}
        value={googleLogin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin: value,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.googleLogin ?? value;
          }
          if (errors.googleLogin?.hasError) {
            runValidationTasks("googleLogin", value);
          }
          setGoogleLogin(value);
        }}
        onBlur={() => runValidationTasks("googleLogin", googleLogin)}
        errorMessage={errors.googleLogin?.errorMessage}
        hasError={errors.googleLogin?.hasError}
        {...getOverrideProps(overrides, "googleLogin")}
      ></TextField>
      <TextField
        label="Social login auth"
        isRequired={false}
        isReadOnly={false}
        value={socialLoginAuth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth: value,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.socialLoginAuth ?? value;
          }
          if (errors.socialLoginAuth?.hasError) {
            runValidationTasks("socialLoginAuth", value);
          }
          setSocialLoginAuth(value);
        }}
        onBlur={() => runValidationTasks("socialLoginAuth", socialLoginAuth)}
        errorMessage={errors.socialLoginAuth?.errorMessage}
        hasError={errors.socialLoginAuth?.hasError}
        {...getOverrideProps(overrides, "socialLoginAuth")}
      ></TextField>
      <TextField
        label="Profile id"
        isRequired={false}
        isReadOnly={false}
        value={profileId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId: value,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
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
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName: value,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
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
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl: value,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
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
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl: value,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
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
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo: value,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
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
        label="Profile links"
        isRequired={false}
        isReadOnly={false}
        value={profileLinks}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks: value,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
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
        label="Update profile count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={updateProfileCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount: value,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.updateProfileCount ?? value;
          }
          if (errors.updateProfileCount?.hasError) {
            runValidationTasks("updateProfileCount", value);
          }
          setUpdateProfileCount(value);
        }}
        onBlur={() =>
          runValidationTasks("updateProfileCount", updateProfileCount)
        }
        errorMessage={errors.updateProfileCount?.errorMessage}
        hasError={errors.updateProfileCount?.hasError}
        {...getOverrideProps(overrides, "updateProfileCount")}
      ></TextField>
      <TextField
        label="Kismet number default"
        isRequired={false}
        isReadOnly={false}
        value={kismetNumberDefault}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault: value,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.kismetNumberDefault ?? value;
          }
          if (errors.kismetNumberDefault?.hasError) {
            runValidationTasks("kismetNumberDefault", value);
          }
          setKismetNumberDefault(value);
        }}
        onBlur={() =>
          runValidationTasks("kismetNumberDefault", kismetNumberDefault)
        }
        errorMessage={errors.kismetNumberDefault?.errorMessage}
        hasError={errors.kismetNumberDefault?.hasError}
        {...getOverrideProps(overrides, "kismetNumberDefault")}
      ></TextField>
      <TextField
        label="Kismet number count max"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={kismetNumberCountMax}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax: value,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.kismetNumberCountMax ?? value;
          }
          if (errors.kismetNumberCountMax?.hasError) {
            runValidationTasks("kismetNumberCountMax", value);
          }
          setKismetNumberCountMax(value);
        }}
        onBlur={() =>
          runValidationTasks("kismetNumberCountMax", kismetNumberCountMax)
        }
        errorMessage={errors.kismetNumberCountMax?.errorMessage}
        hasError={errors.kismetNumberCountMax?.hasError}
        {...getOverrideProps(overrides, "kismetNumberCountMax")}
      ></TextField>
      <TextField
        label="Kismet number count"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={kismetNumberCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount: value,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.kismetNumberCount ?? value;
          }
          if (errors.kismetNumberCount?.hasError) {
            runValidationTasks("kismetNumberCount", value);
          }
          setKismetNumberCount(value);
        }}
        onBlur={() =>
          runValidationTasks("kismetNumberCount", kismetNumberCount)
        }
        errorMessage={errors.kismetNumberCount?.errorMessage}
        hasError={errors.kismetNumberCount?.hasError}
        {...getOverrideProps(overrides, "kismetNumberCount")}
      ></TextField>
      <TextField
        label="Kismet number avaliable"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={kismetNumberAvaliable}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable: value,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.kismetNumberAvaliable ?? value;
          }
          if (errors.kismetNumberAvaliable?.hasError) {
            runValidationTasks("kismetNumberAvaliable", value);
          }
          setKismetNumberAvaliable(value);
        }}
        onBlur={() =>
          runValidationTasks("kismetNumberAvaliable", kismetNumberAvaliable)
        }
        errorMessage={errors.kismetNumberAvaliable?.errorMessage}
        hasError={errors.kismetNumberAvaliable?.hasError}
        {...getOverrideProps(overrides, "kismetNumberAvaliable")}
      ></TextField>
      <TextField
        label="Members referred"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={membersReferred}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred: value,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.membersReferred ?? value;
          }
          if (errors.membersReferred?.hasError) {
            runValidationTasks("membersReferred", value);
          }
          setMembersReferred(value);
        }}
        onBlur={() => runValidationTasks("membersReferred", membersReferred)}
        errorMessage={errors.membersReferred?.errorMessage}
        hasError={errors.membersReferred?.hasError}
        {...getOverrideProps(overrides, "membersReferred")}
      ></TextField>
      <TextField
        label="Referrer0"
        isRequired={false}
        isReadOnly={false}
        value={referrer0}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0: value,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.referrer0 ?? value;
          }
          if (errors.referrer0?.hasError) {
            runValidationTasks("referrer0", value);
          }
          setReferrer0(value);
        }}
        onBlur={() => runValidationTasks("referrer0", referrer0)}
        errorMessage={errors.referrer0?.errorMessage}
        hasError={errors.referrer0?.hasError}
        {...getOverrideProps(overrides, "referrer0")}
      ></TextField>
      <TextField
        label="Referrer1"
        isRequired={false}
        isReadOnly={false}
        value={referrer1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1: value,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.referrer1 ?? value;
          }
          if (errors.referrer1?.hasError) {
            runValidationTasks("referrer1", value);
          }
          setReferrer1(value);
        }}
        onBlur={() => runValidationTasks("referrer1", referrer1)}
        errorMessage={errors.referrer1?.errorMessage}
        hasError={errors.referrer1?.hasError}
        {...getOverrideProps(overrides, "referrer1")}
      ></TextField>
      <SwitchField
        label="Disable access"
        defaultChecked={false}
        isDisabled={false}
        isChecked={disableAccess}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess: value,
              disableKismetDraw,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.disableAccess ?? value;
          }
          if (errors.disableAccess?.hasError) {
            runValidationTasks("disableAccess", value);
          }
          setDisableAccess(value);
        }}
        onBlur={() => runValidationTasks("disableAccess", disableAccess)}
        errorMessage={errors.disableAccess?.errorMessage}
        hasError={errors.disableAccess?.hasError}
        {...getOverrideProps(overrides, "disableAccess")}
      ></SwitchField>
      <SwitchField
        label="Disable kismet draw"
        defaultChecked={false}
        isDisabled={false}
        isChecked={disableKismetDraw}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw: value,
              loginTime,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.disableKismetDraw ?? value;
          }
          if (errors.disableKismetDraw?.hasError) {
            runValidationTasks("disableKismetDraw", value);
          }
          setDisableKismetDraw(value);
        }}
        onBlur={() =>
          runValidationTasks("disableKismetDraw", disableKismetDraw)
        }
        errorMessage={errors.disableKismetDraw?.errorMessage}
        hasError={errors.disableKismetDraw?.hasError}
        {...getOverrideProps(overrides, "disableKismetDraw")}
      ></SwitchField>
      <TextField
        label="Login time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={loginTime && convertToLocal(convertTimeStampToDate(loginTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime: value,
              activeTime,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.loginTime ?? value;
          }
          if (errors.loginTime?.hasError) {
            runValidationTasks("loginTime", value);
          }
          setLoginTime(value);
        }}
        onBlur={() => runValidationTasks("loginTime", loginTime)}
        errorMessage={errors.loginTime?.errorMessage}
        hasError={errors.loginTime?.hasError}
        {...getOverrideProps(overrides, "loginTime")}
      ></TextField>
      <TextField
        label="Active time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={activeTime && convertToLocal(convertTimeStampToDate(activeTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.activeTime ?? value;
          }
          if (errors.activeTime?.hasError) {
            runValidationTasks("activeTime", value);
          }
          setActiveTime(value);
        }}
        onBlur={() => runValidationTasks("activeTime", activeTime)}
        errorMessage={errors.activeTime?.errorMessage}
        hasError={errors.activeTime?.hasError}
        {...getOverrideProps(overrides, "activeTime")}
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
              ip,
              userData,
              userGroups,
              emailVerified,
              emailVerificationCode,
              idVerified,
              givenName,
              familyName,
              ageGroup,
              googleLogin,
              socialLoginAuth,
              profileId,
              profileName,
              profilePicUrl,
              profileStreamUrl,
              profileInfo,
              profileLinks,
              updateProfileCount,
              kismetNumberDefault,
              kismetNumberCountMax,
              kismetNumberCount,
              kismetNumberAvaliable,
              membersReferred,
              referrer0,
              referrer1,
              disableAccess,
              disableKismetDraw,
              loginTime,
              activeTime,
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
