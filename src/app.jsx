import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Schedule } from './schedule/schedule';
import { Login } from './login/login';
import { AddTask } from './addtask/addtask';
import { Social } from './social/social';
import { Profile } from './profile/profile';


export default function App() {
    return (
        <BrowserRouter>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="schedule.html">Timebox</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="navbar-nav me-auto">
                                <Nav.Link as={NavLink} className='nav-link' to="">My Schedule</Nav.Link>
                                <Nav.Link as={NavLink} className='nav-link' to="login">Login</Nav.Link>
                                <Nav.Link as={NavLink} className='nav-link' to="addtask">Add Task</Nav.Link>
                                <Nav.Link as={NavLink} className='nav-link' to="social">Chat with Friends</Nav.Link>
                                <Nav.Link as={NavLink} className='nav-link' to="profile">User Unknown</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Routes>
                <Route path='/' element={<Schedule />} exact />
                <Route path='/login' element={< Login />} exact />
                <Route path='/addtask' element={<AddTask />} exact />
                <Route path='/social' element={<Social />} exact />
                <Route path='/profile' element={<Profile />} exact />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className="container-fluid bg-dark text-white-50">
                <span>Created by Ryan Richards</span>
                <a className="text-reset" href="https://github.com/xinoehp512/startup">Link to GitHub</a>
            </footer>
        </BrowserRouter>
    );
}
function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}