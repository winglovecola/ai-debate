/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EventTags } from "../API.ts";
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
export declare type EventTagsUpdateFormInputValues = {
    name?: string;
    type?: string;
    description?: string;
};
export declare type EventTagsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventTagsUpdateFormOverridesProps = {
    EventTagsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventTagsUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventTagsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    eventTags?: EventTags;
    onSubmit?: (fields: EventTagsUpdateFormInputValues) => EventTagsUpdateFormInputValues;
    onSuccess?: (fields: EventTagsUpdateFormInputValues) => void;
    onError?: (fields: EventTagsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventTagsUpdateFormInputValues) => EventTagsUpdateFormInputValues;
    onValidate?: EventTagsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventTagsUpdateForm(props: EventTagsUpdateFormProps): React.ReactElement;
