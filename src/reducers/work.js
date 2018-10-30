import { FETCH_WORK } from '../actions';

export default function work(state = {}, action) {
    switch (action.type) {
        case FETCH_WORK: {
            return {
                ...state,
                work: action.payload
            }
        }
        default: {
            return state;
        }
    }
}