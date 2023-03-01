import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import { postNewPayment } from "../../pages/payment/PaymentAction";

const AddNewPayment = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewPayment({ name }));
  };
  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        className="text-center border p-4 rounded shadow-lg"
      >
        <Row>
          <Col>
              <Form.Control
                placeholder="Payment name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
          </Col>
          <Col>
            <Button type="submit" variant="warning">
              Add New Payment
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddNewPayment;
