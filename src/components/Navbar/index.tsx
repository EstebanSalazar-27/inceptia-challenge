import { DarkIcon, LightIcon } from "@/assets/themes";
import { UseThemeContext } from "@/context/theme";

function Navbar() {
 const { isDarkMode, handleMode } = UseThemeContext();
 return (
  <nav className="w-full bg-transparent px-4 min-h-[50px]   flex items-center justify-between ">
   <button title="Cambiar tema" onClick={() => handleMode()}>
    {isDarkMode ? <LightIcon /> : <DarkIcon />}
   </button>
  </nav>
 );
}
export default Navbar;
