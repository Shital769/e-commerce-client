import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import EditPaymentForm from "./EditPaymentForm";
import CustomModal from "../../components/custom-modal/CustomModal";
import {
  deletePayment,
  fetchPayments,
} from "../../pages/payment/PaymentAction";
import { setShowModal } from "../../system/systemSlice";
import { setSelectedPayments } from "../../pages/payment/PaymentSlice";
import { AddNewPayment } from "../payment-forms/AddNewPayment";
const PaymentTable = () => {
  const dispatch = useDispatch();

  const { payments, selectedPayments } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(fetchPayments());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this payment? ")) {
      dispatch(deletePayment(_id));
    }
  };

  const handleOnEdit = (item) => {
    dispatch(setShowModal(true));
    dispatch(setSelectedPayments(item));
  };
  return (
    <div>
      {selectedPayments?._id ? (
        // <div>{payments?.length} payments found!</div>
        // customModal show={false}
        <CustomModal title="Edit payment methods">
          <EditPaymentForm selectedPayment={selectedPayments} />
        </CustomModal>
      ) : (
        <CustomModal title="Add new payment method">
          <AddNewPayment />
        </CustomModal>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* payments?.length > 0 && Note: This line of code was in first line of dynamic table */}
          {payments?.map((item, i) => (
            <tr key={item?._id}>
              <td>{i + 1}</td>
              <td
                className={`text-${
                  item.status === "active" ? "success" : "danger"
                }`}
              >
                {item.status}
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                {" "}
                <Button onClick={() => handleOnEdit(item)} variant="warning">
                  Edit
                </Button>{" "}
                <Button
                  onClick={() => handleOnDelete(item._id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentTable;
