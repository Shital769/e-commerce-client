import { toast } from "react-toastify";
import {
  deletePayments,
  fetchPayment,
  postPayment,
  updatePayments,
} from "../../helper/axios";
import { setPayments } from "./PaymentSlice";

export const fetchPayments = () => async (dispatch) => {
  const { status, payments } = await fetchPayment();
  console.log(payments);

  status === "success" && dispatch(setPayments(payments));
};

export const postNewPayment = (data) => async (dispatch) => {
  const resultPending = postPayment(data);

  toast.promise(resultPending, {
    pending: "please wait...",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchPayments());
};

export const deletePayment = (_id) => async (dispatch) => {
  const resultPending = deletePayments(_id);

  toast.promise(resultPending, {
    pending: "please wait...",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchPayments());
};

export const updatePayment = (data) => async (dispatch) => {
  const resultPending = updatePayments(data);

  toast.promise(resultPending, {
    pending: "please wait...",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchPayments());
};
