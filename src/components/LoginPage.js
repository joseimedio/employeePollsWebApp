import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import NavBar from "./NavBar";

const LoginPage = ({users, dispatch, authedUser}) => {
    const greyIconURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_mX2fvgErDkDqDuXuh_zVs5CpE9qvs3maItbzDH-VzH3wzbRmNtEEqsyfUzZRSJhU54&usqp=CAU';


    const ids = Object.keys({users}.users);

    const navigate = useNavigate();

    const changeUser = (e) => {
        e.preventDefault();

        dispatch(setAuthedUser(e.target.value));     
        
        navigate("/");
    }

    return (
        Object.keys(users).length === 0
        ? <div className="loading"></div>
        : <div>
            <NavBar />
            <div className="poll">
                <img className="avatar" src={greyIconURL}></img>
                <h3>Select your username:</h3>
                <form
                    onChange={changeUser}
                >
                    <select>
                        {authedUser === "none" ? <option>Choose a user</option> : null}
                        {
                            ids.length===0
                            ? null
                            :ids.map((id) => {
                                return (
                                    <option 
                                        key={id}
                                        value={id}
                                    >{users[id].name}</option>
                                )   
                            })
                        }
                    </select>
                    
                </form>
            </div>
            
        </div>
        
    )
}

const mapStateToProps = ({users, authedUser}) => ({
    users,
    authedUser,
});

export default connect (mapStateToProps)(LoginPage);