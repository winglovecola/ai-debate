/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ScorePoolCreateFormInputValues = {
    type?: string;
    category?: string;
    title?: string;
    loyaltyBonusPoints?: number;
    loyaltyBonusPointsCumulative?: boolean;
    scoreData?: string;
    status?: string;
};
export declare type ScorePoolCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    loyaltyBonusPoints?: ValidationFunction<number>;
    loyaltyBonusPointsCumulative?: ValidationFunction<boolean>;
    scoreData?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScorePoolCreateFormOverridesProps = {
    ScorePoolCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    loyaltyBonusPoints?: PrimitiveOverrideProps<TextFieldProps>;
    loyaltyBonusPointsCumulative?: PrimitiveOverrideProps<SwitchFieldProps>;
    scoreData?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScorePoolCreateFormProps = React.PropsWithChildren<{
    overrides?: ScorePoolCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScorePoolCreateFormInputValues) => ScorePoolCreateFormInputValues;
    onSuccess?: (fields: ScorePoolCreateFormInputValues) => void;
    onError?: (fields: ScorePoolCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScorePoolCreateFormInputValues) => ScorePoolCreateFormInputValues;
    onValidate?: ScorePoolCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScorePoolCreateForm(props: ScorePoolCreateFormProps): React.ReactElement;
