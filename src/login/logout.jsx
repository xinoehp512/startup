import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Logout(props) {

    async function logout() {
        const response = await fetch("/api/auth/logout", {
            method: 'delete',
        });
        if (response?.status === 204) {
            props.onLogout();
        } else {
            const body = await response.json();
            console.log("Error!" + body);
            // setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }
    return <div>
        <button
            type="submit"
            className="btn btn-primary"
            onClick={logout}
        >
            Logout
        </button>

    </div>
}