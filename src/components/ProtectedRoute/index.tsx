import { useUser } from "@/context/user";
import { Navigate } from "react-router-dom";
import Spinner from "@components/Spinner";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
 const { isAuthenticated, loading } = useUser();

 console.log(loading, isAuthenticated);
 if (loading) return <Spinner />;
 if (!isAuthenticated) return <Navigate to="/login" />;
 return children;
};
export default ProtectedRoute;
