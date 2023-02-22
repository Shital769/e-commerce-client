import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const adminApi = rootUrl + "/admin";
const categoryApi = rootUrl + "/categories";

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
export const deleleCategory = async (_id) => {
  const url = categoryApi + "/" + _id;
  const obj = {
    method: "delete",
    url,
  };
  return fetchProcesser(obj);
};

//update category
export const updateCategory = async (data) => {
  const url = categoryApi;
  const obj = {
    method: "put",
    url,
    data,
  };
  return fetchProcesser(obj);
};
