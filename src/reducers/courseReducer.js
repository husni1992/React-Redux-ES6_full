import * as actions from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {

        case actions.LOAD_COURSES_SUCCESS:
            return action.courses;

        case actions.CREATE_COURSE:
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case actions.EDIT_COURSE:
            // let course = state.filter(el => el.title === action.courseId);
            return state;

        case actions.DELETE_COURSE:
            return state.filter(el => el.title !== action.courseId);
            
        default:
            return state;
    }
}