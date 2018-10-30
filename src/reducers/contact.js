import { FETCH_CONTACT } from '../actions';

export default function contact(state = {}, action) {
    switch (action.type) {
        case FETCH_CONTACT: {
            return {
                ...state,
                contact: action.payload
            }
        }
        default: {
            return state;
        }
    }
}