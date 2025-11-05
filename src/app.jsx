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
import { AuthState } from './login/authState';


function App() {
  const [userName, setUserName] = React.useState('');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  React.useEffect(() => {
    async function getUsername() {
      const response = await fetch("/api/username");
      if (response?.status === 200) {
        const body = await response.json();
        setAuthState(AuthState.Authenticated);
        setUserName(body.userName);
      } else {
        const body = await response.json();
        setDisplayError(`⚠ Error: ${body.msg}`);
      }
    }
    getUsername();
  }, [])
  return (
    <BrowserRouter>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="schedule.html">Timebox</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              {authState === AuthState.Authenticated ?
                (<Nav className="navbar-nav me-auto">
                  <Nav.Link as={NavLink} className='nav-link' to="schedule">My Schedule</Nav.Link>
                  <Nav.Link as={NavLink} className='nav-link' to="addtask">Add Task</Nav.Link>
                  <Nav.Link as={NavLink} className='nav-link' to="social">Chat with Friends</Nav.Link>
                  <Nav.Link as={NavLink} className='nav-link' to="profile">{userName}</Nav.Link>
                  <Nav.Link as={NavLink} className='nav-link' to="login">Logout</Nav.Link>
                </Nav>) :
                (<Nav className="navbar-nav me-auto">
                  <Nav.Link as={NavLink} className='nav-link' to="login">Login</Nav.Link>
                </Nav>)
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Routes>
        <Route
          path='/'
          element={
            <Login
              userName={userName}
              authState={authState}
              onAuthChange={(userName, authState) => {
                setAuthState(authState);
                setUserName(userName);
              }}
            />
          }
          exact
        />
        <Route path='/schedule' element={<Schedule />} exact />
        <Route
          path='/login'
          element={
            <Login
              userName={userName}
              authState={authState}
              onAuthChange={(userName, authState) => {
                setAuthState(authState);
                setUserName(userName);
              }}
            />
          }
          exact
        />
        <Route path='/addtask' element={<AddTask />} exact />
        <Route path='/social' element={<Social userName={userName} />} exact />
        <Route path='/profile' element={<Profile userName={userName} />} exact />
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
export default App;