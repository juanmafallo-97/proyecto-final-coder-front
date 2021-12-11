import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import Logoutbutton from "./LogoutButton";
import "./styles.css";

const NavbarComponent = () => {
  const userName = useSelector((state) =>
    state.session.user ? state.session.user.first_name : null
  );

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="nav-component"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>DS - ISP</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Calendario</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            {userName ? (
              <NavDropdown
                title={
                  <>
                    <FaUserCircle className="fs-4 mr-2" />
                    {userName}
                  </>
                }
                id="collasible-nav-dropdown"
              >
                <LinkContainer to="/">
                  <NavDropdown.Item>Perfil</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/">
                  <NavDropdown.Item>Mis Posts</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <Logoutbutton />
              </NavDropdown>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Iniciar Sesión</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Registrarse</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
