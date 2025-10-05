import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


export default function App() {
    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="schedule.html">Timebox</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="navbar-nav me-auto">
                                <Nav.Link href="schedule.html">My Schedule</Nav.Link>
                                <Nav.Link href="login.html">Login</Nav.Link>
                                <Nav.Link href="addtask.html">Add Task</Nav.Link>
                                <Nav.Link href="social.html">Chat with Friends</Nav.Link>
                                <Nav.Link href="profile.html">User Unknown</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <main>
                App components go here.
            </main>

            <footer className="container-fluid bg-dark text-white-50">
                <span>Created by Ryan Richards</span>
                <a className="text-reset" href="https://github.com/xinoehp512/startup">Link to GitHub</a>
            </footer>
        </>
    );
}