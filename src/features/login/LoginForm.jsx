import React from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import { Container, Form, Button } from "react-bootstrap";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
  const emailRegex = /^[^@]+@[^\s@]+\.[^@]{2,}$/i;

  if (!values.email) {
    errors.email = "Ingrese su email";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "El formato de email no es válido";
  }
  if (!values.password) {
    errors.password = "Ingrese una contraseña";
  }
  return errors;
};

const LoginForm = ({ handleSubmit }) => {
  const pending = useSelector((state) => state.session.pending);

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        const {
          values,
          handleSubmit,
          handleChange,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        return (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Container className="text-center mt-3">
              <Button
                className="btn btn-primary"
                type="submit"
                disabled={!(dirty && isValid) || pending}
              >
                {pending ? "Enviando..." : "Iniciar Sesión"}
              </Button>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};
export default LoginForm;
