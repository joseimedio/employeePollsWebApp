import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from "../actions/users";

export default function users(state={}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        case ADD_QUESTION_TO_USER:
            console.log(action);
            return {
                ...state,
                [action.authorId]: {
                    ...state[action.authorId],
                    questions: state[action.authorId].questions.concat(action.qId),
                }
            };
        default:
            return state;
    }
}