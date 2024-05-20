import { DarkIcon, LightIcon } from "@/assets/themes";
import { UseThemeContext } from "@/context/theme";
import { Outlet } from "react-router-dom";

function Home() {
 const { handleMode, isDarkMode } = UseThemeContext();
 return (
  <div className="h-screen flex flex-col gap-12">
   <nav className="w-full bg-transparent px-4 min-h-[50px]   flex items-center justify-between ">
    <button title="Cambiar tema" onClick={() => handleMode()}>
     {isDarkMode ? <LightIcon /> : <DarkIcon />}
    </button>
   </nav>

   <Outlet />
  </div>
 );
}
export default Home;
