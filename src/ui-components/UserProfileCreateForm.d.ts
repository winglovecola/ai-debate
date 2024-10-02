/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UserProfileCreateFormInputValues = {
    profileId?: string;
    profileName?: string;
    profilePicUrl?: string;
    profileStreamUrl?: string;
    profileInfo?: string;
    profileDescription?: string;
    profileLinks?: string;
    userGroups?: string;
};
export declare type UserProfileCreateFormValidationValues = {
    profileId?: ValidationFunction<string>;
    profileName?: ValidationFunction<string>;
    profilePicUrl?: ValidationFunction<string>;
    profileStreamUrl?: ValidationFunction<string>;
    profileInfo?: ValidationFunction<string>;
    profileDescription?: ValidationFunction<string>;
    profileLinks?: ValidationFunction<string>;
    userGroups?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserProfileCreateFormOverridesProps = {
    UserProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    profileId?: PrimitiveOverrideProps<TextFieldProps>;
    profileName?: PrimitiveOverrideProps<TextFieldProps>;
    profilePicUrl?: PrimitiveOverrideProps<TextFieldProps>;
    profileStreamUrl?: PrimitiveOverrideProps<TextFieldProps>;
    profileInfo?: PrimitiveOverrideProps<TextFieldProps>;
    profileDescription?: PrimitiveOverrideProps<TextFieldProps>;
    profileLinks?: PrimitiveOverrideProps<TextFieldProps>;
    userGroups?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: UserProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserProfileCreateFormInputValues) => UserProfileCreateFormInputValues;
    onSuccess?: (fields: UserProfileCreateFormInputValues) => void;
    onError?: (fields: UserProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserProfileCreateFormInputValues) => UserProfileCreateFormInputValues;
    onValidate?: UserProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserProfileCreateForm(props: UserProfileCreateFormProps): React.ReactElement;
