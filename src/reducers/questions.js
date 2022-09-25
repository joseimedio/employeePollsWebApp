import { RECEIVE_QUESTIONS, RECEIVE_OPTION_ONE, RECEIVE_OPTION_TWO, ADD_QUESTION } from "../actions/questions";

export default function questions(state={}, action) {
    console.log(action);
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]:{
                    author: action.question.author,
                    id: action.question.id,
                    optionOne: action.question.optionOne,
                    optionTwo: action.question.optionTwo,
                    timestamp: action.question.timestamp,
                }
            }
        case RECEIVE_OPTION_ONE:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    optionOne: {
                        ...state[action.qid].optionOne,
                        votes: state[action.qid].optionOne.votes.concat([action.authedUser]),
                    }
                }    
            }
        case RECEIVE_OPTION_TWO:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    optionTwo: {
                        ...state[action.qid].optionTwo,
                        votes: state[action.qid].optionTwo.votes.concat([action.authedUser]),
                        }
                    }    
            }
        default:
            return state;
    }
}