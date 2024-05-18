import { IWrapper } from "../../models";
import { FC } from "react";

export const Thead: FC<IWrapper> = ({ children }) => {
 return (
  <thead className="sticky top-0  z-50  dark:bg-dark-A bg-light-A ">
   {children}
  </thead>
 );
};
