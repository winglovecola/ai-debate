/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserAccountCreateFormInputValues = {
    ip?: string;
    userData?: string;
    userGroups?: string;
    emailVerified?: boolean;
    emailVerificationCode?: string;
    idVerified?: boolean;
    givenName?: string;
    familyName?: string;
    ageGroup?: string;
    googleLogin?: string;
    socialLoginAuth?: string;
    profileId?: string;
    profileName?: string;
    profilePicUrl?: string;
    profileStreamUrl?: string;
    profileInfo?: string;
    profileLinks?: string;
    updateProfileCount?: number;
    kismetNumberDefault?: string;
    kismetNumberCountMax?: number;
    kismetNumberCount?: number;
    kismetNumberAvaliable?: number;
    membersReferred?: number;
    referrer0?: string;
    referrer1?: string;
    disableAccess?: boolean;
    disableKismetDraw?: boolean;
    loginTime?: number;
    activeTime?: number;
    owner?: string;
};
export declare type UserAccountCreateFormValidationValues = {
    ip?: ValidationFunction<string>;
    userData?: ValidationFunction<string>;
    userGroups?: ValidationFunction<string>;
    emailVerified?: ValidationFunction<boolean>;
    emailVerificationCode?: ValidationFunction<string>;
    idVerified?: ValidationFunction<boolean>;
    givenName?: ValidationFunction<string>;
    familyName?: ValidationFunction<string>;
    ageGroup?: ValidationFunction<string>;
    googleLogin?: ValidationFunction<string>;
    socialLoginAuth?: ValidationFunction<string>;
    profileId?: ValidationFunction<string>;
    profileName?: ValidationFunction<string>;
    profilePicUrl?: ValidationFunction<string>;
    profileStreamUrl?: ValidationFunction<string>;
    profileInfo?: ValidationFunction<string>;
    profileLinks?: ValidationFunction<string>;
    updateProfileCount?: ValidationFunction<number>;
    kismetNumberDefault?: ValidationFunction<string>;
    kismetNumberCountMax?: ValidationFunction<number>;
    kismetNumberCount?: ValidationFunction<number>;
    kismetNumberAvaliable?: ValidationFunction<number>;
    membersReferred?: ValidationFunction<number>;
    referrer0?: ValidationFunction<string>;
    referrer1?: ValidationFunction<string>;
    disableAccess?: ValidationFunction<boolean>;
    disableKismetDraw?: ValidationFunction<boolean>;
    loginTime?: ValidationFunction<number>;
    activeTime?: ValidationFunction<number>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserAccountCreateFormOverridesProps = {
    UserAccountCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ip?: PrimitiveOverrideProps<TextFieldProps>;
    userData?: PrimitiveOverrideProps<TextFieldProps>;
    userGroups?: PrimitiveOverrideProps<TextFieldProps>;
    emailVerified?: PrimitiveOverrideProps<SwitchFieldProps>;
    emailVerificationCode?: PrimitiveOverrideProps<TextFieldProps>;
    idVerified?: PrimitiveOverrideProps<SwitchFieldProps>;
    givenName?: PrimitiveOverrideProps<TextFieldProps>;
    familyName?: PrimitiveOverrideProps<TextFieldProps>;
    ageGroup?: PrimitiveOverrideProps<TextFieldProps>;
    googleLogin?: PrimitiveOverrideProps<TextFieldProps>;
    socialLoginAuth?: PrimitiveOverrideProps<TextFieldProps>;
    profileId?: PrimitiveOverrideProps<TextFieldProps>;
    profileName?: PrimitiveOverrideProps<TextFieldProps>;
    profilePicUrl?: PrimitiveOverrideProps<TextFieldProps>;
    profileStreamUrl?: PrimitiveOverrideProps<TextFieldProps>;
    profileInfo?: PrimitiveOverrideProps<TextFieldProps>;
    profileLinks?: PrimitiveOverrideProps<TextFieldProps>;
    updateProfileCount?: PrimitiveOverrideProps<TextFieldProps>;
    kismetNumberDefault?: PrimitiveOverrideProps<TextFieldProps>;
    kismetNumberCountMax?: PrimitiveOverrideProps<TextFieldProps>;
    kismetNumberCount?: PrimitiveOverrideProps<TextFieldProps>;
    kismetNumberAvaliable?: PrimitiveOverrideProps<TextFieldProps>;
    membersReferred?: PrimitiveOverrideProps<TextFieldProps>;
    referrer0?: PrimitiveOverrideProps<TextFieldProps>;
    referrer1?: PrimitiveOverrideProps<TextFieldProps>;
    disableAccess?: PrimitiveOverrideProps<SwitchFieldProps>;
    disableKismetDraw?: PrimitiveOverrideProps<SwitchFieldProps>;
    loginTime?: PrimitiveOverrideProps<TextFieldProps>;
    activeTime?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserAccountCreateFormProps = React.PropsWithChildren<{
    overrides?: UserAccountCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserAccountCreateFormInputValues) => UserAccountCreateFormInputValues;
    onSuccess?: (fields: UserAccountCreateFormInputValues) => void;
    onError?: (fields: UserAccountCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserAccountCreateFormInputValues) => UserAccountCreateFormInputValues;
    onValidate?: UserAccountCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserAccountCreateForm(props: UserAccountCreateFormProps): React.ReactElement;
