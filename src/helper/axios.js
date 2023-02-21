import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const adminApi = rootUrl + "/admin";

export const fetchOtpProcessor = async ({ method, url, data }) => {
  try {
    const res = await axios({
      method,
      url,
      data,
    });
    return res.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const postNewAdmin = async (data) => {
  const url = adminApi + "/register";
  const obj = {
    method: "post",
    url,
    data,
  };
  return fetchOtpProcessor(obj);
};

export const postEmailVerification = async (data) => {
  const url = adminApi + "/verify";
  const obj = {
    method: "post",
    url,
    data,
  };
  return fetchOtpProcessor(obj);
};

export const loginAdmin = async (loginData) => {
  const url = adminApi + "/login";
  const obj = {
    method: "post",
    url,
    data: loginData,
  };
  return fetchOtpProcessor(obj);
};

export const fetchOtpRequest = async (formData) => {
  const url = adminApi + "/request-otp";
  const obj = {
    method: "post",
    url,
    data: formData,
  };
  return fetchOtpProcessor(obj);
};

export const resetPasswordRequest = async (formData) => {
  const url = adminApi + "/reset-password";
  const obj = {
    method: "patch",
    url,
    data: formData,
  };
  return fetchOtpProcessor(obj);
};
