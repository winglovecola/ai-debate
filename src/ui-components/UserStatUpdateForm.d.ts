/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserStat } from "../API.ts";
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
export declare type UserStatUpdateFormInputValues = {
    trPlayCount?: number;
    trFreePlayCount?: number;
};
export declare type UserStatUpdateFormValidationValues = {
    trPlayCount?: ValidationFunction<number>;
    trFreePlayCount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserStatUpdateFormOverridesProps = {
    UserStatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    trPlayCount?: PrimitiveOverrideProps<TextFieldProps>;
    trFreePlayCount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserStatUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserStatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userStat?: UserStat;
    onSubmit?: (fields: UserStatUpdateFormInputValues) => UserStatUpdateFormInputValues;
    onSuccess?: (fields: UserStatUpdateFormInputValues) => void;
    onError?: (fields: UserStatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserStatUpdateFormInputValues) => UserStatUpdateFormInputValues;
    onValidate?: UserStatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserStatUpdateForm(props: UserStatUpdateFormProps): React.ReactElement;
