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
export declare type EventInfoCreateFormInputValues = {
    prevEventId?: string;
    prevEventBroadcastTime?: number;
    latestEventId?: string;
    latestEventBroadcastTime?: number;
    nextEventId?: string;
    nextEventBroadcastTime?: number;
    upcomingEventsJsonData?: string;
    upcomingEventsJsonDataUpdateTime?: number;
    trLoyaltyBonusResetTime?: number;
};
export declare type EventInfoCreateFormValidationValues = {
    prevEventId?: ValidationFunction<string>;
    prevEventBroadcastTime?: ValidationFunction<number>;
    latestEventId?: ValidationFunction<string>;
    latestEventBroadcastTime?: ValidationFunction<number>;
    nextEventId?: ValidationFunction<string>;
    nextEventBroadcastTime?: ValidationFunction<number>;
    upcomingEventsJsonData?: ValidationFunction<string>;
    upcomingEventsJsonDataUpdateTime?: ValidationFunction<number>;
    trLoyaltyBonusResetTime?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventInfoCreateFormOverridesProps = {
    EventInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    prevEventId?: PrimitiveOverrideProps<TextFieldProps>;
    prevEventBroadcastTime?: PrimitiveOverrideProps<TextFieldProps>;
    latestEventId?: PrimitiveOverrideProps<TextFieldProps>;
    latestEventBroadcastTime?: PrimitiveOverrideProps<TextFieldProps>;
    nextEventId?: PrimitiveOverrideProps<TextFieldProps>;
    nextEventBroadcastTime?: PrimitiveOverrideProps<TextFieldProps>;
    upcomingEventsJsonData?: PrimitiveOverrideProps<TextFieldProps>;
    upcomingEventsJsonDataUpdateTime?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyBonusResetTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: EventInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EventInfoCreateFormInputValues) => EventInfoCreateFormInputValues;
    onSuccess?: (fields: EventInfoCreateFormInputValues) => void;
    onError?: (fields: EventInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventInfoCreateFormInputValues) => EventInfoCreateFormInputValues;
    onValidate?: EventInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function EventInfoCreateForm(props: EventInfoCreateFormProps): React.ReactElement;
