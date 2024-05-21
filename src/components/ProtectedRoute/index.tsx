import { useUser } from "@/context/user";
import { Navigate } from "react-router-dom";
import Spinner from "@components/Spinner";
import { ReactNode } from "react";

/**
 * @description Este componente se encarga de verificar si el usuario que esta intentando acceder a la ruta esta autenticado, caso contrario sera redireccionado al login
 * @param children Ruta a renderizar
 * @returns 
 */
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
 const { isAuthenticated, loading } = useUser();

 if (loading) return <Spinner />;
 if (!isAuthenticated) return <Navigate to="/login" />;
 return children;
};
export default ProtectedRoute;
