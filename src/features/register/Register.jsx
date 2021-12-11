import path from "path-browserify";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import FormData from "form-data";
import RegisterForm from "./RegisterForm";
import { register } from "../../actions/user";
import Modal from "./Modal.jsx";

const Register = () => {
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.register);
  const formData = new FormData();

  useEffect(() => {
    dispatch({ type: "REGISTER_RESET" });
  }, []);

  const handleSubmit = (values) => {
    const userData = {
      email: values.email,
      name: values.name,
      avatar: values.avatar,
      avatarFilename: Date.now() + path.extname(values.avatar.name),
      age: values.age,
      phone: values.phone,
      address: values.address,
      password: values.password
    };

    formData.append("avatar", userData.avatar, userData.avatarFilename);
    formData.append("name", userData.name);
    formData.append("avatarFilename", userData.avatarFilename);
    formData.append("email", userData.email);
    formData.append("age", userData.age);
    formData.append("phone", userData.phone);
    formData.append("address", userData.address);
    formData.append("password", userData.password);
    dispatch(register(formData));
  };
  return (
    <Container fluid="sm">
      <Row>
        <Col md={10} lg={8} className="mx-auto pt-5">
          <Container fluid className="common-box">
            <h3 className="text-center m-2">
              Completá tus datos para registrarte
            </h3>
            <RegisterForm handleSubmit={handleSubmit}></RegisterForm>
          </Container>

          {registerState.error && (
            <Alert variant="danger" className="text-center container-sm">
              <p>Ha ocurrido un error con el registro: {registerState.error}</p>
            </Alert>
          )}
        </Col>
      </Row>
      {/* {registerState.success && <Modal showModal={true}></Modal>} */}
    </Container>
  );
};

export default Register;
