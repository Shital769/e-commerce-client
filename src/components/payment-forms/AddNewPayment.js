import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { postNewPayment } from "../../pages/payment/PaymentAction";
import { CustomInputField } from "../custom-input-field/CustomInputField";

export const AddNewPayment = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewPayment(form));
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <CustomInputField
          onChange={handleOnChange}
          required={true}
          label="Name"
          name="name"
          placeholder="Credit card"
        />

        <CustomInputField
          onChange={handleOnChange}
          required={true}
          label="Description"
          name="description"
          as="textarea"
          placeholder="Please click the checkout button to process for the credit card payment"
        />

        <div className="py-3 d-grid">
          <Button type="submit" variant="success">
            Submit Payment Method
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddNewPayment;
