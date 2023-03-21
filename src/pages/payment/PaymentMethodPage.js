import React from 'react'
import { useDispatch } from "react-redux";
import { Button } from 'react-bootstrap';
import { setShowModal } from "../../system/systemSlice";
import { AdminLayout } from "../layout/AdminLayout";
import { setSelectedPayments } from "./PaymentSlice";
import PaymentTable from '../../components/custom-tables/PaymentTable';

const PaymentMethodPage = () => {
  const dispatch = useDispatch();

  const handleOnAdd = () => {
    console.log("you selected");

    dispatch(setShowModal(true));
    dispatch(setSelectedPayments({}));
  };
  return (
    <AdminLayout>
      <div className="mt-3">
        <h3>Payment Management</h3>
        <hr />
      </div>
      <div className="text-end">
        <Button onClick={handleOnAdd} variant="success">
          {" "}
          +Add New Payment Method
        </Button>
      </div>
      {/* <AddNewPayment /> */}
      <hr />

      <PaymentTable />
    </AdminLayout>
  );
};

export default PaymentMethodPage;
