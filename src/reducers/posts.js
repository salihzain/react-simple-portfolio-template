import { FETCH_POSTS } from '../actions';

export default function posts(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS: {
            return {
                posts: action.payload
            }
        }
        default: {
            return state;
        }
    }
}