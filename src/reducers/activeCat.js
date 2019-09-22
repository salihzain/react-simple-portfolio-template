import { SET_ACTIVE_CAT } from '../actions';

export default function activeCat(state = "All", action) {
    switch (action.type) {
        case SET_ACTIVE_CAT: {
            const activeCat = action.payload
            return activeCat;
        }

        default: {
            return state
        }
    }
}
