/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EventPrizesType } from "../API.ts";
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
export declare type EventPrizesTypeUpdateFormInputValues = {
    title?: string;
    prizeType?: string;
    prizeValue?: string;
    info?: string;
    imageUrl?: string;
};
export declare type EventPrizesTypeUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    prizeType?: ValidationFunction<string>;
    prizeValue?: ValidationFunction<string>;
    info?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventPrizesTypeUpdateFormOverridesProps = {
    EventPrizesTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    prizeType?: PrimitiveOverrideProps<TextFieldProps>;
    prizeValue?: PrimitiveOverrideProps<TextFieldProps>;
    info?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventPrizesTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventPrizesTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    eventPrizesType?: EventPrizesType;
    onSubmit?: (fields: EventPrizesTypeUpdateFormInputValues) => EventPrizesTypeUpdateFormInputValues;
    onSuccess?: (fields: EventPrizesTypeUpdateFormInputValues) => void;
    onError?: (fields: EventPrizesTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventPrizesTypeUpdateFormInputValues) => EventPrizesTypeUpdateFormInputValues;
    onValidate?: EventPrizesTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventPrizesTypeUpdateForm(props: EventPrizesTypeUpdateFormProps): React.ReactElement;
