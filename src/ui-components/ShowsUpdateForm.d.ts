/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Shows } from "../API.ts";
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
export declare type ShowsUpdateFormInputValues = {
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
export declare type ShowsUpdateFormValidationValues = {
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
export declare type ShowsUpdateFormOverridesProps = {
    ShowsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ShowsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShowsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shows?: Shows;
    onSubmit?: (fields: ShowsUpdateFormInputValues) => ShowsUpdateFormInputValues;
    onSuccess?: (fields: ShowsUpdateFormInputValues) => void;
    onError?: (fields: ShowsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShowsUpdateFormInputValues) => ShowsUpdateFormInputValues;
    onValidate?: ShowsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShowsUpdateForm(props: ShowsUpdateFormProps): React.ReactElement;
