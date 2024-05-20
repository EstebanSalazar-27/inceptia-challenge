import React, {
 createContext,
 useState,
 useContext,
 ReactNode,
 useEffect,
} from "react";
import { IWrapper, TokenPayload } from "../models";
import { decodeToken, isExpired } from "react-jwt";

interface UserContextProps {
 user: TokenPayload | null;
 setUser: React.Dispatch<React.SetStateAction<TokenPayload | null>>;
 token: string;
 setToken: React.Dispatch<React.SetStateAction<string>>;
 isAuthenticated: boolean;
 setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
 loading: boolean;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: IWrapper) => {
 const [user, setUser] = useState<UserContextProps["user"]>(null);
 const [token, setToken] = useState<UserContextProps["token"]>("");
 const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
 const [loading, setLoading] = useState<boolean>(true);
 useEffect(() => {
  try {
   const storedToken = localStorage.getItem("user_token");
   // Validar si hay token en localstorage y si es valido
   if (storedToken && !isExpired(storedToken)) {
    setToken(storedToken);
    setIsAuthenticated(true);
    const decodedToken: TokenPayload | null = decodeToken(storedToken);
    if (decodedToken) {
     setUser(decodedToken);
    }
   }
  } catch (error) {
   console.error(error);
  } finally {
   setLoading(false);
  }
 }, []);
 const ctxValues: UserContextProps = {
  isAuthenticated,
  setIsAuthenticated,
  token,
  setToken,
  user,
  setUser,
  loading,
 };
 return (
  <UserContext.Provider value={ctxValues}>{children}</UserContext.Provider>
 );
};

export const useUser = () => {
 const context = useContext(UserContext);
 if (!context) {
  throw new Error("useUser must be used within a UserProvider");
 }
 return context;
};
