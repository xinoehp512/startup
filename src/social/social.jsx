import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './social.css';

export function Social({ userName }) {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        const postsText = localStorage.getItem('posts');
        if (postsText) {
            setPosts(JSON.parse(postsText));
        } else {
            const starterPost = [
                {
                    message: "User Unknown completed all their tasks today!",
                    responses: [
                        { user: "Alice", message: "Way to go!" },
                        { user: "Bob", message: "You can do this!" },
                    ]
                }
            ]
            localStorage.setItem('posts', JSON.stringify(starterPost))
            setPosts(starterPost)
        }
    }, []);
    const postRows = posts.map((post, idx) => {
        const responses = post.responses.map((r, i) => {
            return <div className="response" key={i}>
                <img src="favicon.png" />
                {r.user}
                <div><p>{r.message}</p></div>
            </div>
        });
        return <div className="post" key={idx}>
            <div className="message">{post.message}</div>
            <div className="responses">
                {responses}
                <div className="response">
                    <img src="favicon.png" />
                    {userName}
                    <form method="get" action="social.html">
                        <input type="text" className="user-input" placeholder={"Commenting as " + userName} />
                        <button type="submit">Reply</button>
                    </form>
                </div>
            </div>

        </div>
    })
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
                {postRows}
            </section>
        </main>
    );
}