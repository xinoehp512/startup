import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthState } from './authState';
import { MessageDialog } from './messageDialog';

export function LoginPanel(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      props.onLogin(userName);
    } else {
      const body = await response.json();
      console.log("Error!" + body);
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return <div>
    <button className="btn btn-primary mb-3">
      <span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
      </span>
      Sign in with
      Google
    </button>
    <div className="input-group mb-3">
      <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
    </div>
    <div className="input-group mb-3">
      <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
    </div>
    <button type="submit" className="btn btn-primary" onClick={loginUser} disabled={!userName || !password}>Login</button>
    <button type="submit" className="btn btn-secondary" onClick={createUser} disabled={!userName || !password}>Sign Up</button>
    <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
  </div>
}