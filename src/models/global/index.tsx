import { ReactNode } from "react";

export interface IWrapper {
 children: ReactNode;
}

export type InputValue = string | number | readonly string[] | undefined;
export enum ThemeModes {
 dark = "dark",
 light = "light",
}
