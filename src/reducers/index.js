import { combineReducers } from 'redux';
import courses from './courseReducer';
import students from './studentReducer';

const rootReducer = combineReducers({
    courses,
    students
});

export default rootReducer;