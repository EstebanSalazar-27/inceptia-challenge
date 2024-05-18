import React, { createContext, useState, useContext, ReactNode } from "react";
import { User } from "../models/api/login";

interface UserContextProps {
 user: User | null;
 setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
 const [user, setUser] = useState<User | null>(null);

 return (
  <UserContext.Provider value={{ user, setUser }}>
   {children}
  </UserContext.Provider>
 );
};

export const useUser = () => {
 const context = useContext(UserContext);
 if (!context) {
  throw new Error("useUser must be used within a UserProvider");
 }
 return context;
};