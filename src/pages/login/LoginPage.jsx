import React, { useRef } from "react";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginPage = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formDta = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    //call the axios helper to call the api
    console.log(formDta);
  };

  return (
    <div>
      <Header />

      <div className="main login-page">
        <Form className="shadow-lg rounded" onSubmit={handleOnSubmit}>
          <h3 className="text-center"> Welcome Back!!!</h3>
          <hr className="mb -5" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <Footer />
    </div>
  );
};
