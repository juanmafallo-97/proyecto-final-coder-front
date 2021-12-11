import React from "react";
import { useDispatch } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { logout } from "../../../../actions/user";

const Logoutbutton = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <NavDropdown.Item onClick={handleLogout}>Cerrar Sesión</NavDropdown.Item>
  );
};

export default Logoutbutton;
