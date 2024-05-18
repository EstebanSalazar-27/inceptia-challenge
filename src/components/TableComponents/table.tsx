import { IWrapper } from "../../models";
import { FC } from "react";

export const Table: FC<IWrapper> = ({ children }) => {
 return (
  <table className="w-full h-max  border-collapse my-0 mx-auto bg-white dark:bg-dark-B shadow-sm  rounded-sm    ">
   {children}
  </table>
 );
};
