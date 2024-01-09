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
export declare type UserUpdateFormInputValues = {
    User_Pool_Id?: string;
    Company_Name?: string;
    Phone_Number?: string;
    City?: string;
    Business_Field?: string;
    Contact_Person?: string;
    Contact_Phone_Number?: string;
    Description?: string;
    Amount_People?: number;
    Plan_Id?: string;
};
export declare type UserUpdateFormValidationValues = {
    User_Pool_Id?: ValidationFunction<string>;
    Company_Name?: ValidationFunction<string>;
    Phone_Number?: ValidationFunction<string>;
    City?: ValidationFunction<string>;
    Business_Field?: ValidationFunction<string>;
    Contact_Person?: ValidationFunction<string>;
    Contact_Phone_Number?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Amount_People?: ValidationFunction<number>;
    Plan_Id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserUpdateFormOverridesProps = {
    UserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    User_Pool_Id?: PrimitiveOverrideProps<TextFieldProps>;
    Company_Name?: PrimitiveOverrideProps<TextFieldProps>;
    Phone_Number?: PrimitiveOverrideProps<TextFieldProps>;
    City?: PrimitiveOverrideProps<TextFieldProps>;
    Business_Field?: PrimitiveOverrideProps<TextFieldProps>;
    Contact_Person?: PrimitiveOverrideProps<TextFieldProps>;
    Contact_Phone_Number?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Amount_People?: PrimitiveOverrideProps<TextFieldProps>;
    Plan_Id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserUpdateFormOverridesProps | undefined | null;
} & {
    User_Pool_Id?: string;
    user?: any;
    onSubmit?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onSuccess?: (fields: UserUpdateFormInputValues) => void;
    onError?: (fields: UserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onValidate?: UserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserUpdateForm(props: UserUpdateFormProps): React.ReactElement;
