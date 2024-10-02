/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserAccess } from "../API.ts";
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
export declare type UserAccessUpdateFormInputValues = {
    adminAccess?: string;
};
export declare type UserAccessUpdateFormValidationValues = {
    adminAccess?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserAccessUpdateFormOverridesProps = {
    UserAccessUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    adminAccess?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserAccessUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserAccessUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userAccess?: UserAccess;
    onSubmit?: (fields: UserAccessUpdateFormInputValues) => UserAccessUpdateFormInputValues;
    onSuccess?: (fields: UserAccessUpdateFormInputValues) => void;
    onError?: (fields: UserAccessUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserAccessUpdateFormInputValues) => UserAccessUpdateFormInputValues;
    onValidate?: UserAccessUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserAccessUpdateForm(props: UserAccessUpdateFormProps): React.ReactElement;
