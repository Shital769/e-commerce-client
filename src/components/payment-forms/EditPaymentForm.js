import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updatePayment } from "../../pages/payment/PaymentAction";

const EditPaymentForm = ({ selectedPayment }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(selectedPayment);
  }, [selectedPayment]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { _id, name, status } = formData;

    dispatch(updatePayment({ _id, name, status }));
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
            <Form.Select name="status" onChange={handleOnChange} required>
              <option value="">--status--</option>
              <option
                value="inactive"
                selected={formData?.status === "inactive"}
              >
                Inactive
              </option>
              <option value="active" selected={formData?.status === "active"}>
                Active
              </option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Control
              placeholder="payment name"
              name="name"
              onChange={handleOnChange}
              required
              value={formData?.name}
            />
          </Col>
          <Col>
            <Button type="submit" variant="warning">
              Update
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditPaymentForm;
