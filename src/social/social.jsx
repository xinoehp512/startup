import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './social.css';

export function Social() {
    return (
        <main>
            <section className="friends-bar">
                <h1>Friends</h1>
                <div className="friends-list">
                    <div className="friend">
                        <div className="profile-img"><img src="favicon.png" /></div>
                        <div className="profile-name">Alice</div>
                    </div>
                    <div className="friend">
                        <div className="profile-img"><img src="favicon.png" /></div>
                        <div className="profile-name">Bob</div>
                    </div>
                    <div className="friend">
                        <div className="profile-img"><img src="favicon.png" /></div>
                        <div className="profile-name">Eve</div>
                    </div>
                </div>
            </section>
            <section className="chat">
                <div className="post">
                    <div className="message">User Unknown completed all their tasks today!</div>
                    <div className="responses">
                        <div className="response">
                            <img src="favicon.png" />
                            Alice
                            <div>
                                <p>Way to go, User Unknown!</p>
                            </div>
                        </div>
                        <div className="response">
                            <img src="favicon.png" />
                            Bob
                            <div>
                                <p>You can do this!</p>
                            </div>
                        </div>
                        <div className="response">
                            <img src="favicon.png" />
                            User Unknown
                            <form method="get" action="social.html">
                                <input type="text" className="user-input" placeholder="Commenting as User Unknown" />
                                <button type="submit">Reply</button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}