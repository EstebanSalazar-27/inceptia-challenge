import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage } from "@/pages/login";
import ReportsPage from "@/pages/reports";
import ProtectedRoute from "@components/ProtectedRoute";

function App() {
 return (
  <>
   <div className="w-full max-w-[1800px]  mx-auto h-screen p-12">
    <Router>
     <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
       index
       path="/"
       element={
        <ProtectedRoute>
         <ReportsPage />
        </ProtectedRoute>
       }
      />
     </Routes>
    </Router>

    <ToastContainer />
   </div>
  </>
 );
}

export default App;
