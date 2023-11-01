export type ClassConstructor<T extends {} = any, K = any[]> = new (...args: K[]) => T;

type PrimitivePropertie = string | number | boolean | null;
export type TJsonValue = PrimitivePropertie | TJsonDocument | List;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface List extends Array<TJsonValue> {}

export interface TJsonDocument {
  [member: string]: TJsonValue;
}

// GENERICS
export type TGenericValue<T> = { value: T };
export type TGenericInterval<T> = { begin: T; end: T };
export type Nullable<T> = T | undefined | null;
