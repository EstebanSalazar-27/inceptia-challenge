import { IWrapper } from "../../models/global";
import { FC } from "react";

export const Table: FC<IWrapper> = ({ children }) => {
 return (
  <table className="w-full h-max  border-collapse my-0 mx-auto  shadow-sm  rounded-sm  bg-transparent">
   {children}
  </table>
 );
};
