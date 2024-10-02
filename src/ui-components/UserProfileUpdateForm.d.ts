/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserProfile } from "../API.ts";
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
export declare type UserProfileUpdateFormInputValues = {
    profileId?: string;
    profileName?: string;
    profilePicUrl?: string;
    profileStreamUrl?: string;
    profileInfo?: string;
    profileDescription?: string;
    profileLinks?: string;
    userGroups?: string;
};
export declare type UserProfileUpdateFormValidationValues = {
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
export declare type UserProfileUpdateFormOverridesProps = {
    UserProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    profileId?: PrimitiveOverrideProps<TextFieldProps>;
    profileName?: PrimitiveOverrideProps<TextFieldProps>;
    profilePicUrl?: PrimitiveOverrideProps<TextFieldProps>;
    profileStreamUrl?: PrimitiveOverrideProps<TextFieldProps>;
    profileInfo?: PrimitiveOverrideProps<TextFieldProps>;
    profileDescription?: PrimitiveOverrideProps<TextFieldProps>;
    profileLinks?: PrimitiveOverrideProps<TextFieldProps>;
    userGroups?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userProfile?: UserProfile;
    onSubmit?: (fields: UserProfileUpdateFormInputValues) => UserProfileUpdateFormInputValues;
    onSuccess?: (fields: UserProfileUpdateFormInputValues) => void;
    onError?: (fields: UserProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserProfileUpdateFormInputValues) => UserProfileUpdateFormInputValues;
    onValidate?: UserProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserProfileUpdateForm(props: UserProfileUpdateFormProps): React.ReactElement;
