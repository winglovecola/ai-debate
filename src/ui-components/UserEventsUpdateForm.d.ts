/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserEvents } from "../API.ts";
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
export declare type UserEventsUpdateFormInputValues = {
    event?: string;
    eventAction?: string;
    eventUpdatedTime?: number;
    accountUpdatedTime?: number;
};
export declare type UserEventsUpdateFormValidationValues = {
    event?: ValidationFunction<string>;
    eventAction?: ValidationFunction<string>;
    eventUpdatedTime?: ValidationFunction<number>;
    accountUpdatedTime?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserEventsUpdateFormOverridesProps = {
    UserEventsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    event?: PrimitiveOverrideProps<TextFieldProps>;
    eventAction?: PrimitiveOverrideProps<TextFieldProps>;
    eventUpdatedTime?: PrimitiveOverrideProps<TextFieldProps>;
    accountUpdatedTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserEventsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserEventsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userEvents?: UserEvents;
    onSubmit?: (fields: UserEventsUpdateFormInputValues) => UserEventsUpdateFormInputValues;
    onSuccess?: (fields: UserEventsUpdateFormInputValues) => void;
    onError?: (fields: UserEventsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserEventsUpdateFormInputValues) => UserEventsUpdateFormInputValues;
    onValidate?: UserEventsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserEventsUpdateForm(props: UserEventsUpdateFormProps): React.ReactElement;
