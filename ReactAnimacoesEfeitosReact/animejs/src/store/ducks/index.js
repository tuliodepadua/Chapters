import { combineReducers } from 'redux';
import pgload from './pgload';
import { menu, IframeMenu } from './menu';
import portfolio from './portfolio';
import { reducer as auth } from './auth';

export default combineReducers({
    pgload,
    auth,
    menu,
    IframeMenu,
    portfolio
})
