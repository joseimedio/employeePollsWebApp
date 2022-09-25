# Employee Polls Project

This is José Imedio's submission for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

In order to execute the project in development mode, only `npm install` and `npm start` must be run.

Here is a brief descriptions of the folders that can be found in the `src` folder:

### Actions

Contains the Redux actions `authedUser`, `questions`, `users` and `shared`.

### Components

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

### Middleware

Contains the Redux middleware files `logger` and `index`.

### Reducers

Contains the Redux reducers `authedUser`, `questions`, `users` and `index`.

### Tests

Contains the Jest test files `_DATA.test.js` and `Error404.test.js`.

### Utils

Contains the logic to access the backend and the helper functions.