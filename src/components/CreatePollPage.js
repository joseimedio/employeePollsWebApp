import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { handleAddQuestion } from "../actions/shared";

const CreatePollPage = ({dispatch, authedUser, users}) => {
    const [submittingForm, setSubmittingForm] = useState(false);
    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");

    const handleChange = (e) => {
        const input = e.target.value;
        const inputField = e.target.name;

        inputField === "optionOne"
        ? setOptionOneText(input)
        : setOptionTwoText(input)
    }

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmittingForm(true);
        dispatch(handleAddQuestion({
                author: authedUser,
                optionOneText,
                optionTwoText,
            }))
                .then(() => navigate("/"));
    }

    return (
        typeof(authedUser)!=='string' || submittingForm
        ? <div className="loading"></div>
        :<div>
            <NavBar />
            <h1>Create a new question:</h1>
            <div className="poll">
                <img className="avatar" src={users[authedUser].avatarURL}></img>
                <h3>{`Author: ${authedUser}`}</h3>
                <p>Would you rather...</p>
                <form
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text"
                        name="optionOne"
                        value={optionOneText}
                        onChange={handleChange}
                        placeholder="Write the first option"
                    ></input>
                    <input 
                        type="text"
                        name="optionTwo"
                        value={optionTwoText}
                        onChange={handleChange}
                        placeholder="Write the second option"
                    ></input>
                    <div>
                        <button>Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser, users}) => ({
    authedUser,
    users,
})

export default connect (mapStateToProps)(CreatePollPage);