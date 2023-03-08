import {
  deletePayments,
  fetchPayment,
  postPayment,
  updatePayments,
} from "../../helper/axios";
import { toast } from "react-toastify";
import { setPayments } from "./PaymentSlice";
import { setShowModal } from "../../system/systemSlice";

//to get payments
export const fetchPayments = () => async (dispatch) => {
  const { status, result } = await fetchPayment();
  console.log(result);

  status === "success" && dispatch(setPayments(result));
};

export const postNewPayment = (data) => async (dispatch) => {
  const resultPending = postPayment(data);

  toast.promise(resultPending, {
    pending: "please wait...",
  });

  const { status, message } = await resultPending;
  toast[status](message);

  if (status === "success") {
    dispatch(fetchPayments());
    dispatch(setShowModal(false));
  }
};

export const deletePayment = (_id) => async (dispatch) => {
  const resultPending = deletePayments(_id);

  toast.promise(resultPending, {
    pending: "please wait...",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  if (status === "success") {
    dispatch(fetchPayments());
  }
};

export const updatePayment = (data) => async (dispatch) => {
  const resultPending = updatePayments(data);

  toast.promise(resultPending, {
    pending: "please wait...",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  if (status === "success") {
    dispatch(fetchPayments());
    dispatch(setShowModal(false));
  }
};
//changed _id parameter to data in update payment function
