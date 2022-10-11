// import '../../App.css';
// import { useEffect } from "react";
// import { connect } from "react-redux";
// import { handleInitialData } from "../actions/shared";
import { Routes, Route, useLocation } from "react-router-dom";
// import DashboardPage from "./DashboardPage";
// import LeaderboardPage from "./LeaderboardPage";
// import CreatePollPage from "./CreatePollPage";
// import LoginPage from './LoginPage';
// import PollPage from './PollPage';
// import Error404 from './Error404';

const App = ({authedUser, questions}) => {
// const App = ({dispatch, authedUser, questions}) => {
//   useEffect(() => {
//     dispatch(handleInitialData());
//   }, []);

  const notLoggedIn = () => {
    return authedUser==="none"
  }

  const location = useLocation();
  const idExists = () => {
    const choppedRoute = location.pathname.split("/");        
    const id = choppedRoute[choppedRoute.length-1];
    return !(typeof(questions[id])==="undefined");
  }

  return (
    authedUser===null
    ? <div data-testid="loading-page" className="loading"></div>
    :<div data-testid="target-page">
      {
        <Routes>
          <Route path="/" exact element={notLoggedIn() ? <div>LoginPage</div> : <div>DashboardPage</div>}/>
          <Route path="/leaderboard" element={notLoggedIn() ? <div>LoginPage</div> : <div>LeaderboardPage</div>}/>
          <Route path="/add" element={notLoggedIn() ? <div>LoginPage</div> : <div>CreatePollPage</div>}/>
          <Route path="/login" element={<div>LoginPage</div>}/>
          <Route path="/questions/:id" element={
            notLoggedIn() 
            ? <div>LoginPage</div> 
            : idExists() ? <div>PollPage</div> : <div>Error404</div>
          }/>
          <Route path="/*" element={notLoggedIn() ? <div>LoginPage</div> : <div>Error404</div>}/>
        
        </Routes>
      }
    </div>
  );
};

// const mapStateToProps = ({authedUser, questions}) => ({
//   authedUser,
//   questions,
// });

// export default connect(mapStateToProps)(App);
export default App;
