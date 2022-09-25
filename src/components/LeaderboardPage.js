import { connect } from "react-redux";
import NavBar from "./NavBar";

const LeaderboardPage = ({questions, users, authedUser}) => {
    let usersInOrder = [];
    let i = 0;

    if (Object.keys(users) !== []){

        usersInOrder = 
            Object.keys(users).map((userId) => {
                const id = users[userId].id;
                const questionsCreated = users[userId].questions.length;
                const questionsAnswered = Object.keys(questions).filter(qId=>
                    questions[qId].optionOne.votes.includes(userId)
                    || questions[qId].optionTwo.votes.includes(userId)).length;
                return {
                    id,
                    questionsCreated,
                    questionsAnswered,
                    totalQuestions: questionsCreated + questionsAnswered,
                }
            }).sort((a,b) => b.totalQuestions - a.totalQuestions);

        console.log(usersInOrder);
    }
    

    return (
        
        authedUser === null 
        ? <div className="loading"></div>
        :
        <div>
            <NavBar/>
            <h1>Leaderboard:</h1>
            <div className="leaderboard">
                <div className="user-list-element">
                    <div className="cell-small"><strong></strong></div>
                    <div className="cell"><strong>User</strong></div>
                    <div className="cell"><strong>Created</strong></div>
                    <div className="cell"><strong>Answered</strong></div>
                </div>
                {
                    usersInOrder.map((user)=>{
                        i++;
                        return (
                            <div 
                            key={user.id} 
                            className="user-list-element"
                            style= {{ color: user.id===authedUser ? null : "grey"}}>
                                <div className="cell-small">{i}</div>
                                <div className="cell">
                                    <img className="avatar avatar-small" src={users[user.id].avatarURL}></img>
                                    {`${users[user.id].name}`}
                                </div>
                                <div className="cell">{`${user.questionsCreated} questions`}</div>
                                <div className="cell">{`${user.questionsAnswered} questions`}</div>
                            </div>
                        )
                        
                    })
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

export default connect(mapStateToProps)(LeaderboardPage);