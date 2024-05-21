import Navbar from "@/components/Navbar";
import { useUser } from "@/context/user";
import { Navigate, Outlet } from "react-router-dom";

function Home() {
 const { isAuthenticated } = useUser();

 if (isAuthenticated) <Navigate to="logs" />;
 return (
  <div className="h-screen flex flex-col gap-12">
   <Navbar />
   <Outlet />
  </div>
 );
}
export default Home;
