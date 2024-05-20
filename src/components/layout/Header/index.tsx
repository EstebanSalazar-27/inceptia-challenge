import { IWrapper } from "@/models/global";

function Header({ children }: IWrapper) {
 return (
  <h3 className="font-roboto text-2xl text-blue-500 font-semibold">
   {children}
  </h3>
 );
}
export default Header;
