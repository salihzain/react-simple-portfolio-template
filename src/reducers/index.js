import { combineReducers } from 'redux';
import siteIdentity from './siteIdentity';
import navs from './navs';
import homenavs from './homenavs';
import about from './about';

export default combineReducers({
    siteIdentity,
    navs,
    homenavs,
    about
}); 