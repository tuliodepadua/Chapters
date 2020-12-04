import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
*/

export const { Types, Creators } = createActions({
    tour360: ["text"] 
});

/**
 * Handlers
 */
const INITIAL_STATE = 'close';
  

const tour360 = (state = INITIAL_STATE, action) => 
        state == 'open' ? "close" : "open";

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.TOUR_360]: tour360 
});
