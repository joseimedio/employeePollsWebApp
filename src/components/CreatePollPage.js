import { useState } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { handleAddQuestion } from "../actions/shared";

const CreatePollPage = ({dispatch, authedUser, users}) => {

    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");

    const handleChange = (e) => {
        const input = e.target.value;
        const inputField = e.target.name;

        inputField === "optionOne"
        ? setOptionOneText(input)
        : setOptionTwoText(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

       dispatch(handleAddQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText,
        }));

        setOptionOneText("");
        setOptionTwoText("");
    }

    return (
        typeof(authedUser)!=='string'
        ? <div className="loading"></div>
        :<div>
            <NavBar />
            <h1>Create a new question:</h1>
            <div className="poll">
                <img className="avatar" src={users[authedUser].avatarURL}></img>
                <h3>{`Author: ${authedUser}`}</h3>
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