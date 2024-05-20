import { IWrapper } from "@/models/global";

function ContCol({ children }: IWrapper) {
 return (
  <div className="flex flex-col justify-center items-center">{children}</div>
 );
}
function PageCont({ children }: IWrapper) {
 return (
  <div className=" h-screen w-full flex items-center justify-center ">
   {children}
  </div>
 );
}

export { ContCol, PageCont };
