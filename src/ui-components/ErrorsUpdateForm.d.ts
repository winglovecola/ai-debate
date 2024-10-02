/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Errors } from "../API.ts";
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
export declare type ErrorsUpdateFormInputValues = {
    errorType?: string;
    title?: string;
    detail?: string;
};
export declare type ErrorsUpdateFormValidationValues = {
    errorType?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    detail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ErrorsUpdateFormOverridesProps = {
    ErrorsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    errorType?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    detail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ErrorsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ErrorsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    errors?: Errors;
    onSubmit?: (fields: ErrorsUpdateFormInputValues) => ErrorsUpdateFormInputValues;
    onSuccess?: (fields: ErrorsUpdateFormInputValues) => void;
    onError?: (fields: ErrorsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ErrorsUpdateFormInputValues) => ErrorsUpdateFormInputValues;
    onValidate?: ErrorsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ErrorsUpdateForm(props: ErrorsUpdateFormProps): React.ReactElement;
