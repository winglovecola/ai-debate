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
export declare type UserPointsRecordCreateFormInputValues = {
    trLoyaltyBonus?: number;
    trLoyalityPoints?: number;
    trScore?: number;
    trRanking?: string;
    trRewardPoints?: number;
    trTotalQuestions?: number;
    trCorrectAnswers?: number;
};
export declare type UserPointsRecordCreateFormValidationValues = {
    trLoyaltyBonus?: ValidationFunction<number>;
    trLoyalityPoints?: ValidationFunction<number>;
    trScore?: ValidationFunction<number>;
    trRanking?: ValidationFunction<string>;
    trRewardPoints?: ValidationFunction<number>;
    trTotalQuestions?: ValidationFunction<number>;
    trCorrectAnswers?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserPointsRecordCreateFormOverridesProps = {
    UserPointsRecordCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    trLoyaltyBonus?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyalityPoints?: PrimitiveOverrideProps<TextFieldProps>;
    trScore?: PrimitiveOverrideProps<TextFieldProps>;
    trRanking?: PrimitiveOverrideProps<TextFieldProps>;
    trRewardPoints?: PrimitiveOverrideProps<TextFieldProps>;
    trTotalQuestions?: PrimitiveOverrideProps<TextFieldProps>;
    trCorrectAnswers?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserPointsRecordCreateFormProps = React.PropsWithChildren<{
    overrides?: UserPointsRecordCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserPointsRecordCreateFormInputValues) => UserPointsRecordCreateFormInputValues;
    onSuccess?: (fields: UserPointsRecordCreateFormInputValues) => void;
    onError?: (fields: UserPointsRecordCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserPointsRecordCreateFormInputValues) => UserPointsRecordCreateFormInputValues;
    onValidate?: UserPointsRecordCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserPointsRecordCreateForm(props: UserPointsRecordCreateFormProps): React.ReactElement;
