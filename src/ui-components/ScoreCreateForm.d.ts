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
export declare type ScoreCreateFormInputValues = {
    type?: string;
    category?: string;
    score?: number;
};
export declare type ScoreCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    score?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScoreCreateFormOverridesProps = {
    ScoreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScoreCreateFormProps = React.PropsWithChildren<{
    overrides?: ScoreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScoreCreateFormInputValues) => ScoreCreateFormInputValues;
    onSuccess?: (fields: ScoreCreateFormInputValues) => void;
    onError?: (fields: ScoreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScoreCreateFormInputValues) => ScoreCreateFormInputValues;
    onValidate?: ScoreCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScoreCreateForm(props: ScoreCreateFormProps): React.ReactElement;
