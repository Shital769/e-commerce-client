import { toast } from "react-toastify";
import {
  deletePayment,
  fetchPayment,
  postPayment,
  updatePayment,
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
  const resultPending = deletePayment(_id);

  toast.promise(resultPending, {
    pending: "please wait...",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchPayments());
};

export const updatePayment = (data) => async (dispatch) => {
  const resultPending = updatePayment(data);

  toast.promise(resultPending, {
    pending: "please wait...",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchPayments());
};
