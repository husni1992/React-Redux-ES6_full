export default function studentReducer(state = {count: 0}, action) {
    switch (action.type) {
        case 'UPDATE_STUDENT':
            return Object.assign({}, {count: action.count});
        default:
            return {count: state.count};
    }
}
