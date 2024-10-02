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
export declare type UserPointsCreateFormInputValues = {
    trReferralBonus?: number;
    trLoyaltyBonus?: number;
    trLoyaltyTotal?: number;
    trLoyaltyBonusResetedTime?: number;
    trTotalPoints?: number;
    trScoreTotal?: number;
};
export declare type UserPointsCreateFormValidationValues = {
    trReferralBonus?: ValidationFunction<number>;
    trLoyaltyBonus?: ValidationFunction<number>;
    trLoyaltyTotal?: ValidationFunction<number>;
    trLoyaltyBonusResetedTime?: ValidationFunction<number>;
    trTotalPoints?: ValidationFunction<number>;
    trScoreTotal?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserPointsCreateFormOverridesProps = {
    UserPointsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    trReferralBonus?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyBonus?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyTotal?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyBonusResetedTime?: PrimitiveOverrideProps<TextFieldProps>;
    trTotalPoints?: PrimitiveOverrideProps<TextFieldProps>;
    trScoreTotal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserPointsCreateFormProps = React.PropsWithChildren<{
    overrides?: UserPointsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserPointsCreateFormInputValues) => UserPointsCreateFormInputValues;
    onSuccess?: (fields: UserPointsCreateFormInputValues) => void;
    onError?: (fields: UserPointsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserPointsCreateFormInputValues) => UserPointsCreateFormInputValues;
    onValidate?: UserPointsCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserPointsCreateForm(props: UserPointsCreateFormProps): React.ReactElement;
