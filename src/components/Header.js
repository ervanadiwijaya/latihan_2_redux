import React from "react";
import { Navbar, Form, FormControl, Button, } from "react-bootstrap";

function Header(params) {
    return (
        // <Container>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home" className="my-3">MyApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="ml-auto d-flex mb-2">
                    <FormControl type="text" placeholder="Search" className="mr-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>

        // </Container>
    )
}

export default Header;