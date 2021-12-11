import React, { Children } from "react";
import { Container } from "react-bootstrap";
import Background from "./background/Background";
import NavbarComponent from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Background />
      <NavbarComponent />
      <Container fluid="sm">{children}</Container>
    </>
  );
};

export default Layout;
