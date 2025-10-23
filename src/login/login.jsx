import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthState } from './authState';
import { LoginPanel } from './loginPanel';
import { Logout } from './logout';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="container-fluid text-center">
      {
        authState === AuthState.Unauthenticated ?
          <LoginPanel
            userName={userName}
            onLogin={(userName) => onAuthChange(userName, AuthState.Authenticated)} /> :
          <Logout
            userName={userName}
            onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}
          />
      }
    </main>
  );
}