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
export declare type AppSettingCreateFormInputValues = {
    homeIntroDescription?: string;
    homeIntroStreamUrl?: string;
    homeWinnerDescription?: string;
    homeWinnerStreamUrl?: string;
};
export declare type AppSettingCreateFormValidationValues = {
    homeIntroDescription?: ValidationFunction<string>;
    homeIntroStreamUrl?: ValidationFunction<string>;
    homeWinnerDescription?: ValidationFunction<string>;
    homeWinnerStreamUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppSettingCreateFormOverridesProps = {
    AppSettingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    homeIntroDescription?: PrimitiveOverrideProps<TextFieldProps>;
    homeIntroStreamUrl?: PrimitiveOverrideProps<TextFieldProps>;
    homeWinnerDescription?: PrimitiveOverrideProps<TextFieldProps>;
    homeWinnerStreamUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppSettingCreateFormProps = React.PropsWithChildren<{
    overrides?: AppSettingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AppSettingCreateFormInputValues) => AppSettingCreateFormInputValues;
    onSuccess?: (fields: AppSettingCreateFormInputValues) => void;
    onError?: (fields: AppSettingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppSettingCreateFormInputValues) => AppSettingCreateFormInputValues;
    onValidate?: AppSettingCreateFormValidationValues;
} & React.CSSProperties>;
export default function AppSettingCreateForm(props: AppSettingCreateFormProps): React.ReactElement;
