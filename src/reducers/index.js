import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import counter from './counterReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    counter
});

export default rootReducer;