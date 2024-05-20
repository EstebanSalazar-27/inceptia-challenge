import { IWrapper, ThemeModes } from "@/models";
import {
 Context,
 ReactNode,
 createContext,
 useContext,
 useEffect,
 useState,
} from "react";

/**
 * Interface describing the structure of the theme context.
 * @interface IThemeContext
 * @property {() => void} handleMode - Function to toggle between dark and light modes.
 * @property {boolean} isDarkMode - Boolean indicating whether dark mode is enabled.
 */
interface IThemeContext {
 handleMode: () => void;
 isDarkMode: boolean;
}

/**
 * Context to manage theme-related information.
 * @constant {Context<IThemeContext>} ThemeContext - React context for the theme.
 */
const ThemeContext: Context<IThemeContext> = createContext({} as IThemeContext);

/**
 * Custom hook to consume the theme context within components.
 * @function UseThemeContext
 * @returns {IThemeContext} - Theme context values.
 * @throws {Error} - Throws an error if used outside the `ThemeProvider`.
 */
export const UseThemeContext = (): IThemeContext => {
 const context: IThemeContext = useContext(ThemeContext);
 if (!context)
  throw new Error("ThemeContext must be consumed inside the ThemeProvider");
 return context;
};

/**
 * Provider component to wrap the application and provide the theme context.
 * @function ThemeProvider
 * @param {object} props - Props for the `ThemeProvider` component.
 * @param {ReactNode} props.children - Child components wrapped by the theme provider.
 * @returns {JSX.Element} - JSX element representing the theme provider.
 */
const ThemeProvider = ({ children }: IWrapper) => {
 const [isDarkMode, setIsDarkMode] = useState(() => {
  const isDarkModeInLocal = window.localStorage.getItem("isDarkMode");
  return isDarkModeInLocal === "true";
 });

 const handleMode = () => {
  setIsDarkMode(!isDarkMode);
 };

 /**
        Effect to update local storage and apply dark mode styling.
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
