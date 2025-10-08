import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './schedule.css';

export function Schedule() {
    return (
        <main>
            <div class="schedule">
                <div class="hours">
                    <div class="hour">8:00 AM</div>
                    <div class="hour">9:00 AM</div>
                    <div class="hour">10:00 AM</div>
                    <div class="hour">11:00 AM</div>
                </div>
                <div class="tasks">
                    <div class="task-block">
                        <div class="task">Brush Teeth</div>
                        <div class="task">Eat Breakfast</div>
                    </div>
                    <div class="task-block">
                        <div class="task">Task 1</div>
                        <div class="task">Task 2</div>
                    </div>
                    <div class="task-block">
                        <div class="task">Task 3</div>
                        <div class="task">Task 4</div>
                    </div>
                    <div class="task-block">
                        <div class="task">Meeting with boss for a very extremely terribly long time with a long description
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}