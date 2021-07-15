import React from "react";
import { Navbar, Form, FormControl, Button, } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchNotes } from "../features/noteSlice";

const Header = () => {
    const dispatch = useDispatch();
    // const [query, setQuery] = useState("");
    const handleSearch = (e) => {
        dispatch(fetchNotes(e.target.value));
        // e.preventDefault();
    }
    return (
        // <Container>
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home" className="my-3">MyApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="ml-auto d-flex mb-2"  >
                    <FormControl type="text" placeholder="Search" className="mr-2" onChange={handleSearch} />
                    {/* <Button variant="outline-light" type="submit">Search</Button> */}
                </Form>
            </Navbar.Collapse>
        </Navbar>

        // </Container>
    )
}

export default Header;