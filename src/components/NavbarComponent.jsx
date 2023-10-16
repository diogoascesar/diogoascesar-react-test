import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavbarComponent() {


    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Diogo César's Pets</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Pet List</Nav.Link>
                        <Nav.Link href="/createPet">New Pet</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}