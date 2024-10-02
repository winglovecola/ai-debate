/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { DebateScore } from "../API.ts";
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
export declare type DebateScoreUpdateFormInputValues = {
    winningTeam?: string;
};
export declare type DebateScoreUpdateFormValidationValues = {
    winningTeam?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DebateScoreUpdateFormOverridesProps = {
    DebateScoreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    winningTeam?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DebateScoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: DebateScoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    debateScore?: DebateScore;
    onSubmit?: (fields: DebateScoreUpdateFormInputValues) => DebateScoreUpdateFormInputValues;
    onSuccess?: (fields: DebateScoreUpdateFormInputValues) => void;
    onError?: (fields: DebateScoreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DebateScoreUpdateFormInputValues) => DebateScoreUpdateFormInputValues;
    onValidate?: DebateScoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DebateScoreUpdateForm(props: DebateScoreUpdateFormProps): React.ReactElement;
