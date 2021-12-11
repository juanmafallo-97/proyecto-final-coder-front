import React from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import { Container, Form, Button } from "react-bootstrap";

const initialValues = {
  name: "",
  avatar: "",
  email: "",
  age: "",
  phone: "",
  address: "",
  password: "",
  repeatedPassword: ""
};

const validate = (values) => {
  const errors = {};
  const emailRegex = /^[^@]+@[^\s@]+\.[^@]{2,}$/i;
  if (!values.name) {
    errors.name = "Ingrese su nombre";
  }
  if (!values.email) {
    errors.email = "Ingrese su email";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "El formato de email no es válido";
  }
  if (!values.age) {
    errors.age = "Ingrese su edad";
  }
  if (!values.phone) {
    errors.phone = "Ingrese su número de teléfono";
  }
  if (!values.address) {
    errors.address = "Ingrese su dirección";
  }
  if (!values.password) {
    errors.password = "Ingrese una contraseña";
  }
  if (!values.repeatedPassword) {
    errors.repeatedPassword = "Ingrese nuevamente su contraseña";
  } else if (values.repeatedPassword !== values.password) {
    errors.repeatedPassword = "Las contraseñas no coinciden";
  }
  return errors;
};

const RegisterForm = ({ handleSubmit }) => {
  const pending = useSelector((state) => state.register.pending);

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
          setFieldValue,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        return (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.name && !errors.name}
                isInvalid={touched.name && errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="form-group">
              <label for="file">Avatar</label>
              <input
                id="avatar"
                name="avatar"
                type="file"
                onChange={(event) => {
                  setFieldValue("avatar", event.currentTarget.files[0]);
                }}
                className="form-control"
              />
            </div>
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
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                name="age"
                id="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.age && !errors.age}
                isInvalid={touched.age && errors.age}
              />
              <Form.Control.Feedback type="invalid">
                {errors.age}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.phone && !errors.phone}
                isInvalid={touched.phone && errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.address && !errors.address}
                isInvalid={touched.address && errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
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
            <Form.Group>
              <Form.Label>Repita su contraseña</Form.Label>
              <Form.Control
                type="password"
                name="repeatedPassword"
                id="repeatedPassword"
                value={values.repeatedPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.repeatedPassword && !errors.repeatedPassword}
                isInvalid={touched.repeatedPassword && errors.repeatedPassword}
                disabled={!values.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.repeatedPassword}
              </Form.Control.Feedback>
            </Form.Group>
            <Container className="text-center mt-3">
              <Button
                className="mt-3 btn btn-primary"
                type="submit"
                disabled={!(dirty && isValid) || pending}
              >
                {pending ? "Enviando..." : "Registrarse!"}
              </Button>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};
export default RegisterForm;
