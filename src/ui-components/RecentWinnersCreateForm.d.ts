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
export declare type RecentWinnersCreateFormInputValues = {
    type?: string;
    title?: string;
    description?: string;
    streamUrl?: string;
    showsID?: string;
    eventsID?: string;
    priorityOrder?: number;
    createdTime?: number;
    createdAt?: string;
};
export declare type RecentWinnersCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    streamUrl?: ValidationFunction<string>;
    showsID?: ValidationFunction<string>;
    eventsID?: ValidationFunction<string>;
    priorityOrder?: ValidationFunction<number>;
    createdTime?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecentWinnersCreateFormOverridesProps = {
    RecentWinnersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    streamUrl?: PrimitiveOverrideProps<TextFieldProps>;
    showsID?: PrimitiveOverrideProps<TextFieldProps>;
    eventsID?: PrimitiveOverrideProps<TextFieldProps>;
    priorityOrder?: PrimitiveOverrideProps<TextFieldProps>;
    createdTime?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecentWinnersCreateFormProps = React.PropsWithChildren<{
    overrides?: RecentWinnersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecentWinnersCreateFormInputValues) => RecentWinnersCreateFormInputValues;
    onSuccess?: (fields: RecentWinnersCreateFormInputValues) => void;
    onError?: (fields: RecentWinnersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecentWinnersCreateFormInputValues) => RecentWinnersCreateFormInputValues;
    onValidate?: RecentWinnersCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecentWinnersCreateForm(props: RecentWinnersCreateFormProps): React.ReactElement;
