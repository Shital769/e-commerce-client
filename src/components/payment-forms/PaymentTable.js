import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import EditPaymentForm from "./EditPaymentForm";
import CustomModal from "../../components/custom-modal/CustomModal"
import {
  deletePayment,
  fetchPayments,
} from "../../pages/payment/PaymentAction";
import { setPayments } from "../../pages/payment/PaymentSlice";



const PaymentTable = () => {
  const dispatch = useDispatch();
  const { payments } = useSelector((state) => state.payments);

  const [selectedPayment, setSelectedPayment] = useState({});

  useEffect(() => {
    dispatch(fetchPayments());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this payment? ")) {
      dispatchEvent(deletePayment(_id));
    }
  };

  const handleOnEdit = (item) => {
    setSelectedPayment(item);
    dispatch(setPayments(true));
  };
  return (
    <div className="mt-5">
      <div>{payments.length} products found!</div>
      <CustomModal show = {false} title="Update Payments" >
        <EditPaymentForm selectedPayment={selectedPayment} />
      </CustomModal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Payment Method</th>
            <th>Name</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {payments?.length > 0 &&
            payments.map((item, i) => (
              <tr key={item?._id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td> <Button onClick={() => handleOnEdit(item)} variant="warning">
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
