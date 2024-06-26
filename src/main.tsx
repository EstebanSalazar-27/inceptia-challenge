import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "@/index.css";
import { UserProvider } from "@/context/user.tsx";
import ThemeProvider from "@/context/theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
  <ThemeProvider>
   <UserProvider>
    <App />
   </UserProvider>
  </ThemeProvider>
 </React.StrictMode>
);
