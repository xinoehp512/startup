import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

export function Profile({ userName }) {
    return (
        <main>
            <div className="profile-card">
                <div className="profile-img"><img src="favicon.png" /></div>
                <div className="profile-name">{userName}</div>
            </div>
        </main>
    );
}