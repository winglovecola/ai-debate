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
export declare type KismetNumberSettingCreateFormInputValues = {
    oidCount?: number;
};
export declare type KismetNumberSettingCreateFormValidationValues = {
    oidCount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KismetNumberSettingCreateFormOverridesProps = {
    KismetNumberSettingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    oidCount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KismetNumberSettingCreateFormProps = React.PropsWithChildren<{
    overrides?: KismetNumberSettingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: KismetNumberSettingCreateFormInputValues) => KismetNumberSettingCreateFormInputValues;
    onSuccess?: (fields: KismetNumberSettingCreateFormInputValues) => void;
    onError?: (fields: KismetNumberSettingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KismetNumberSettingCreateFormInputValues) => KismetNumberSettingCreateFormInputValues;
    onValidate?: KismetNumberSettingCreateFormValidationValues;
} & React.CSSProperties>;
export default function KismetNumberSettingCreateForm(props: KismetNumberSettingCreateFormProps): React.ReactElement;
