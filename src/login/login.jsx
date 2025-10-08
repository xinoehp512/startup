import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {
    return (
        <main className="container-fluid text-center">
            <div>

                <button className="btn btn-primary mb-3">
                    <span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
                    </span>
                    Sign in with
                    Google
                </button>
                <form method="get" action="index.html">
                    <div className="input-group mb-3">
                        <input className="form-control" type="text" placeholder="your@email.com" />
                    </div>
                    <div className="input-group mb-3">
                        <input className="form-control" type="password" placeholder="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="submit" className="btn btn-secondary">Sign Up</button>
                </form>
            </div>
        </main>
    );
}