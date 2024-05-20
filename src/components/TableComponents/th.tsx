import { IWrapper } from "../../models/global";
import { FC } from "react";

export const TH: FC<IWrapper> = ({ children }) => {
 return (
  <th className=" p-2  text-xs border-[1px] dark:border-stone-700 capitalize dark:text-slate-200">
   {children}
  </th>
 );
};
