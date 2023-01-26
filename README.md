# Employee Polls Project (React + Redux)

This project was completed as a part of the React Nanodegree Program (Udacity) in October 2022 by José Imedio.

It consists on a web app to be used internally at a simulated company. This app allows employees to create polls to be answered by their colleagues and themselves. 

The app consists of 4 pages:
- Log In: the user simply chooses their name from a list. 
- Home: contains all polls available, divided into answered and unanswered. The user can complete the ones they didn't complete before. And also see the results of the ones they already completed. 
- Leaderboard: classification table showing how many polls each user created and how many they answered. 
- New: create a new poll.

## Instructions
To launch the app:
- install all project dependencies with 'npm install'
- start the development server in '/src' with 'npm start'

## Content
- README.md
- package-lock.json 
- package.json 
- LICENSE.txt
- CODEOWNERS.txt
- babel.config.js
- .gitignore
- .npmignore
#### public 
#### src 

## The src folder
- index.js
- reportWebVitals.js 
- setupTests.js
- CSS files
- SVG logo.
#### actions
Contains the Redux actions `authedUser`, `questions`, `users` and `shared`.
#### components
Contains all the React components:
- App.js              -> Initializes the app.
- CreatePollPage.js   -> Rendered when the authedUser wants to create a new question.
- DashboardPage.js    -> Homepage where all the answered and unanswered questions are shown. It calls `QuestionList.js` twice.
- Error404.js         -> Rendered when the user tries to access any page other than the login page without being authenticated.
- LeaderboardPage.js  -> Leaderboard.
- LoginPage.js        -> Log In form. Rendered when the app is launched or after the Error 404 page is shown.
- NavBar.js           -> Navigation bar. Rendered inside all of the other components.
- PollPage.js         -> Rendered when the user clicks on a specific question on the homepage. 
- QuestionCard.js     -> Paints a card for a specific question on the homepage.
- QuestionList.js     -> Displays a list of `QuestionCard.js` on the homepage.
#### middleware
Contains the Redux middleware files `logger` and `index`.
#### reducers
Contains the Redux reducers `authedUser`, `questions`, `users` and `index`.
#### tests
Contains the Jest test files `_DATA.test.js`, `api.test.js`, `App.test.js` and `Error404.test.js`.
#### utils
Contains the logic to access the backend and the helper functions.

## Possible improvements
Include a proper login system, instead of simply choosing a name from a list.
Improve the web app design, which is currently extremely basic.

## Licensing, Authors and Acknowledgements
The basic website (HTML and CSS) and the simulated database containing the users and the first few questions were provided by Udacity, Inc.
