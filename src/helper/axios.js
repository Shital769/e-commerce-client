import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const adminApi = rootUrl + "/admin";
const categoryApi = rootUrl + "/category";
const paymentApi = rootUrl + "/payment";

const fetchProcesser = async ({ method, url, data }) => {
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
  return fetchProcesser(obj);
};

export const postEmailVerification = async (data) => {
  const url = adminApi + "/verify";
  const obj = {
    method: "post",
    url,
    data,
  };
  return fetchProcesser(obj);
};

export const loginAdmin = async (loginData) => {
  const url = adminApi + "/login";
  const obj = {
    method: "post",
    url,
    data: loginData,
  };
  return fetchProcesser(obj);
};

export const fetchOtpRequest = async (formData) => {
  const url = adminApi + "/request-otp";
  const obj = {
    method: "post",
    url,
    data: formData,
  };
  return fetchProcesser(obj);
};

export const resetPasswordRequest = async (formData) => {
  const url = adminApi + "/reset-password";
  const obj = {
    method: "patch",
    url,
    data: formData,
  };
  return fetchProcesser(obj);
};

// category
export const postCategory = async (data) => {
  const url = categoryApi;
  const obj = {
    method: "post",
    url,
    data,
  };
  return fetchProcesser(obj);
};

export const fetchCategory = async () => {
  const url = categoryApi;
  const obj = {
    method: "get",
    url,
  };
  return fetchProcesser(obj);
};

//delete category
export const deleteCategories = async (_id) => {
  const url = categoryApi + "/" + _id;
  const obj = {
    method: "delete",
    url,
  };
  return fetchProcesser(obj);
};

//update category
export const updateCategories = async (data) => {
  const url = categoryApi;
  const obj = {
    method: "put",
    url,
    data,
  };
  return fetchProcesser(obj);
};

//payment
export const postPayment = async (data) => {
  const url = paymentApi + "/payment-method";
  const obj = {
    method: "post",
    url,
    data,
  };
  return fetchProcesser(obj);
};
export const fetchPayment = async () => {
  const url = paymentApi;
  const obj = {
    method: "get",
    url,
  };
  return fetchProcesser(obj);
};

export const deletePayments = async (_id) => {
  const url = paymentApi + "/" + _id;
  const obj = {
    method: "delete",
    url,
  };
  return fetchProcesser(obj);
};

export const updatePayments = async (data) => {
  const url = paymentApi;
  const obj = {
    method: "put",
    url,
    data,
  };
  return fetchProcesser(obj);
};
