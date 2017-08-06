import * as actions from '../actions/actionTypes';

export default function incrementCount(count) {
    return { type: actions.INCREMENT_COUNT, count };
}