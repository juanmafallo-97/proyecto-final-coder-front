import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { login } from "../../actions/user";
import LoginForm from "./LoginForm";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const userData = { ...values };
    dispatch(login(userData));
  };

  return (
    <>
      <Container fluid="sm">
        <Row>
          <Col md={10} lg={8} className="mx-auto pt-5">
            <Container className="common-box">
              <h2 className="text-center">Iniciá sesión</h2>
              <LoginForm handleSubmit={handleSubmit}></LoginForm>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
