/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { RecentWinners } from "../API.ts";
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
export declare type RecentWinnersUpdateFormInputValues = {
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
export declare type RecentWinnersUpdateFormValidationValues = {
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
export declare type RecentWinnersUpdateFormOverridesProps = {
    RecentWinnersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type RecentWinnersUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecentWinnersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recentWinners?: RecentWinners;
    onSubmit?: (fields: RecentWinnersUpdateFormInputValues) => RecentWinnersUpdateFormInputValues;
    onSuccess?: (fields: RecentWinnersUpdateFormInputValues) => void;
    onError?: (fields: RecentWinnersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecentWinnersUpdateFormInputValues) => RecentWinnersUpdateFormInputValues;
    onValidate?: RecentWinnersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecentWinnersUpdateForm(props: RecentWinnersUpdateFormProps): React.ReactElement;
