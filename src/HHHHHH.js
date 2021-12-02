import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function HHHHHH() {
  return (
    <div >
      <Navbar style={{background:"darkblue"}}>
        <Container fluid>
          <Navbar.Brand href="#" style={{color:"white"}}>Facebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ color:"white" , maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ color:"white"}}>Home</Nav.Link>
              <Nav.Link href="#action2" style={{ color:"white"}}>Messages</Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="#action3">Pages</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Block
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Settings
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HHHHHH;
