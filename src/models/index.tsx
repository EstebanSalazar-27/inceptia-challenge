import { ReactNode } from "react";

export interface IWrapper {
 children: ReactNode;
}
export type Credentials = {
 email: string;
 password: string;
};
export interface TokenPayload {
 user_id: number;
 username: string;
 exp: number;
 email: string;
 orig_iat: number;
}
export type InputValue = string | number | readonly string[] | undefined;
export enum ThemeModes {
 dark = "dark",
 light = "light",
}
