import { useState, useEffect } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { handleReceiveAnswer } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const PollPage = ({questions, users, authedUser, dispatch}) => {
    const [id, setId] = useState("");                               //Declare global variables.
    let votesOptionOne = [];
    let votesOptionTwo = [];
    let numVotesOpt1 = 0;
    let numVotesOpt2 = 0;
    let percVotesOpt1 = 0;
    let percVotesOpt2 = 0;

    useEffect(() => {
        const choppedUrl = window.location.href.split('/');         //Read id from current URL.
        const idAux = choppedUrl[choppedUrl.length-1];
        setId(idAux);
    }, []);

    const navigate = useNavigate();
    if(Object.keys(questions).length!==0 && id!==""){
            votesOptionOne = questions[id].optionOne.votes;             //Populate global variables after everything loaded.
            votesOptionTwo = questions[id].optionTwo.votes;

            numVotesOpt1 = votesOptionOne.length;
            numVotesOpt2 = votesOptionTwo.length;
            percVotesOpt1 = Math.floor(100*numVotesOpt1/(numVotesOpt1 + numVotesOpt2));
            percVotesOpt2 = 100 - percVotesOpt1;
    }

    const isAnswered = () => {
        return votesOptionOne.includes(authedUser)
        || votesOptionTwo.includes(authedUser);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(handleReceiveAnswer({
            authedUser,
            qid: id,
            answer: e.target.name, 
        }));
    }

    return (
        id=="" || Object.keys(questions).length===0 
        ? <div className="loading"></div>
        :
        <div >
            <NavBar/>
            <div className="poll">
                <img className="avatar" src={users[questions[id].author].avatarURL}></img>
                <h3 style={{color: questions[id].author!==authedUser ? null : "green"}}>{`Author: ${questions[id].author}`}</h3>
                
                <p>Would you rather...</p>
                <form>
                    <button 
                        className="option-box"
                        type="submit"
                        name="optionOne"
                        onClick={handleSubmit}
                        disabled={isAnswered()}
                        style={
                            votesOptionOne.includes(authedUser)
                            ?{backgroundColor:"yellowgreen"}
                            :null
                        }>{`...${questions[id].optionOne.text}?`}
                    </button>
                    <button 
                        className="option-box"
                        type="submit"
                        name="optionTwo"
                        onClick={handleSubmit}
                        disabled={isAnswered()}
                        style={
                            votesOptionTwo.includes(authedUser)
                            ?{backgroundColor:"yellowgreen"}
                            :null
                        }>{`...${questions[id].optionTwo.text}?`}         
                    </button>
                </form>
                {
                    !isAnswered()
                    ? <h4 style={{color:"red"}}>Unanswered</h4>
                    : <div>
                        <h4>Current results:</h4>

                            <div>{`Option 1 obtained ${numVotesOpt1} vote(s) (${percVotesOpt1}%).`}</div>
                            <div>{`Option 2 obtained ${numVotesOpt2} vote(s) (${percVotesOpt2}%).`}</div>

                      </div>
                }
                
            </div>
        </div>
    )
}

const mapStateToProps = ({questions, users, authedUser}) => ({
    questions,
    users,
    authedUser,
});

export default connect(mapStateToProps)(PollPage);