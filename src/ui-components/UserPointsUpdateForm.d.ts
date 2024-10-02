/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserPoints } from "../API.ts";
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
export declare type UserPointsUpdateFormInputValues = {
    trReferralBonus?: number;
    trLoyaltyBonus?: number;
    trLoyaltyTotal?: number;
    trLoyaltyBonusResetedTime?: number;
    trTotalPoints?: number;
    trScoreTotal?: number;
};
export declare type UserPointsUpdateFormValidationValues = {
    trReferralBonus?: ValidationFunction<number>;
    trLoyaltyBonus?: ValidationFunction<number>;
    trLoyaltyTotal?: ValidationFunction<number>;
    trLoyaltyBonusResetedTime?: ValidationFunction<number>;
    trTotalPoints?: ValidationFunction<number>;
    trScoreTotal?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserPointsUpdateFormOverridesProps = {
    UserPointsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    trReferralBonus?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyBonus?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyTotal?: PrimitiveOverrideProps<TextFieldProps>;
    trLoyaltyBonusResetedTime?: PrimitiveOverrideProps<TextFieldProps>;
    trTotalPoints?: PrimitiveOverrideProps<TextFieldProps>;
    trScoreTotal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserPointsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserPointsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userPoints?: UserPoints;
    onSubmit?: (fields: UserPointsUpdateFormInputValues) => UserPointsUpdateFormInputValues;
    onSuccess?: (fields: UserPointsUpdateFormInputValues) => void;
    onError?: (fields: UserPointsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserPointsUpdateFormInputValues) => UserPointsUpdateFormInputValues;
    onValidate?: UserPointsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserPointsUpdateForm(props: UserPointsUpdateFormProps): React.ReactElement;
