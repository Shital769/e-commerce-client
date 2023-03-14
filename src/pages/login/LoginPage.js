import React, { useRef, useEffect } from "react";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin, loginAction } from "./authAction";
import { Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passRef = useRef("");
  //calling updated state from store connected with authSlice
  const { isLoading, user } = useSelector((state) => state.user);
  console.log(user);

  const location = useLocation();

  const origin = location?.state?.from?.pathname || "/dashboard";

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formDta = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    //dispathch login action to call api
    if (!formDta.email || !formDta.password) {
      return alert("Please fill in the both fields!");
    }
    dispatch(loginAction(formDta));
  };

  useEffect(() => {
    user?._id ? navigate(origin) : dispatch(autoLogin());

    //TODO: make router private and auto login
  }, [user?._id, navigate, origin, dispatch]);
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
            {isLoading ? (
              <Spinner variant="dark" animation="border" />
            ) : (
              "Submit"
            )}
          </Button>

          <div className="text-center p-5">
            Forget password? <a href="/reset-password">Reset now</a>
          </div>
        </Form>
      </div>

      <Footer />
    </div>
  );
};
