import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { NewAccountVerification } from "./pages/verify/NewAccountVerification";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          {/* public router */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* private router */}
          <Route path="/verify" element={<NewAccountVerification />} />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
