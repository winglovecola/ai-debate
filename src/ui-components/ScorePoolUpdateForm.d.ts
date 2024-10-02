/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ScorePool } from "../API.ts";
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
export declare type ScorePoolUpdateFormInputValues = {
    type?: string;
    category?: string;
    title?: string;
    loyaltyBonusPoints?: number;
    loyaltyBonusPointsCumulative?: boolean;
    scoreData?: string;
    status?: string;
};
export declare type ScorePoolUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    loyaltyBonusPoints?: ValidationFunction<number>;
    loyaltyBonusPointsCumulative?: ValidationFunction<boolean>;
    scoreData?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScorePoolUpdateFormOverridesProps = {
    ScorePoolUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    loyaltyBonusPoints?: PrimitiveOverrideProps<TextFieldProps>;
    loyaltyBonusPointsCumulative?: PrimitiveOverrideProps<SwitchFieldProps>;
    scoreData?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScorePoolUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScorePoolUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    scorePool?: ScorePool;
    onSubmit?: (fields: ScorePoolUpdateFormInputValues) => ScorePoolUpdateFormInputValues;
    onSuccess?: (fields: ScorePoolUpdateFormInputValues) => void;
    onError?: (fields: ScorePoolUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScorePoolUpdateFormInputValues) => ScorePoolUpdateFormInputValues;
    onValidate?: ScorePoolUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScorePoolUpdateForm(props: ScorePoolUpdateFormProps): React.ReactElement;
