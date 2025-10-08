import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

export function Profile() {
    return (
        <main>
            <div class="profile-card">
                <div class="profile-img"><img src="favicon.png" /></div>
                <div class="profile-name">User Unknown</div>
            </div>
        </main>
    );
}