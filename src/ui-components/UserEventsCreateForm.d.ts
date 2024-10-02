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
export declare type UserEventsCreateFormInputValues = {
    event?: string;
    eventAction?: string;
    eventUpdatedTime?: number;
    accountUpdatedTime?: number;
};
export declare type UserEventsCreateFormValidationValues = {
    event?: ValidationFunction<string>;
    eventAction?: ValidationFunction<string>;
    eventUpdatedTime?: ValidationFunction<number>;
    accountUpdatedTime?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserEventsCreateFormOverridesProps = {
    UserEventsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    event?: PrimitiveOverrideProps<TextFieldProps>;
    eventAction?: PrimitiveOverrideProps<TextFieldProps>;
    eventUpdatedTime?: PrimitiveOverrideProps<TextFieldProps>;
    accountUpdatedTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserEventsCreateFormProps = React.PropsWithChildren<{
    overrides?: UserEventsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserEventsCreateFormInputValues) => UserEventsCreateFormInputValues;
    onSuccess?: (fields: UserEventsCreateFormInputValues) => void;
    onError?: (fields: UserEventsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserEventsCreateFormInputValues) => UserEventsCreateFormInputValues;
    onValidate?: UserEventsCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserEventsCreateForm(props: UserEventsCreateFormProps): React.ReactElement;
