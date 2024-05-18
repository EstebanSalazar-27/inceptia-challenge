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
