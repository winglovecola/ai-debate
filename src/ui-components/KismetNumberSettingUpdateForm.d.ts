/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { KismetNumberSetting } from "../API.ts";
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
export declare type KismetNumberSettingUpdateFormInputValues = {
    oidCount?: number;
};
export declare type KismetNumberSettingUpdateFormValidationValues = {
    oidCount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KismetNumberSettingUpdateFormOverridesProps = {
    KismetNumberSettingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    oidCount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KismetNumberSettingUpdateFormProps = React.PropsWithChildren<{
    overrides?: KismetNumberSettingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    kismetNumberSetting?: KismetNumberSetting;
    onSubmit?: (fields: KismetNumberSettingUpdateFormInputValues) => KismetNumberSettingUpdateFormInputValues;
    onSuccess?: (fields: KismetNumberSettingUpdateFormInputValues) => void;
    onError?: (fields: KismetNumberSettingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KismetNumberSettingUpdateFormInputValues) => KismetNumberSettingUpdateFormInputValues;
    onValidate?: KismetNumberSettingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function KismetNumberSettingUpdateForm(props: KismetNumberSettingUpdateFormProps): React.ReactElement;
