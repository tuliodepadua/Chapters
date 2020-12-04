import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
*/

export const { Types, Creators } = createActions({
  acaoMenu: ["text"],
  acaoMenuIframe: ["text"]
});

/**
 * Handlers
 */
const INITIAL_STATE = 'close';

const acaoMenu = (state = INITIAL_STATE, action) => 
        state == 'open' ? "close" : "open";

const acaoMenuIframe = (state = INITIAL_STATE, action) => 
    state == 'open' ? "close" : "open";

/**
 * Reducer
 */
const menu = createReducer(INITIAL_STATE, {
  [Types.ACAO_MENU]: acaoMenu
});
const IframeMenu = createReducer(INITIAL_STATE, {
  [Types.ACAO_MENU_IFRAME]: acaoMenuIframe
});

export {  menu, IframeMenu}