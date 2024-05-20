import { IWrapper } from "@/models/global";

function ContWithImage({ children }: IWrapper) {
 return (
  <div className="w-3/5 max-md:w-full h-[700px] max-h-[700px] shadow-2xl flex max-sm:flex-col  bg-opacity-20 backdrop-blur-md ">
   <div className=" bg-white dark:bg-stone-900 w-3/4  max-md:w-full h-full flex justify-center items-center">
    {children}
   </div>

   <div
    className={`w-3/5 max-md:w-full h-full blur-[.5px] bg-[url('https://www.galicia.ar/content/dam/galicia/banco-galicia/personas/canales/onb/ONBGallery/ilustraciones/2023/Inversiones-2-LuciaPerini.jpg')] bg-cover bg-center bg-no-repeat`}
   />
  </div>
 );
}
export default ContWithImage;
