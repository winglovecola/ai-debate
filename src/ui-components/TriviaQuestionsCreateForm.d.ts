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
export declare type TriviaQuestionsCreateFormInputValues = {
    category?: string;
    type?: string;
    difficultyLvl?: string;
    question?: string;
    answerData?: string;
    ansChoices?: string;
    ansEncData?: string;
    relatedShowsData?: string;
    status?: string;
};
export declare type TriviaQuestionsCreateFormValidationValues = {
    category?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    difficultyLvl?: ValidationFunction<string>;
    question?: ValidationFunction<string>;
    answerData?: ValidationFunction<string>;
    ansChoices?: ValidationFunction<string>;
    ansEncData?: ValidationFunction<string>;
    relatedShowsData?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TriviaQuestionsCreateFormOverridesProps = {
    TriviaQuestionsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    difficultyLvl?: PrimitiveOverrideProps<TextFieldProps>;
    question?: PrimitiveOverrideProps<TextFieldProps>;
    answerData?: PrimitiveOverrideProps<TextFieldProps>;
    ansChoices?: PrimitiveOverrideProps<TextFieldProps>;
    ansEncData?: PrimitiveOverrideProps<TextFieldProps>;
    relatedShowsData?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TriviaQuestionsCreateFormProps = React.PropsWithChildren<{
    overrides?: TriviaQuestionsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TriviaQuestionsCreateFormInputValues) => TriviaQuestionsCreateFormInputValues;
    onSuccess?: (fields: TriviaQuestionsCreateFormInputValues) => void;
    onError?: (fields: TriviaQuestionsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TriviaQuestionsCreateFormInputValues) => TriviaQuestionsCreateFormInputValues;
    onValidate?: TriviaQuestionsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TriviaQuestionsCreateForm(props: TriviaQuestionsCreateFormProps): React.ReactElement;
