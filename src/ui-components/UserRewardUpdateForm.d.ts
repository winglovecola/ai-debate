/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserReward } from "../API.ts";
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
export declare type UserRewardUpdateFormInputValues = {
    trReferralBonus?: number;
    trLoyaltyBonus?: number;
    trLoyaltyBonusResetTime?: number;
    trScoreTotal?: number;
};
export declare type UserRewardUpdateFormValidationValues = {
    trReferralBonus?: ValidationFunction<number>;
    trLoyaltyBonus?: ValidationFunction<number>;
    trLoyaltyBonusResetTime?: ValidationFunction<number>;
    trScoreTotal?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserRewardUpdateFormOverridesProps = {
    UserRewardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    trReferralBonus?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyBonus?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyBonusResetTime?: PrimitiveOverrideProps<TextFieldProps>;
    trScoreTotal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserRewardUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserRewardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userReward?: UserReward;
    onSubmit?: (fields: UserRewardUpdateFormInputValues) => UserRewardUpdateFormInputValues;
    onSuccess?: (fields: UserRewardUpdateFormInputValues) => void;
    onError?: (fields: UserRewardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserRewardUpdateFormInputValues) => UserRewardUpdateFormInputValues;
    onValidate?: UserRewardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserRewardUpdateForm(props: UserRewardUpdateFormProps): React.ReactElement;
