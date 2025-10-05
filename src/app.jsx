import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


export default function App() {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="index.html">Timebox</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item"><a class="nav-link active" href="index.html">My Schedule</a></li>
                                <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                                <li class="nav-item"><a class="nav-link" href="addtask.html">Add Task</a></li>
                                <li class="nav-item"><a class="nav-link" href="social.html">Chat with Friends</a></li>
                                <li class="nav-item"><a class="nav-link user-link" href="profile.html">User Unknown</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                App components go here.
            </main>

            <footer class="container-fluid bg-dark text-white-50">
                <span>Created by Ryan Richards</span>
                <a class="text-reset" href="https://github.com/xinoehp512/startup">Link to GitHub</a>
            </footer>
        </>
    );
}