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
export declare type UserPayoutMethodCreateFormInputValues = {
    paypal?: string;
    interac?: string;
    paperCheck?: string;
    cashApp?: string;
    venmo?: string;
    verificationIdType?: string;
    verificationId?: string;
    country?: string;
    defaultPayoutMethod?: string;
    customContactEmail?: string;
    owner?: string;
};
export declare type UserPayoutMethodCreateFormValidationValues = {
    paypal?: ValidationFunction<string>;
    interac?: ValidationFunction<string>;
    paperCheck?: ValidationFunction<string>;
    cashApp?: ValidationFunction<string>;
    venmo?: ValidationFunction<string>;
    verificationIdType?: ValidationFunction<string>;
    verificationId?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    defaultPayoutMethod?: ValidationFunction<string>;
    customContactEmail?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserPayoutMethodCreateFormOverridesProps = {
    UserPayoutMethodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    paypal?: PrimitiveOverrideProps<TextFieldProps>;
    interac?: PrimitiveOverrideProps<TextFieldProps>;
    paperCheck?: PrimitiveOverrideProps<TextFieldProps>;
    cashApp?: PrimitiveOverrideProps<TextFieldProps>;
    venmo?: PrimitiveOverrideProps<TextFieldProps>;
    verificationIdType?: PrimitiveOverrideProps<TextFieldProps>;
    verificationId?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    defaultPayoutMethod?: PrimitiveOverrideProps<TextFieldProps>;
    customContactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserPayoutMethodCreateFormProps = React.PropsWithChildren<{
    overrides?: UserPayoutMethodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserPayoutMethodCreateFormInputValues) => UserPayoutMethodCreateFormInputValues;
    onSuccess?: (fields: UserPayoutMethodCreateFormInputValues) => void;
    onError?: (fields: UserPayoutMethodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserPayoutMethodCreateFormInputValues) => UserPayoutMethodCreateFormInputValues;
    onValidate?: UserPayoutMethodCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserPayoutMethodCreateForm(props: UserPayoutMethodCreateFormProps): React.ReactElement;
