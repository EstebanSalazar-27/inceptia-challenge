import { ReactNode } from "react";

function Label({
 children,
 fieldName,
}: {
 children: ReactNode;
 fieldName: string;
}) {
 return (
  <label
   className="dark:text-slate-200 text-sm text-slate-600"
   htmlFor={fieldName}
  >
   {children}
  </label>
 );
}
export default Label;
