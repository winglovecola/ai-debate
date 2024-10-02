/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PrizesType } from "../API.ts";
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
export declare type PrizesTypeUpdateFormInputValues = {
    title?: string;
    prizeType?: string;
    prizeValue?: string;
    info?: string;
    imageUrl?: string;
};
export declare type PrizesTypeUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    prizeType?: ValidationFunction<string>;
    prizeValue?: ValidationFunction<string>;
    info?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrizesTypeUpdateFormOverridesProps = {
    PrizesTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    prizeType?: PrimitiveOverrideProps<TextFieldProps>;
    prizeValue?: PrimitiveOverrideProps<TextFieldProps>;
    info?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrizesTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: PrizesTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    prizesType?: PrizesType;
    onSubmit?: (fields: PrizesTypeUpdateFormInputValues) => PrizesTypeUpdateFormInputValues;
    onSuccess?: (fields: PrizesTypeUpdateFormInputValues) => void;
    onError?: (fields: PrizesTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrizesTypeUpdateFormInputValues) => PrizesTypeUpdateFormInputValues;
    onValidate?: PrizesTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PrizesTypeUpdateForm(props: PrizesTypeUpdateFormProps): React.ReactElement;
