import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, CustomIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Plan, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Company_Name?: string | null;
  readonly Types?: string | null;
  readonly Next_Payment_Date?: string | null;
  readonly Ec2_IP_Address?: string | null;
  readonly Payment_Status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Plan, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Company_Name?: string | null;
  readonly Types?: string | null;
  readonly Next_Payment_Date?: string | null;
  readonly Ec2_IP_Address?: string | null;
  readonly Payment_Status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Plan = LazyLoading extends LazyLoadingDisabled ? EagerPlan : LazyPlan

export declare const Plan: (new (init: ModelInit<Plan>) => Plan) & {
  copyOf(source: Plan, mutator: (draft: MutableModel<Plan>) => MutableModel<Plan> | void): Plan;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<User, 'Email_Address'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly Email_Address: string;
  readonly Company_Name?: string | null;
  readonly Phone_Number?: string | null;
  readonly City?: string | null;
  readonly Business_Field?: string | null;
  readonly Contact_Person?: string | null;
  readonly Contact_Phone_Number?: string | null;
  readonly Description?: string | null;
  readonly Amount_People?: number | null;
  readonly Plan_Id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<User, 'Email_Address'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly Email_Address: string;
  readonly Company_Name?: string | null;
  readonly Phone_Number?: string | null;
  readonly City?: string | null;
  readonly Business_Field?: string | null;
  readonly Contact_Person?: string | null;
  readonly Contact_Phone_Number?: string | null;
  readonly Description?: string | null;
  readonly Amount_People?: number | null;
  readonly Plan_Id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}