import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, actions) {
    switch (actions.type) {
        case actionTypes.LOAD_AUTHOR_SUCCESS:
            return actions.authors;

        default:
            return state;
    }
}