////constants
import { about } from '../static_data/static-data';
export const FETCH_ABOUT = 'FETCH_ABOUT';

// console.log(about.quickFacts);
export const fetchItems = () => {
    return ({
        type: FETCH_ABOUT,
        payload: about
    })
}

