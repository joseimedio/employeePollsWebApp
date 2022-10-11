import NavBar from "./NavBar";
import QuestionList from "./QuestionList";
import { connect } from "react-redux";
import { useState } from "react";

const DashboardPage = ({questionsIds, questions, authedUser}) => {
    const [showUnanswered, setShowUnanswered] = useState(true);

    const newQuestionsIds = questionsIds.filter(
        (qId) => !(questions[qId].optionOne.votes.includes(authedUser)
                    || questions[qId].optionTwo.votes.includes(authedUser))
    );
    const doneIds = questionsIds.filter(
        (qId) => !newQuestionsIds.includes(qId)
    );

    const handleClick = (e) => {
        e.preventDefault();
        setShowUnanswered(!showUnanswered);
    }

    return (
        
        <div>
            <NavBar/>

            <div className="container">
                <div className="question-list">
                    {showUnanswered
                    ? <QuestionList 
                        name="New Questions"
                        ids={newQuestionsIds}
                    />
                    : <QuestionList 
                        name="Done"
                        ids={doneIds}
                    />}
                </div>
                <form>
                    <button onClick={handleClick}>Switch to {showUnanswered ? "answered" : "unanswered"} polls</button>
                </form>
            </div>
            
        </div>
    )
};

const mapStateToProps = ({questions, authedUser}) => ({
    questionsIds: Object.keys(questions).sort(
        (a,b) => questions[b].timestamp - questions[a].timestamp
    ),
    questions,
    authedUser,
});

export default connect(mapStateToProps)(DashboardPage);