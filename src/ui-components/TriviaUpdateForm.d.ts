/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Trivia } from "../API.ts";
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
export declare type TriviaUpdateFormInputValues = {
    title?: string;
    description?: string;
    questionTotalCount?: number;
    questionTimeLimit?: number;
    questionSequenceData?: string;
    status?: string;
};
export declare type TriviaUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    questionTotalCount?: ValidationFunction<number>;
    questionTimeLimit?: ValidationFunction<number>;
    questionSequenceData?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TriviaUpdateFormOverridesProps = {
    TriviaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    questionTotalCount?: PrimitiveOverrideProps<TextFieldProps>;
    questionTimeLimit?: PrimitiveOverrideProps<TextFieldProps>;
    questionSequenceData?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TriviaUpdateFormProps = React.PropsWithChildren<{
    overrides?: TriviaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trivia?: Trivia;
    onSubmit?: (fields: TriviaUpdateFormInputValues) => TriviaUpdateFormInputValues;
    onSuccess?: (fields: TriviaUpdateFormInputValues) => void;
    onError?: (fields: TriviaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TriviaUpdateFormInputValues) => TriviaUpdateFormInputValues;
    onValidate?: TriviaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TriviaUpdateForm(props: TriviaUpdateFormProps): React.ReactElement;
