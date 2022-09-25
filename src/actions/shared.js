import { getInitialData, saveQuestion } from "../utils/api";
import { receiveUsers, addQuestionToUser } from "./users";
import { receiveQuestions, addQuestion } from "./questions";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = 'none';

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData().then(({users,questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(AUTHED_ID));
        });
    };
}

export function handleAddQuestion (question) {
    return (dispatch) => {
        return saveQuestion(question)
        .then((value) => {
            console.log(value);
            dispatch(addQuestion(value));
            dispatch(addQuestionToUser({
                qId: value.id, 
                authorId: value.author,
            }));
        }).catch((e) => {
            console.warn("Error in handleAddQuestion: ", e);
        });
    }
}