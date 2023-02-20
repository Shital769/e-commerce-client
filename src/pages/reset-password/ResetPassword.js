import React from "react";
import { useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { CustomInputField } from "../../components/custom-input-field/CustomInputField";
import { Button, Container, Form } from "react-bootstrap";
import { resetPassword } from "../../helper/axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [ form, setForm ] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    console.log(setForm);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message } = await resetPassword(form);

    toast[status](message);
  };

  const inputes = [
    {
      label: "Email Address",
      type: "email",
      name: "email",
      placeholder: "Sam@gmail.com",
      required: true,
    },
  ];
  return (
    <div>
      <Header />

      <div className="main reset-password p-5">
        <Container className="m-3">
          <Form
            onSubmit={handleOnSubmit}
            className="border p-4 rounded shadow-lg"
          >
            {inputes.map((item, i) => (
              <CustomInputField key={i} {...item} onChange={handleOnChange} />
            ))}

            <Button variant="primary" type="submit">
              Email me a recovery link!
            </Button>
          </Form>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default ResetPassword;
