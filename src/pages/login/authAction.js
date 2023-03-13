import { fetchAdminProfile, loginAdmin } from "../../helper/axios";
import { requestPending, requestSuccess } from "./authSlice";
import { toast } from "react-toastify";

export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending());

    //call axios-helper /api

    const pendingResp = loginAdmin(formData);
    toast.promise(pendingResp, { pending: "Please wait ...." });

    const { status, message, tokens } = await pendingResp;
    toast[status](message);
    console.log(tokens);

    if (status === "success") {
      const { accessJWT, refreshJWT } = tokens;

      sessionStorage.setItem("accessJWT", accessJWT);
      sessionStorage.setItem("refreshJWT", refreshJWT);

      dispatch(getAdminProfile());
    }
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

const getAdminProfile = () => async (dispatch) => {
  const { status, user } = await fetchAdminProfile();

  status === "success"
    ? dispatch(requestSuccess(user))
    : dispatch(requestSuccess({}));
};

export const autoLogin = () => async (dispatch) => {
  //if accessJWT exist, get the user and mount in our redux store
  //check if  accessJWT exist

  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");
};
