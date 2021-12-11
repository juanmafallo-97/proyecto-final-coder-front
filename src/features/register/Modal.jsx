import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Modal, Button } from "react-bootstrap";

const RegisterModal = ({ showModal, resetRegisterState }) => {
  const [show, setShow] = useState(showModal);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Registro exitoso!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <LinkContainer to="/">
            <Button variant="primary">Ir al inicio</Button>
          </LinkContainer>
          <LinkContainer to="/login">
            <Button variant="primary">Iniciar sesión</Button>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
