import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
    actionType: ['ativo'],
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
    logged: !!localStorage.getItem('token')
});

export const request = (state, {ativo}) =>
  state.merge({ logged: ativo });

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ACTION_TYPE]: request,
});
