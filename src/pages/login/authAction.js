import { loginAdmin } from "../../helper/axios";
import { requestPending, requestSuccess } from "./authSlice";
import { toast } from "react-toastify";

export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending());

    //call axios-helper /api
    const { status, message, user } = await loginAdmin(formData);

    if (status === "success") {
      dispatch(requestSuccess(user)) && toast[status](message);
    }
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
