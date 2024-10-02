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
export declare type ShowsCreateFormInputValues = {
    mode?: string;
    title?: string;
    description?: string;
    showTags?: string[];
    streamUrl?: string;
    tapingTime?: number;
    broadcastTime?: number;
    prizeHeadline1?: string;
    prizeHeadline2?: string;
    prizeClaimPin?: string;
    prizePayoutCompletedAt?: number;
    prizeCountDown?: string;
    password?: string;
    passwordProtected?: boolean;
    status?: string;
    winnerAndPrizefinalized?: boolean;
    winnersCount?: number;
};
export declare type ShowsCreateFormValidationValues = {
    mode?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    showTags?: ValidationFunction<string>;
    streamUrl?: ValidationFunction<string>;
    tapingTime?: ValidationFunction<number>;
    broadcastTime?: ValidationFunction<number>;
    prizeHeadline1?: ValidationFunction<string>;
    prizeHeadline2?: ValidationFunction<string>;
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
export declare type ShowsCreateFormOverridesProps = {
    ShowsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    mode?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    showTags?: PrimitiveOverrideProps<TextFieldProps>;
    streamUrl?: PrimitiveOverrideProps<TextFieldProps>;
    tapingTime?: PrimitiveOverrideProps<TextFieldProps>;
    broadcastTime?: PrimitiveOverrideProps<TextFieldProps>;
    prizeHeadline1?: PrimitiveOverrideProps<TextFieldProps>;
    prizeHeadline2?: PrimitiveOverrideProps<TextFieldProps>;
    prizeClaimPin?: PrimitiveOverrideProps<TextFieldProps>;
    prizePayoutCompletedAt?: PrimitiveOverrideProps<TextFieldProps>;
    prizeCountDown?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    passwordProtected?: PrimitiveOverrideProps<SwitchFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    winnerAndPrizefinalized?: PrimitiveOverrideProps<SwitchFieldProps>;
    winnersCount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShowsCreateFormProps = React.PropsWithChildren<{
    overrides?: ShowsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShowsCreateFormInputValues) => ShowsCreateFormInputValues;
    onSuccess?: (fields: ShowsCreateFormInputValues) => void;
    onError?: (fields: ShowsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShowsCreateFormInputValues) => ShowsCreateFormInputValues;
    onValidate?: ShowsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShowsCreateForm(props: ShowsCreateFormProps): React.ReactElement;
