import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class CCNav extends React.Component{
    constructor() {
        super()
    }

    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary bg-dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to={'/'}>Home</Link>
                            <Link className="nav-link" to={'/login'}>Login</Link>
                            <Link className="nav-link" to={'/cart'}>Cart</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default CCNav;