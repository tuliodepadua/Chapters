import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
*/

export const { Types, Creators } = createActions({
    acaoPort: ["text"],
    jobSelected: ['object']
});

/**
 * Handlers
 */
const INITIAL_STATE = 'close';
const JOB_SELECTED = {};


const jobSelected = (state = JOB_SELECTED, action) => state;


const acaoPort = (state = INITIAL_STATE, action) => 
        state == 'open' ? "close" : "open";

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ACAO_PORT]: acaoPort,
  [Types.JOB_SELECTED]: jobSelected
});
