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
export declare type UserAwardCreateFormInputValues = {
    trReferralBonus?: number;
    trLoyaltyBonus?: number;
    trLoyaltyBonusResetTime?: number;
};
export declare type UserAwardCreateFormValidationValues = {
    trReferralBonus?: ValidationFunction<number>;
    trLoyaltyBonus?: ValidationFunction<number>;
    trLoyaltyBonusResetTime?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserAwardCreateFormOverridesProps = {
    UserAwardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    trReferralBonus?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyBonus?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyBonusResetTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserAwardCreateFormProps = React.PropsWithChildren<{
    overrides?: UserAwardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserAwardCreateFormInputValues) => UserAwardCreateFormInputValues;
    onSuccess?: (fields: UserAwardCreateFormInputValues) => void;
    onError?: (fields: UserAwardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserAwardCreateFormInputValues) => UserAwardCreateFormInputValues;
    onValidate?: UserAwardCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserAwardCreateForm(props: UserAwardCreateFormProps): React.ReactElement;
