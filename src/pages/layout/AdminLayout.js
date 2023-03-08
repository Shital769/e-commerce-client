import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Header } from "./Header";
import { Footer } from "./Footer";
import SideBar from "./SideBar";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">
        <Container fluid>
          <Row>
            <Col xs="3" className="side-bar bg-dark text-light">
              

              <SideBar />
            </Col>
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

