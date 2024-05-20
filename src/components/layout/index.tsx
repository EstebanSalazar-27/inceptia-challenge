function ContCol({ children }: { children: any }) {
 return (
  <div className="flex flex-col justify-center items-center">{children}</div>
 );
}
function PageCont({ children }: { children: any }) {
 return (
  <div className=" h-screen w-full flex items-center justify-center ">
   {children}
  </div>
 );
}
function ContWithImage({ children }: { children: any }) {
 return (
  <div className="w-3/5 max-md:w-full h-[700px] max-h-[700px] shadow-2xl flex max-sm:flex-col  bg-opacity-20 backdrop-blur-md ">
   <div className=" bg-white w-3/4  max-md:w-full h-full flex justify-center items-center">
    {children}
   </div>

   <div
    className={`w-3/5 max-md:w-full h-full blur-[.5px] bg-[url('https://www.galicia.ar/content/dam/galicia/banco-galicia/personas/canales/onb/ONBGallery/ilustraciones/2023/Inversiones-2-LuciaPerini.jpg')] bg-cover bg-center bg-no-repeat`}
   />
  </div>
 );
}
interface ParagraphProps {
 children: React.ReactNode;
 size?: "sm" | "md" | "lg";
}

const sizeClasses = {
 sm: "text-sm",
 md: "text-base",
 lg: "text-lg",
};

export function Paragraph({ children, size = "sm" }: ParagraphProps) {
 return (
  <p
   className={`text-blue-500 hover:text-blue-400 cursor-pointer ${sizeClasses[size]}`}
  >
   {children}
  </p>
 );
}

interface LogoProps {
 size?: "sm" | "md" | "lg";
}

const LogoSizes = {
 sm: "w-44",
 md: "w-60",
 lg: "w-80",
};
function Logo({ size = "sm" }: LogoProps) {
 return (
  <img
   className={`${LogoSizes[size]} rounded-sm shadow-sm`}
   src="../inceptia.png"
   alt=""
  />
 );
}

function HeaderH3({ children }: { children: any }) {
 return (
  <h3 className="font-roboto text-2xl text-blue-500 font-semibold">
   {children}
  </h3>
 );
}
function Button({
 children,
 type = "button",
 onClick,
}: {
 children: any;
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
export { ContCol, ContWithImage, PageCont, Button, HeaderH3, Logo };
