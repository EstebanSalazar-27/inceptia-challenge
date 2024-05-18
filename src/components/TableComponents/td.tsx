import { ReactNode } from "react";

export const TD = ({
 children,
 title,
}: {
 children: ReactNode;
 title?: string;
}) => {
 return (
  <td
   title={title}
   className=" whitespace-nowrap overflow-hidden overflow-ellipsis lowercase first-letter:capitalize    py-2 text-center text-xs max-w-[150px]  border-x-[1px]  dark:border-dark-C dark:text-light-B"
  >
   {children}
  </td>
 );
};
