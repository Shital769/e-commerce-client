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
