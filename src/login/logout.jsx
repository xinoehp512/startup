import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Logout(props) {

    async function logout() {
        const response = await fetch(endpoint, {
            method: 'delete',
        });
        if (response?.status === 204) {
            props.onLogout(userName);
        } else {
            const body = await response.json();
            console.log("Error!" + body);
            // setDisplayError(`⚠ Error: ${body.msg}`);
        }
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