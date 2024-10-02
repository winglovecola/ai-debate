/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type EventsCreateFormInputValues = {
    title?: string;
    description?: string;
    eventType?: string;
    eventTags?: string[];
    rewardType?: string;
    streamUrl?: string;
    relatedShowsData?: string;
    scorePoolData?: string;
    scoreAccess?: string;
    scoreAllowView?: boolean;
    winnerCorrectAnswerCount?: number;
    winnerQualifyTimeSec?: number;
    eventAllowedUsers?: string[];
    initiateTime?: number;
    broadcastTime?: number;
    eventEndingTime?: number;
    prizeClaimPin?: string;
    prizePayoutCompletedAt?: number;
    prizeCountDown?: string;
    password?: string;
    passwordProtected?: boolean;
    status?: string;
    winnerAndPrizefinalized?: boolean;
    winnersCount?: number;
};
export declare type EventsCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    eventType?: ValidationFunction<string>;
    eventTags?: ValidationFunction<string>;
    rewardType?: ValidationFunction<string>;
    streamUrl?: ValidationFunction<string>;
    relatedShowsData?: ValidationFunction<string>;
    scorePoolData?: ValidationFunction<string>;
    scoreAccess?: ValidationFunction<string>;
    scoreAllowView?: ValidationFunction<boolean>;
    winnerCorrectAnswerCount?: ValidationFunction<number>;
    winnerQualifyTimeSec?: ValidationFunction<number>;
    eventAllowedUsers?: ValidationFunction<string>;
    initiateTime?: ValidationFunction<number>;
    broadcastTime?: ValidationFunction<number>;
    eventEndingTime?: ValidationFunction<number>;
    prizeClaimPin?: ValidationFunction<string>;
    prizePayoutCompletedAt?: ValidationFunction<number>;
    prizeCountDown?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    passwordProtected?: ValidationFunction<boolean>;
    status?: ValidationFunction<string>;
    winnerAndPrizefinalized?: ValidationFunction<boolean>;
    winnersCount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventsCreateFormOverridesProps = {
    EventsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    eventType?: PrimitiveOverrideProps<TextFieldProps>;
    eventTags?: PrimitiveOverrideProps<TextFieldProps>;
    rewardType?: PrimitiveOverrideProps<TextFieldProps>;
    streamUrl?: PrimitiveOverrideProps<TextFieldProps>;
    relatedShowsData?: PrimitiveOverrideProps<TextFieldProps>;
    scorePoolData?: PrimitiveOverrideProps<TextFieldProps>;
    scoreAccess?: PrimitiveOverrideProps<TextFieldProps>;
    scoreAllowView?: PrimitiveOverrideProps<SwitchFieldProps>;
    winnerCorrectAnswerCount?: PrimitiveOverrideProps<TextFieldProps>;
    winnerQualifyTimeSec?: PrimitiveOverrideProps<TextFieldProps>;
    eventAllowedUsers?: PrimitiveOverrideProps<TextFieldProps>;
    initiateTime?: PrimitiveOverrideProps<TextFieldProps>;
    broadcastTime?: PrimitiveOverrideProps<TextFieldProps>;
    eventEndingTime?: PrimitiveOverrideProps<TextFieldProps>;
    prizeClaimPin?: PrimitiveOverrideProps<TextFieldProps>;
    prizePayoutCompletedAt?: PrimitiveOverrideProps<TextFieldProps>;
    prizeCountDown?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    passwordProtected?: PrimitiveOverrideProps<SwitchFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    winnerAndPrizefinalized?: PrimitiveOverrideProps<SwitchFieldProps>;
    winnersCount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventsCreateFormProps = React.PropsWithChildren<{
    overrides?: EventsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EventsCreateFormInputValues) => EventsCreateFormInputValues;
    onSuccess?: (fields: EventsCreateFormInputValues) => void;
    onError?: (fields: EventsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventsCreateFormInputValues) => EventsCreateFormInputValues;
    onValidate?: EventsCreateFormValidationValues;
} & React.CSSProperties>;
export default function EventsCreateForm(props: EventsCreateFormProps): React.ReactElement;
