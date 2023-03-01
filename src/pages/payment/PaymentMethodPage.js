import AddNewPayment from "../../components/payment-forms/AddNewPayment";
import PaymentTable from "../../components/payment-forms/PaymentTable";
import { AdminLayout } from "../layout/AdminLayout";




const PaymentMethodPage = () => {
  return (
    <AdminLayout>
      <div className="mt-3">
        <h3>Payment Management</h3>
        <hr />
      </div>
      <AddNewPayment />

      <PaymentTable />

    </AdminLayout>
  );
};

export default PaymentMethodPage;
