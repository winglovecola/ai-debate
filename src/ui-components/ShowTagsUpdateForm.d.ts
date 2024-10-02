/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ShowTags } from "../API.ts";
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
export declare type ShowTagsUpdateFormInputValues = {
    name?: string;
    type?: string;
    description?: string;
};
export declare type ShowTagsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShowTagsUpdateFormOverridesProps = {
    ShowTagsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShowTagsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShowTagsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    showTags?: ShowTags;
    onSubmit?: (fields: ShowTagsUpdateFormInputValues) => ShowTagsUpdateFormInputValues;
    onSuccess?: (fields: ShowTagsUpdateFormInputValues) => void;
    onError?: (fields: ShowTagsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShowTagsUpdateFormInputValues) => ShowTagsUpdateFormInputValues;
    onValidate?: ShowTagsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShowTagsUpdateForm(props: ShowTagsUpdateFormProps): React.ReactElement;
