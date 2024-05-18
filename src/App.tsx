import "./App.css";
import { LoginPage } from "./pages/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 return (
  <>
   <div className="w-full max-w-[1800px]  mx-auto h-screen p-12">
    <LoginPage />
    {/* <div className="flex gap-8 w-full h-full">
     <FiltersBar />
     <main className="w-4/5 h-full bg-white shadow-md border-b-2 border-b-blue-400">
      <ReportsPage />
     </main>
    </div> */}
    <ToastContainer  />
   </div>
  </>
 );
}

export default App;
