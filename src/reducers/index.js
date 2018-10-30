import { combineReducers } from 'redux';
import siteIdentity from './siteIdentity';
import navs from './navs';
import about from './about';
import posts from './posts';
import work from './work';
import activeCat from './activeCat';
import cats from './cats';
import contact from './contact';

export default combineReducers({
    siteIdentity,
    navs,
    about,
    posts,
    work,
    activeCat,
    cats,
    contact
}); 