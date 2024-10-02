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
export declare type EventTagsCreateFormInputValues = {
    name?: string;
    type?: string;
    description?: string;
};
export declare type EventTagsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventTagsCreateFormOverridesProps = {
    EventTagsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventTagsCreateFormProps = React.PropsWithChildren<{
    overrides?: EventTagsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EventTagsCreateFormInputValues) => EventTagsCreateFormInputValues;
    onSuccess?: (fields: EventTagsCreateFormInputValues) => void;
    onError?: (fields: EventTagsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventTagsCreateFormInputValues) => EventTagsCreateFormInputValues;
    onValidate?: EventTagsCreateFormValidationValues;
} & React.CSSProperties>;
export default function EventTagsCreateForm(props: EventTagsCreateFormProps): React.ReactElement;
