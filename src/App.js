import { Button } from "react-bootstrap";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";


import "./App.css";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Browser>
    </div>
  );
}

export default App;
