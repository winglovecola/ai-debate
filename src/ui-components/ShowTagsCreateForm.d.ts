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
export declare type ShowTagsCreateFormInputValues = {
    name?: string;
    type?: string;
    description?: string;
};
export declare type ShowTagsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShowTagsCreateFormOverridesProps = {
    ShowTagsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShowTagsCreateFormProps = React.PropsWithChildren<{
    overrides?: ShowTagsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShowTagsCreateFormInputValues) => ShowTagsCreateFormInputValues;
    onSuccess?: (fields: ShowTagsCreateFormInputValues) => void;
    onError?: (fields: ShowTagsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShowTagsCreateFormInputValues) => ShowTagsCreateFormInputValues;
    onValidate?: ShowTagsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShowTagsCreateForm(props: ShowTagsCreateFormProps): React.ReactElement;
