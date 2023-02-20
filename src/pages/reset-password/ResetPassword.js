import React from "react";
import { useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

import { resetPassword } from "../../helper/axios";
import { toast } from "react-toastify";
import RequestOTP from "../../components/request-otp/RequestOTP";
import PasswordResetForm from "../../components/reset-password/PasswordResetForm";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState({});
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleOnOtpRequest = async (e) => {
    e.preventDefault();

    const { status, message } = await fetchOtpRequest({ email });

    toast[status](message);
    setResponse({ status, message });
    status === "success" && setShowForm("reset");
  };

  const handleOnPasswordReset = async (data) => {
    console.log("sending password to reset", data);
    const { confirmPassword, ...rest } = data;
    if (rest.password !== confirmPassword) {
      return toast.error("Password do not match");
    }
    const { status, message } = await resetPasswordRequest({ ...rest, email });
    console.log(status, message);
    toast[status](message);
    setResponse({ status, message });
  };

  const forms = {
    otp: (
      <RequestOTP
        handleOnChange={handleOnChange}
        handleOnOtpRequest={handleOnOtpRequest}
      />
    ),

    reset: <PasswordResetForm handleOnPasswordReset={handleOnPasswordReset} />,
  };

  return (
    <div>
      <Header />
      {response.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}
      <Footer />
    </div>
  );
};

export default ResetPassword;
