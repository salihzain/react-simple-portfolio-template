import { FETCH_ABOUT } from '../actions';

export default function about(state = {}, action) {
    switch (action.type) {
        case FETCH_ABOUT: {
            return {
                quickFacts: action.payload.quickFacts,
                skills: action.payload.skills,
                work: action.payload.work,
                education: action.payload.education,
                travel: action.payload.travel,
                press: action.payload.press,
                links: action.payload.links
            }

        }
        default: {
            console.log("default");
            return state;
        }
    }

}