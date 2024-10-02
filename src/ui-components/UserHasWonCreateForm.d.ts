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
export declare type UserHasWonCreateFormInputValues = {
    type?: string;
    userId?: string;
};
export declare type UserHasWonCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserHasWonCreateFormOverridesProps = {
    UserHasWonCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserHasWonCreateFormProps = React.PropsWithChildren<{
    overrides?: UserHasWonCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserHasWonCreateFormInputValues) => UserHasWonCreateFormInputValues;
    onSuccess?: (fields: UserHasWonCreateFormInputValues) => void;
    onError?: (fields: UserHasWonCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserHasWonCreateFormInputValues) => UserHasWonCreateFormInputValues;
    onValidate?: UserHasWonCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserHasWonCreateForm(props: UserHasWonCreateFormProps): React.ReactElement;
