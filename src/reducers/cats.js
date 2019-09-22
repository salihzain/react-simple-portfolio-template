import { FETCH_CATS } from '../actions';

export default function cats(state = {}, action) {
    switch (action.type) {
        case FETCH_CATS: {
            return {
                ...state,
                cats: action.payload
            }
        }

        default: {
            return state;
        }
    }
}
