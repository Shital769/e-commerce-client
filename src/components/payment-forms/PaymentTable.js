import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const PaymentTable = () => {
  const { payments } = useSelector((state) => state.payments);

const handleOnDelete = (_id) => {
    if(window.confirm("Are you sure you want to delete this payment? ")) {
        
    }
}  
  return (
    <div className="mt-5">
      <div>{payments.length} products found!</div>

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
                <td>
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
