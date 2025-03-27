import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Navbar/Navbar.css";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navtop() {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-2">
          <Container className="mobile" fluid>
            <Navbar.Brand className="mobileflex flex">
             <a href="/">Home</a>
              <a href="/Search">
              <Form className="d-flex moblies">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-0"
                  aria-label="Search"
                />
                <Link to="/Search">
                  <Button variant="outline-success moblies search">
                    <FaSearch className="Search"/>
                  </Button>
                </Link>
              </Form></a>
              <Navbar.Toggle aria-controls={`${expand}`}>
                <FaRegUser size={23} />
              </Navbar.Toggle>
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  My Home
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/Home">Home</Nav.Link>
                  <Nav.Link href="/ProductDetailsPage">Product</Nav.Link>
                  <NavDropdown
                    title="Service"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Account"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Registration</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Owner Login</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <a href="/Search">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 logninput"
                    aria-label="Search"
                  />
                  <Link to="/Search">
                    <Button variant="outline-success">Search</Button>
                  </Link>
                </Form></a>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navtop;
