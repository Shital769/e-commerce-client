import "./App.css";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { NewAccountVerification } from "./pages/verify/NewAccountVerification";
import Dashboard from "./pages/dashboard/Dashboard";
import ResetPassword from "./pages/reset-password/ResetPassword";
import Category from "./pages/category/Category";
import PaymentMethodPage from "./pages/payment/PaymentMethodPage";
import { PrivateRouter } from "./components/private-router/PrivateRouter";
import { Products } from "./pages/products/Products";
import { NewProduct } from "./pages/products/NewProduct";
import { EditProduct } from "./pages/products/EditProduct";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          {/* public router */}
          <Route path="/" element={<LoginPage />} />
          <Route path="verify" element={<NewAccountVerification />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="register" element={<RegisterPage />} />

          {/* private router */}

          <Route
            path="dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          {/* <Route
            path="register"
            element={
              <PrivateRouter>
                <RegisterPage />
              </PrivateRouter>
            }
          /> */}
          <Route
            path="category"
            element={
              <PrivateRouter>
                <Category />
              </PrivateRouter>
            }
          />
          <Route
            path="payment-method"
            element={
              <PrivateRouter>
                <PaymentMethodPage />
              </PrivateRouter>
            }
          />
          <Route
            path="products"
            element={
              <PrivateRouter>
                <Products />
              </PrivateRouter>
            }
          />
          <Route
            path="products/new"
            element={
              <PrivateRouter>
                <NewProduct />
              </PrivateRouter>
            }
          />
          <Route
            path="products/:_id"
            element={
              <PrivateRouter>
                <EditProduct />
              </PrivateRouter>
            }
          />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
