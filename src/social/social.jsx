import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './social.css';

export function Social({ userName }) {
    console.log("Top of social!");
    const [posts, setPosts] = React.useState([]);
    const [message, setMessage] = React.useState("");
    React.useEffect(() => {
        async function getPosts() {
            const response = await fetch("/api/social/posts");
            if (response?.status === 200) {
                const body = await response.json();
                setPosts(body.posts);
            } else {
                const body = await response.json();
                setDisplayError(`⚠ Error: ${body.msg}`);
            }
        }
        getPosts();
    }, []);
    function addResponse(post, msg) {
        console.log("Top of addResponse!");
        let posts = []
        const postsText = localStorage.getItem('posts');
        if (postsText) {
            posts = JSON.parse(postsText);
        }
        let targetPost = null;
        for (const p of posts) {
            if (p.id === post.id) {
                targetPost = p;
            }
        }
        if (targetPost == null) return;
        targetPost.responses.push({ user: userName, message: msg });
        localStorage.setItem('posts', JSON.stringify(posts));

        console.log("Bottom of addResponse!");
    }
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
                    <form method="get">
                        <input type="text" className="user-input" onChange={(e) => setMessage(e.target.value)} placeholder={"Commenting as " + userName} />
                        <button type="submit" onClick={() => addResponse(post, message)}>Reply</button>
                    </form>
                </div>
            </div>

        </div>
    })

    console.log("Bottom of social!");
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