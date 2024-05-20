import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage } from "@/pages/Login";
import LogsPage from "@/pages/Logs";
import ProtectedRoute from "@components/ProtectedRoute";
import { UseThemeContext } from "@/context/theme";
import { ThemeModes } from "@/models/global";
import Home from "@/pages/Home";

function App() {
 const { isDarkMode } = UseThemeContext();
 return (
  <>
   <div className="w-full max-w-[1800px] mx-auto p-2">
    <Router>
     <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
       path="/"
       element={
        <ProtectedRoute>
         <Home />
        </ProtectedRoute>
       }
      >
       <Route path="logs" element={<LogsPage />} />
      </Route>
     </Routes>
    </Router>

    <ToastContainer
     position="top-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme={`${isDarkMode ? ThemeModes.dark : ThemeModes.light}`}
    />
   </div>
  </>
 );
}

export default App;
