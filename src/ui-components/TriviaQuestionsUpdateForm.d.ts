/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TriviaQuestions } from "../API.ts";
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
export declare type TriviaQuestionsUpdateFormInputValues = {
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
export declare type TriviaQuestionsUpdateFormValidationValues = {
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
export declare type TriviaQuestionsUpdateFormOverridesProps = {
    TriviaQuestionsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type TriviaQuestionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TriviaQuestionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    triviaQuestions?: TriviaQuestions;
    onSubmit?: (fields: TriviaQuestionsUpdateFormInputValues) => TriviaQuestionsUpdateFormInputValues;
    onSuccess?: (fields: TriviaQuestionsUpdateFormInputValues) => void;
    onError?: (fields: TriviaQuestionsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TriviaQuestionsUpdateFormInputValues) => TriviaQuestionsUpdateFormInputValues;
    onValidate?: TriviaQuestionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TriviaQuestionsUpdateForm(props: TriviaQuestionsUpdateFormProps): React.ReactElement;
