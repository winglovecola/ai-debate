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
export declare type TriviaCreateFormInputValues = {
    title?: string;
    description?: string;
    questionTotalCount?: number;
    questionTimeLimit?: number;
    questionSequenceData?: string;
    status?: string;
};
export declare type TriviaCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    questionTotalCount?: ValidationFunction<number>;
    questionTimeLimit?: ValidationFunction<number>;
    questionSequenceData?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TriviaCreateFormOverridesProps = {
    TriviaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    questionTotalCount?: PrimitiveOverrideProps<TextFieldProps>;
    questionTimeLimit?: PrimitiveOverrideProps<TextFieldProps>;
    questionSequenceData?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TriviaCreateFormProps = React.PropsWithChildren<{
    overrides?: TriviaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TriviaCreateFormInputValues) => TriviaCreateFormInputValues;
    onSuccess?: (fields: TriviaCreateFormInputValues) => void;
    onError?: (fields: TriviaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TriviaCreateFormInputValues) => TriviaCreateFormInputValues;
    onValidate?: TriviaCreateFormValidationValues;
} & React.CSSProperties>;
export default function TriviaCreateForm(props: TriviaCreateFormProps): React.ReactElement;
