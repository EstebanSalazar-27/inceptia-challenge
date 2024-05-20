import { ThemeModes } from "@/models/global";
import {
 Context,
 ReactNode,
 createContext,
 useContext,
 useEffect,
 useState,
} from "react";

/**
 * Interfaz que describe la estructura del contexto del tema.
 * @interface IThemeContext
 * @property {() => void} handleMode - Función para alternar entre modos oscuro y claro.
 * @property {boolean} isDarkMode - Booleano que indica si el modo oscuro está habilitado.
 */
interface IThemeContext {
 handleMode: () => void;
 isDarkMode: boolean;
}

/**
 * Contexto para gestionar la información relacionada con el tema.
 * @constant {Context<IThemeContext>} ThemeContext - Contexto de React para el tema.
 */
const ThemeContext: Context<IThemeContext> = createContext({} as IThemeContext);

/**
 * Hook personalizado para consumir el contexto del tema dentro de los componentes.
 * @function UseThemeContext
 * @returns {IThemeContext} - Valores del contexto del tema.
 * @throws {Error} - Lanza un error si se usa fuera del `ThemeProvider`.
 */
export const UseThemeContext = (): IThemeContext => {
 const context: IThemeContext = useContext(ThemeContext);
 if (!context)
  throw new Error("ThemeContext debe ser consumido dentro del ThemeProvider");
 return context;
};

/**
 * Componente proveedor para envolver la aplicación y proporcionar el contexto del tema.
 * @function ThemeProvider
 * @param {object} props - Propiedades para el componente `ThemeProvider`.
 * @param {ReactNode} props.children - Componentes hijos envueltos por el proveedor del tema.
 * @returns {JSX.Element} - Elemento JSX que representa el proveedor del tema.
 */
const ThemeProvider = ({ children }: { children: ReactNode }) => {
 const [isDarkMode, setIsDarkMode] = useState(() => {
  const isDarkModeInLocal = window.localStorage.getItem("isDarkMode");
  return isDarkModeInLocal === "true";
 });

 const handleMode = () => {
  setIsDarkMode(!isDarkMode);
 };

 /**
  * Efecto para actualizar el almacenamiento local y aplicar el estilo del modo oscuro.
  */
 useEffect(() => {
  window.localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  const rootElement = document.getElementById("root");
  if (isDarkMode) {
   rootElement?.classList.add(ThemeModes.dark);
  } else {
   rootElement?.classList.remove(ThemeModes.dark);
  }
 }, [isDarkMode]);

 const values: IThemeContext = {
  isDarkMode,
  handleMode,
 };

 return (
  <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
 );
};

export default ThemeProvider;
