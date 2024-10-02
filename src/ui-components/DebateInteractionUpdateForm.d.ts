/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { DebateInteraction } from "../API.ts";
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
export declare type DebateInteractionUpdateFormInputValues = {
    username?: string;
    msg?: string;
};
export declare type DebateInteractionUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    msg?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DebateInteractionUpdateFormOverridesProps = {
    DebateInteractionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    msg?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DebateInteractionUpdateFormProps = React.PropsWithChildren<{
    overrides?: DebateInteractionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    debateInteraction?: DebateInteraction;
    onSubmit?: (fields: DebateInteractionUpdateFormInputValues) => DebateInteractionUpdateFormInputValues;
    onSuccess?: (fields: DebateInteractionUpdateFormInputValues) => void;
    onError?: (fields: DebateInteractionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DebateInteractionUpdateFormInputValues) => DebateInteractionUpdateFormInputValues;
    onValidate?: DebateInteractionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DebateInteractionUpdateForm(props: DebateInteractionUpdateFormProps): React.ReactElement;
