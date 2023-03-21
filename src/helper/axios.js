import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const adminApi = rootUrl + "/admin";
const categoryApi = rootUrl + "/category";
const paymentApi = rootUrl + "/payment";

const fetchProcesser = async ({ method, url, data, isPrivate, token }) => {
  try {
    const jwtToken = token || sessionStorage.getItem("accessJWT");
    console.log(jwtToken);
    const headers = isPrivate
      ? {
          Authorization: jwtToken,
        }
      : null;

    const res = await axios({
      method,
      url,
      data,
      headers,
    });
    return res.data;
  } catch (error) {
    const message = error.message;

    if (error?.response?.data?.message === "jwt expired") {
      const { accessJWT } = await fetchNewAccessJWT();
      sessionStorage.setItem("accessJWT", accessJWT);
      return fetchProcesser({ method, url, data, isPrivate, token: accessJWT });
    }

    return {
      status: "error",
      message: error.message,
    };
  }
};

//admin
export const postNewAdmin = async (data) => {
  const url = adminApi + "/register";
  const obj = {
    method: "post",
    url,
    data,
    isPrivate: true,
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

//login adminx
export const loginAdmin = async (loginData) => {
  const url = adminApi + "/login";
  const obj = {
    method: "post",
    url,
    data: loginData,
  };
  return fetchProcesser(obj);
};

export const fetchAdminProfile = async () => {
  const url = adminApi + "/user-profile";
  const obj = {
    method: "get",
    url,
    isPrivate: true,
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
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const fetchCategory = async () => {
  const url = categoryApi;
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

//delete category
export const deleteCategories = async (_id) => {
  const url = categoryApi + "/" + _id;
  const obj = {
    method: "delete",
    url,
    isPrivate: true,
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
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

//payment
export const postPayment = async (data) => {
  // const url = paymentApi + "/payment-method";
  const url = paymentApi;
  const obj = {
    method: "post",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};
export const fetchPayment = async () => {
  const url = paymentApi;
  const obj = {
    method: "get",
    url,
    isPrivate: true,
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
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

//jwt
export const fetchNewAccessJWT = async () => {
  const url = adminApi + "/new-accessjwt";
  const token = localStorage.getItem("refreshJWT");
  console.log(token);
  const obj = {
    method: "get",
    url,
    isPrivate: true,
    token,
  };
  return fetchProcesser(obj);
};
