import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const PaymentForm = () => {
  const [formData, setFormData] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  console.log(formData);
  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        className="text-center border p-4 rounded shadow-lg"
      >
        <Row>
          <Col>
            <Form.Select
              onChange={handleOnChange}
              name="payment method"
              required
            >
              <option>PayPal</option>
              <option>Debit</option>
              <option>Netbanking</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Control
              placeholder="payment description"
              name="name"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col>
            <Button type="submit" variant="warning">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PaymentForm;
