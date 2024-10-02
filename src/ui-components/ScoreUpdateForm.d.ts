/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Score } from "../API.ts";
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
export declare type ScoreUpdateFormInputValues = {
    type?: string;
    category?: string;
    score?: number;
};
export declare type ScoreUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    score?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScoreUpdateFormOverridesProps = {
    ScoreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    score?: Score;
    onSubmit?: (fields: ScoreUpdateFormInputValues) => ScoreUpdateFormInputValues;
    onSuccess?: (fields: ScoreUpdateFormInputValues) => void;
    onError?: (fields: ScoreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScoreUpdateFormInputValues) => ScoreUpdateFormInputValues;
    onValidate?: ScoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScoreUpdateForm(props: ScoreUpdateFormProps): React.ReactElement;
