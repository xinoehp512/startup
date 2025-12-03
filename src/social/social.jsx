import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './social.css';
import { EventType, Notifier } from './notifier';

export function Social({ userName }) {
    // console.log("Top of social!");
    const [posts, setPosts] = React.useState([]);
    const [message, setMessage] = React.useState("");
    // console.log("Posts:", posts)
    // console.log("Message:", message)
    React.useEffect(() => {
        async function getPosts() {
            const response = await fetch("/api/social/posts");
            if (response?.status === 200) {
                const body = await response.json();
                // console.log("Get Posts!")
                // console.log(body.posts)
                setPosts(body.posts);
            } else {
                const body = await response.json();
                setDisplayError(`⚠ Error: ${body.msg}`);
            }
        }
        getPosts();
        Notifier.addHandler(handleEvent);

        return () => {
            Notifier.removeHandler(handleEvent);
        };
    }, []);

    function handleEvent(event) {
        let message = event.value;
        let newPosts = [];
        function updatePosts(posts) {
            for (const post of posts) {
                console.log(post.id, message.id)
                if (post.id == message.id) {
                    post.responses.push(message.response)
                }
                newPosts.push(post)
            }
            return newPosts
        }
        setPosts(updatePosts)
    }
    async function addResponse(postID, msg) {
        let chat_message = { user: userName, message: msg }
        Notifier.broadcastEvent(userName, EventType.MESSAGE, { id: postID, response: chat_message })
        const response = await fetch("/api/social/posts/responses", {
            method: "post",
            body: JSON.stringify({ id: postID, message: msg, username: userName }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            const body = await response.json();
            // console.log("Add Response!")
            // console.log(body.posts)
            setPosts(body.posts)
        } else {
            const body = await response.json();
            console.log(`⚠ Error: ${body.msg}`);
        }
    }
    function createPostRows() {
        // console.log("Rows reloaded.");
        return posts.map((post, idx) => {
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
                        <input type="text" className="user-input" onChange={(e) => setMessage(e.target.value)} placeholder={"Commenting as " + userName} />
                        <button type="submit" onClick={() => addResponse(post.id, message)}>Reply</button>
                    </div>
                </div>

            </div>
        })
    }

    // console.log("Bottom of social!");
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
                {createPostRows()}
            </section>
        </main>
    );
}