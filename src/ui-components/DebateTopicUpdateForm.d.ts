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
export declare type DebateTopicUpdateFormInputValues = {
    topic?: string;
};
export declare type DebateTopicUpdateFormValidationValues = {
    topic?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DebateTopicUpdateFormOverridesProps = {
    DebateTopicUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    topic?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DebateTopicUpdateFormProps = React.PropsWithChildren<{
    overrides?: DebateTopicUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    debateTopic?: any;
    onSubmit?: (fields: DebateTopicUpdateFormInputValues) => DebateTopicUpdateFormInputValues;
    onSuccess?: (fields: DebateTopicUpdateFormInputValues) => void;
    onError?: (fields: DebateTopicUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DebateTopicUpdateFormInputValues) => DebateTopicUpdateFormInputValues;
    onValidate?: DebateTopicUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DebateTopicUpdateForm(props: DebateTopicUpdateFormProps): React.ReactElement;
