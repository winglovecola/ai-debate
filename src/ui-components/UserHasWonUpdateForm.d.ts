/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserHasWon } from "../API.ts";
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
export declare type UserHasWonUpdateFormInputValues = {
    type?: string;
    userId?: string;
};
export declare type UserHasWonUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserHasWonUpdateFormOverridesProps = {
    UserHasWonUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserHasWonUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserHasWonUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userHasWon?: UserHasWon;
    onSubmit?: (fields: UserHasWonUpdateFormInputValues) => UserHasWonUpdateFormInputValues;
    onSuccess?: (fields: UserHasWonUpdateFormInputValues) => void;
    onError?: (fields: UserHasWonUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserHasWonUpdateFormInputValues) => UserHasWonUpdateFormInputValues;
    onValidate?: UserHasWonUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserHasWonUpdateForm(props: UserHasWonUpdateFormProps): React.ReactElement;
