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
export declare type DebateScoreCreateFormInputValues = {
    winningTeam?: string;
};
export declare type DebateScoreCreateFormValidationValues = {
    winningTeam?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DebateScoreCreateFormOverridesProps = {
    DebateScoreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    winningTeam?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DebateScoreCreateFormProps = React.PropsWithChildren<{
    overrides?: DebateScoreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DebateScoreCreateFormInputValues) => DebateScoreCreateFormInputValues;
    onSuccess?: (fields: DebateScoreCreateFormInputValues) => void;
    onError?: (fields: DebateScoreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DebateScoreCreateFormInputValues) => DebateScoreCreateFormInputValues;
    onValidate?: DebateScoreCreateFormValidationValues;
} & React.CSSProperties>;
export default function DebateScoreCreateForm(props: DebateScoreCreateFormProps): React.ReactElement;
