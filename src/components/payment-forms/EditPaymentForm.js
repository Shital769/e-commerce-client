import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updatePayment } from "../../pages/payment/PaymentAction";
import { CustomInputField } from "../custom-input-field/CustomInputField";

const EditPaymentForm = ({ selectedPayment }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(selectedPayment);
  }, [setForm, selectedPayment]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { __v, updatedAt, createdAt, ...rest } = form;

    dispatch(updatePayment(rest));
  };

  console.log(form);
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Status: </Form.Label>
          <Form.Check
            type="radio"
            name="status"
            label="Active"
            checked={form.status === "active"}
            value="active"
            onChange={handleOnChange}
          />
          <Form.Check
            type="radio"
            name="status"
            label="Inactive"
            checked={form.status === "inactive"}
            value="inactive"
            onChange={handleOnChange}
          />
        </Form.Group>
        <CustomInputField
          onChange={handleOnChange}
          required={true}
          label="Name"
          name="name"
          placeholder="Credit Card"
          value={form?.name}
        />

        <CustomInputField
          onChange={handleOnChange}
          required={true}
          label="Description"
          as="textarea"
          placeholder="Please click the checout button to process for the credit card payment"
          value={form?.description}
        />
        <div className="py-3 d-grid">
          <Button type="submit" variant="success">
            Update Paymenth Method
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditPaymentForm;
