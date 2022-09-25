import { saveQuestionAnswer } from "../utils/api";


export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export const ADD_QUESTION = "RECEIVE_NEW_QUESTION";
export const RECEIVE_OPTION_ONE = "RECEIVE_OPTION_ONE";
export const RECEIVE_OPTION_TWO = "RECEIVE_OPTION_TWO";

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

export function addQuestion (question){
    return{
        type: ADD_QUESTION,
        question,
    }
}

function receiveAnswer ({ authedUser, qid, answer }) {
    return {
        type: answer==="optionOne" 
                ? RECEIVE_OPTION_ONE 
                : RECEIVE_OPTION_TWO,
        authedUser,
        qid,
        answer,
    };
}

export function handleReceiveAnswer (info) {
    return (dispatch) => {
        dispatch(receiveAnswer(info));

        return saveQuestionAnswer(info).catch((e) => {
            console.warn("Error in handleReceiveAnswer: ", e);
        });
    };
}