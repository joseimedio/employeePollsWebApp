import '../App.css';
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Routes, Route, useLocation } from "react-router-dom";
import DashboardPage from "./DashboardPage";
import LeaderboardPage from "./LeaderboardPage";
import CreatePollPage from "./CreatePollPage";
import LoginPage from './LoginPage';
import PollPage from './PollPage';
import Error404 from './Error404';

const App = ({dispatch, authedUser, questions}) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

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
    ? <div className="loading"></div>
    :<div>
      {
        <Routes>
          <Route path="/" exact element={notLoggedIn() ? <LoginPage /> : <DashboardPage/>}/>
          <Route path="/leaderboard" element={notLoggedIn() ? <LoginPage /> : <LeaderboardPage/>}/>
          <Route path="/add" element={notLoggedIn() ? <LoginPage /> : <CreatePollPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/questions/:id" element={
            notLoggedIn() 
            ? <LoginPage /> 
            : idExists() ? <PollPage/> : <Error404/>
          }/>
          <Route path="/*" element={notLoggedIn() ? <LoginPage /> : <Error404/>}/>
        
        </Routes>
      }
    </div>
  );
};

const mapStateToProps = ({authedUser, questions}) => ({
  authedUser,
  questions,
});

export default connect(mapStateToProps)(App);
