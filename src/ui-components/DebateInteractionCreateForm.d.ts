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
export declare type DebateInteractionCreateFormInputValues = {
    username?: string;
    msg?: string;
};
export declare type DebateInteractionCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    msg?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DebateInteractionCreateFormOverridesProps = {
    DebateInteractionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    msg?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DebateInteractionCreateFormProps = React.PropsWithChildren<{
    overrides?: DebateInteractionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DebateInteractionCreateFormInputValues) => DebateInteractionCreateFormInputValues;
    onSuccess?: (fields: DebateInteractionCreateFormInputValues) => void;
    onError?: (fields: DebateInteractionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DebateInteractionCreateFormInputValues) => DebateInteractionCreateFormInputValues;
    onValidate?: DebateInteractionCreateFormValidationValues;
} & React.CSSProperties>;
export default function DebateInteractionCreateForm(props: DebateInteractionCreateFormProps): React.ReactElement;
