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
export declare type EventSessionCreateFormInputValues = {
    eventType?: string;
    rewardType?: string;
    fingerPrintId?: string;
    ip?: string;
    loadedEventData?: string;
    triviaSelectedAnswers?: string;
    triviaStartTime?: string;
    triviaEndedTime?: string;
    triviaElapsedTime?: string;
    score?: number;
    scoreSubmitTime?: string;
    prizeClaimType?: string;
    prizeClaimTypeSubmitTime?: string;
};
export declare type EventSessionCreateFormValidationValues = {
    eventType?: ValidationFunction<string>;
    rewardType?: ValidationFunction<string>;
    fingerPrintId?: ValidationFunction<string>;
    ip?: ValidationFunction<string>;
    loadedEventData?: ValidationFunction<string>;
    triviaSelectedAnswers?: ValidationFunction<string>;
    triviaStartTime?: ValidationFunction<string>;
    triviaEndedTime?: ValidationFunction<string>;
    triviaElapsedTime?: ValidationFunction<string>;
    score?: ValidationFunction<number>;
    scoreSubmitTime?: ValidationFunction<string>;
    prizeClaimType?: ValidationFunction<string>;
    prizeClaimTypeSubmitTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventSessionCreateFormOverridesProps = {
    EventSessionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    eventType?: PrimitiveOverrideProps<TextFieldProps>;
    rewardType?: PrimitiveOverrideProps<TextFieldProps>;
    fingerPrintId?: PrimitiveOverrideProps<TextFieldProps>;
    ip?: PrimitiveOverrideProps<TextFieldProps>;
    loadedEventData?: PrimitiveOverrideProps<TextFieldProps>;
    triviaSelectedAnswers?: PrimitiveOverrideProps<TextFieldProps>;
    triviaStartTime?: PrimitiveOverrideProps<TextFieldProps>;
    triviaEndedTime?: PrimitiveOverrideProps<TextFieldProps>;
    triviaElapsedTime?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
    scoreSubmitTime?: PrimitiveOverrideProps<TextFieldProps>;
    prizeClaimType?: PrimitiveOverrideProps<TextFieldProps>;
    prizeClaimTypeSubmitTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventSessionCreateFormProps = React.PropsWithChildren<{
    overrides?: EventSessionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EventSessionCreateFormInputValues) => EventSessionCreateFormInputValues;
    onSuccess?: (fields: EventSessionCreateFormInputValues) => void;
    onError?: (fields: EventSessionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventSessionCreateFormInputValues) => EventSessionCreateFormInputValues;
    onValidate?: EventSessionCreateFormValidationValues;
} & React.CSSProperties>;
export default function EventSessionCreateForm(props: EventSessionCreateFormProps): React.ReactElement;
