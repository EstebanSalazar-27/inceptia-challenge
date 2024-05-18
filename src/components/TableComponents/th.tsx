import { IWrapper } from "../../models";
import { FC } from "react";

export const TH: FC<IWrapper> = ({ children }) => {
 return (
  <th className=" p-2  text-xs border-[1px] dark:border-dark-C capitalize dark:text-light-B">
   {children}
  </th>
 );
};
