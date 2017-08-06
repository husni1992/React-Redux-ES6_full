import { combineReducers } from 'redux';
import courses from './courseReducer';
import counter from './counterReducer';

const rootReducer = combineReducers({
    courses,
    counter
});

export default rootReducer;