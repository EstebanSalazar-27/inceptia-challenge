import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

function Home() {
 return (
  <div className="h-screen flex flex-col gap-12">
   <Navbar />
   <Outlet />
  </div>
 );
}
export default Home;
