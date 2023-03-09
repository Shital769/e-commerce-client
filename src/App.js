import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { NewAccountVerification } from "./pages/verify/NewAccountVerification";
import Dashboard from "./pages/dashboard/Dashboard";
import ResetPassword from "./pages/reset-password/ResetPassword";
import Category from "./pages/category/Category";
import PaymentMethodPage from "./pages/payment/PaymentMethodPage";

import "./App.css";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          {/* public router */}
          <Route path="/" element={<LoginPage />} />
          <Route path="verify" element={<NewAccountVerification />} />
          <Route path="reset-password" element={<ResetPassword />} />

          {/* private router */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="category" element={<Category />} />
          <Route path="payment-method" element={<PaymentMethodPage />} />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
