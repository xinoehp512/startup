import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './addtask.css';

export function AddTask() {
    return (
        <main>
            <form method="get" action="index.html" className="addtask">
                <div>
                    <label>Name</label><input type="text" className="input" />
                </div>
                <div>
                    <label>Type</label>
                    <select className="input">
                        <option>Work</option>
                        <option>School</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <label>Repeat?</label>
                    <select className="input">
                        <option>No</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Other...</option>
                    </select>
                </div>
                <div>
                    <label>Start Date</label><input type="datetime-local" className="input" />
                </div>
                <div>
                    <label>Due Date</label><input type="datetime-local" className="input" />
                </div>
                <div>
                    <label>Task Length</label>
                    <select className="input">
                        <option>5 minutes</option>
                        <option>15 minutes</option>
                        <option>30 minutes</option>
                        <option>1 hour</option>
                    </select>
                </div>
                <div>
                    <label>Scheduled Time</label><input type="time" className="input" />
                </div>

                <button type="submit">Add Task</button>
            </form>
        </main>
    );
}