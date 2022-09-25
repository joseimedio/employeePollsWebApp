import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({id, questions, users, authedUser}) => {
    let author = "";
    let timestamp = "";

    if (Object.keys(questions).length !== 0) {
        author = questions[id].author;
        timestamp = questions[id].timestamp;
    }

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/poll/${id}`);
    }

    return (
        id=="" || Object.keys(questions).length===0
        ? <div>Loading</div>
        :
        <div className="question-card">
            <img className="avatar" src={users[author].avatarURL}></img>
            <h3 
                style={{color:author=== authedUser? "green" : null}}
            >{author}</h3>
            <p>{formatDate(timestamp)}</p>
            <button onClick={handleClick}>Show</button>
        </div>
    )
}

const mapStateToProps = ({questions, users, authedUser}) => ({
    questions,
    users,
    authedUser,
});

export default connect(mapStateToProps)(QuestionCard);