import * as actions from '../actions/actionTypes';

export default function counterReducer(state = {count: 0}, action) {
    switch (action.type) {
        case actions.INCREMENT_COUNT:
            return Object.assign({}, {count: action.count});
        default:
            return {count: state.count};
    }
}
