/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ShowInfo } from "../API.ts";
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
export declare type ShowInfoUpdateFormInputValues = {
    prevShowId?: string;
    prevShowBroadcastTime?: number;
    latestShowId?: string;
    latestShowBroadcastTime?: number;
    nextShowId?: string;
    nextShowBroadcastTime?: number;
    upcomingShowsJsonData?: string;
    upcomingShowsJsonDataUpdateTime?: number;
};
export declare type ShowInfoUpdateFormValidationValues = {
    prevShowId?: ValidationFunction<string>;
    prevShowBroadcastTime?: ValidationFunction<number>;
    latestShowId?: ValidationFunction<string>;
    latestShowBroadcastTime?: ValidationFunction<number>;
    nextShowId?: ValidationFunction<string>;
    nextShowBroadcastTime?: ValidationFunction<number>;
    upcomingShowsJsonData?: ValidationFunction<string>;
    upcomingShowsJsonDataUpdateTime?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShowInfoUpdateFormOverridesProps = {
    ShowInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    prevShowId?: PrimitiveOverrideProps<TextFieldProps>;
    prevShowBroadcastTime?: PrimitiveOverrideProps<TextFieldProps>;
    latestShowId?: PrimitiveOverrideProps<TextFieldProps>;
    latestShowBroadcastTime?: PrimitiveOverrideProps<TextFieldProps>;
    nextShowId?: PrimitiveOverrideProps<TextFieldProps>;
    nextShowBroadcastTime?: PrimitiveOverrideProps<TextFieldProps>;
    upcomingShowsJsonData?: PrimitiveOverrideProps<TextFieldProps>;
    upcomingShowsJsonDataUpdateTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShowInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShowInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    showInfo?: ShowInfo;
    onSubmit?: (fields: ShowInfoUpdateFormInputValues) => ShowInfoUpdateFormInputValues;
    onSuccess?: (fields: ShowInfoUpdateFormInputValues) => void;
    onError?: (fields: ShowInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShowInfoUpdateFormInputValues) => ShowInfoUpdateFormInputValues;
    onValidate?: ShowInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShowInfoUpdateForm(props: ShowInfoUpdateFormProps): React.ReactElement;
