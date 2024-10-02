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
export declare type UserRewardCreateFormInputValues = {
    trReferralBonus?: number;
    trLoyaltyBonus?: number;
    trLoyaltyBonusResetTime?: number;
    trScoreTotal?: number;
};
export declare type UserRewardCreateFormValidationValues = {
    trReferralBonus?: ValidationFunction<number>;
    trLoyaltyBonus?: ValidationFunction<number>;
    trLoyaltyBonusResetTime?: ValidationFunction<number>;
    trScoreTotal?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserRewardCreateFormOverridesProps = {
    UserRewardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    trReferralBonus?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyBonus?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyBonusResetTime?: PrimitiveOverrideProps<TextFieldProps>;
    trScoreTotal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserRewardCreateFormProps = React.PropsWithChildren<{
    overrides?: UserRewardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserRewardCreateFormInputValues) => UserRewardCreateFormInputValues;
    onSuccess?: (fields: UserRewardCreateFormInputValues) => void;
    onError?: (fields: UserRewardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserRewardCreateFormInputValues) => UserRewardCreateFormInputValues;
    onValidate?: UserRewardCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserRewardCreateForm(props: UserRewardCreateFormProps): React.ReactElement;
