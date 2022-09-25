import NavBar from "./NavBar";
import QuestionList from "./QuestionList";
import { connect } from "react-redux";

const DashboardPage = ({questionsIds, questions, authedUser}) => {

    const newQuestionsIds = questionsIds.filter(
        (qId) => !(questions[qId].optionOne.votes.includes(authedUser)
                    || questions[qId].optionTwo.votes.includes(authedUser))
    );
    const doneIds = questionsIds.filter(
        (qId) => !newQuestionsIds.includes(qId)
    );

    return (
        
        <div>
            <NavBar/>
            <div className="space-for-navbar"></div>
            <div className="container">
                <div className="question-list">
                    <QuestionList 
                        name="New Questions"
                        ids={newQuestionsIds}
                    />
                    <QuestionList 
                        name="Done"
                        ids={doneIds}
                    />
                </div>
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