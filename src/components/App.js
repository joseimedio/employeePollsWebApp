import '../App.css';
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./DashboardPage";
import LeaderboardPage from "./LeaderboardPage";
import CreatePollPage from "./CreatePollPage";
import LoginPage from './LoginPage';
import PollPage from './PollPage';
import Error404 from './Error404';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const notLoggedIn = () => {
    return props.authedUser==="none"
  }

  return (
    props.authedUser===null
    ? <div className="loading"></div>
    :<div>
      {
        <Routes>
          <Route path="/" exact element={notLoggedIn() ? <LoginPage /> : <DashboardPage/>}/>
          <Route path="/leaderboard" element={notLoggedIn() ? <Error404 /> : <LeaderboardPage/>}/>
          <Route path="/add" element={notLoggedIn() ? <Error404 /> : <CreatePollPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/questions/:id" element={notLoggedIn() ? <Error404 /> : <PollPage/>}/>
        </Routes>
      }
    </div>
  );
};

const mapStateToProps = ({authedUser}) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
