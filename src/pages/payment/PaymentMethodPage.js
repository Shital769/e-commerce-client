import React from "react";
import { AdminLayout } from "../layout/AdminLayout";

import PaymentForm from "../../components/payment-forms/PaymentForm";

const PaymentMethodPage = () => {
  return (
    <AdminLayout>
      <PaymentForm />
    </AdminLayout>
  );
};

export default PaymentMethodPage;
