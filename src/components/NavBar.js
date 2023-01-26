import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const greyIconURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_mX2fvgErDkDqDuXuh_zVs5CpE9qvs3maItbzDH-VzH3wzbRmNtEEqsyfUzZRSJhU54&usqp=CAU';

const NavBar = ({authedUser, users, dispatch}) => {

    const navigate = useNavigate();

    const handleLogOut = () => {

        dispatch(setAuthedUser("none"));

        navigate("/login");
    }

    return (
        authedUser===null
        ? <div className="loading"></div>
        : <nav className="nav-bar">
            <div className="nav-bar-left">
                <Link to="/" className="nav-bar-element">Home</Link>
                <Link to="/leaderboard" className="nav-bar-element">Leaderboard</Link>
                <Link to="/add" className="nav-bar-element">New</Link>
            </div>
            {
                authedUser === "none"
                ? 
                <div className="nav-bar-right">
                    <img 
                        className="avatar avatar-small" 
                        src={greyIconURL}
                        alt="avatar"
                    ></img>
                    <Link className="nav-bar-element" to="/login">Log In</Link>
                </div>
                : 
                <div className="nav-bar-right">
                    <span><strong>{authedUser}</strong></span>
                    <img 
                        className="avatar avatar-small" 
                        src={users[authedUser].avatarURL}
                        alt="avatar"
                    ></img>
                    <Link className="nav-bar-element" to="/login" onClick={handleLogOut}>Log Out</Link>
                </div>
            }
        </nav>
    )
}

const mapStateToProps = ({authedUser, users}) => ({
    authedUser,
    users,
});

export default connect (mapStateToProps)(NavBar);