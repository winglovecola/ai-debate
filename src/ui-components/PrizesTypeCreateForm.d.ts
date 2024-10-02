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
export declare type PrizesTypeCreateFormInputValues = {
    title?: string;
    prizeType?: string;
    prizeValue?: string;
    info?: string;
    imageUrl?: string;
};
export declare type PrizesTypeCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    prizeType?: ValidationFunction<string>;
    prizeValue?: ValidationFunction<string>;
    info?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrizesTypeCreateFormOverridesProps = {
    PrizesTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    prizeType?: PrimitiveOverrideProps<TextFieldProps>;
    prizeValue?: PrimitiveOverrideProps<TextFieldProps>;
    info?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrizesTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: PrizesTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PrizesTypeCreateFormInputValues) => PrizesTypeCreateFormInputValues;
    onSuccess?: (fields: PrizesTypeCreateFormInputValues) => void;
    onError?: (fields: PrizesTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrizesTypeCreateFormInputValues) => PrizesTypeCreateFormInputValues;
    onValidate?: PrizesTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function PrizesTypeCreateForm(props: PrizesTypeCreateFormProps): React.ReactElement;
