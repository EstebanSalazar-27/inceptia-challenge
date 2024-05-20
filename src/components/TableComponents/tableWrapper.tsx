import { IWrapper } from "../../models/global";
import { FC } from "react";

export const TableWrapper: FC<IWrapper> = ({ children }) => {
 return (
  <div className="w-full  relative max-h-[700px]   overflow-y-auto ">
   {children}
  </div>
 );
};
