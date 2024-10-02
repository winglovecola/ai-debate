/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EventInfo } from "../API.ts";
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
export declare type EventInfoUpdateFormInputValues = {
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
export declare type EventInfoUpdateFormValidationValues = {
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
export declare type EventInfoUpdateFormOverridesProps = {
    EventInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type EventInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    eventInfo?: EventInfo;
    onSubmit?: (fields: EventInfoUpdateFormInputValues) => EventInfoUpdateFormInputValues;
    onSuccess?: (fields: EventInfoUpdateFormInputValues) => void;
    onError?: (fields: EventInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventInfoUpdateFormInputValues) => EventInfoUpdateFormInputValues;
    onValidate?: EventInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventInfoUpdateForm(props: EventInfoUpdateFormProps): React.ReactElement;
