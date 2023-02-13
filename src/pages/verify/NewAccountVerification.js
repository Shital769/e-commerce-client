import React, { useState, useEffect, useRef } from "react";
import { Spinner } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { useSearchParams } from "react-router-dom";
import { postEmailVerification } from "../../helper/axios";

export const NewAccountVerification = () => {
  // grab the query string
  //call the api with the code and email
  //show the message if verified or not

  // grab the query string
  let [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});
  const isFetch = useRef(true);

  //   console.log(searchParams.get("c"));

  useEffect(() => {
    const emailVerificationCode = searchParams.get("c");
    const email = searchParams.get("email");

    // call the api
     callApi({ email, emailVerificationCode });
    isFetch.current = false;
  }, [searchParams]);

  const callApi = async (obj) => {
    if (isFetch.current) {
      const response = await postEmailVerification(obj);
      setResponse(response);
    }
  };
  return (
    <>
      <Header />

      <div className="main p-5 d-flex justify-content-center align-items-center">
        {response?.message ? (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response?.message}
          </Alert>
        ) : (
          <Spinner animation="border" variant="primary" className="fs-1" />
        )}
      </div>

      <Footer />
    </>
  );
};
