# Timebox - task management and scheduling

[My Notes](notes.md)


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Do you feel overwhelmed by all the tasks that you have to do? Do you have goals that you are struggling to achieve? Do you wonder each night where the day has gone? Perhaps Timebox is for you! Timebox combines scheduling and to-do lists to create a day-to-day plan for your life. It allows you to break down high-level goals into simple tasks, create atomic habits, budget your time, and even share your progress with friends. Take control of your time, with Timebox.


### Design

![Design image](WebsiteDesignStartup.jpg)




### Key features

- Secure login over HTTPS
- Allow user to enter in tasks
- Store database of user tasks persistently
- Generate a schedule for the day based on tasks
- Provide the user with feedback regarding tasks completed
- Allow for sharing of task completions with friends
- Store user messages and conversations

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Structure of the application. Pages include login page, task enter page, schedule page, and social page.
- **CSS** - Style of the application. Used to create good visual appeal.
- **React** - Components for each page. Efficient updating of components with user input and routing (task selection, page changes)
- **Service** - Backend service with endpoints for:
    - login
    - entering tasks
    - retrieving tasks
    - sending user messages
    - retrieving user responses
    - API call to Google Calendar
    - Register, login, and logout users.
- **DB/Login** - Store users, tasks, and messages. Register and login users.
- **WebSocket** - Users are able to communicate with each other on public feeds.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://ryanrichards.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Four HTML pages: a main page with the user's schedule, a login page, a page to add tasks, and a chat page.
- [x] **Proper HTML element usage** - Body, header, footer, nav and main elements all properly used.
- [x] **Links** - Each page contains links to the other pages in the header. The login page links automatically to the main page.
- [x] **Text** - Textual content headers, user-generated textual content.
- [x] **3rd party API placeholder** - The finished application will retrieve information from Google Calendar to fill out the schedule.
- [x] **Images** - Images used for user avatars.
- [x] **Login placeholder** - Login page with input fields and submit button, as well as a placeholder to sign in with Google. Username placeholder in the header.
- [x] **DB data placeholder** - User tasks and message histories will be stored in a database.
- [x] **WebSocket placeholder** - As users submit messages to chat, the page will be updated in real-time to reflect the new messages.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
