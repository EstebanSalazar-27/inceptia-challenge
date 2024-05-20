import { ReactNode } from "react";

function Button({
 children,
 type = "button",
 onClick,
}: {
 children: ReactNode;
 type?: "button" | "submit" | "reset" | undefined;
 onClick?: () => void;
}) {
 return (
  <button
   onClick={onClick}
   type={type}
   className="bg-blue-500 hover:bg-blue-600 transition-colors font-semibold text-white py-2 rounded-sm "
  >
   {children}
  </button>
 );
}
export default Button;
