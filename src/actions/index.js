////constants
import { about, posts, work, cats } from '../static_data/static-data';


export const FETCH_ABOUT = 'FETCH_ABOUT';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_WORK = 'FETCH_WORK';
export const SET_ACTIVE_CAT = 'SET_ACTIVE_CAT';
export const FETCH_CATS = 'FETCH_CATS';

export const fetchItems = () => {
    return ({
        type: FETCH_ABOUT,
        payload: about
    })
}


export const fetchPosts = () => {
    return {
        type: FETCH_POSTS,
        payload: posts
    }
}

export const fetchWork = () => {
    return {
        type: FETCH_WORK,
        payload: work
    }
}

export const setActiveCat = (e) => {
    return {
        type: SET_ACTIVE_CAT,
        payload: e.target.value
    }
}

export const fetchCats = () => {
    return {
        type: FETCH_CATS,
        payload: cats
    }
}