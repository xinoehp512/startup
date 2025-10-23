import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Logout(props) {

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }
    return <div>
        <form method="get" action="index.html">
            <button
                type="submit"
                className="btn btn-primary"
                onClick={logout}
            >
                Logout
            </button>

        </form>
    </div>
}