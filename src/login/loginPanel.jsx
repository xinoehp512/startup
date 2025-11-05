import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthState } from './authState';

export function LoginPanel(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }
  return <div>
    <button className="btn btn-primary mb-3">
      <span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
      </span>
      Sign in with
      Google
    </button>
    <form method="get" action="index.html">
      <div className="input-group mb-3">
        <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
      </div>
      <div className="input-group mb-3">
        <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      </div>
      <button type="submit" className="btn btn-primary" onClick={loginUser} disabled={!userName || !password}>Login</button>
      <button type="submit" className="btn btn-secondary" onClick={createUser} disabled={!userName || !password}>Sign Up</button>
    </form>
  </div>
}