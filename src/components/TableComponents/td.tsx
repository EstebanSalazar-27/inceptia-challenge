import { ReactNode } from "react";

export const TD = ({
 children,
 title,
 onClick,
}: {
 children: ReactNode;
 title?: string;
 onClick?: () => void;
}) => {
 const EMPTYCELL = "-------";
 return (
  <td
   onClick={onClick}
   title={title}
   className=" whitespace-nowrap overflow-hidden overflow-ellipsis lowercase first-letter:capitalize    py-2 text-center text-xs max-w-[150px]  border-x-[1px]  dark:border-stone-700 dark:text-slate-200"
  >
   {!children ? EMPTYCELL : children}
  </td>
 );
};
