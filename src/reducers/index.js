import {combineReducers} from 'redux';
import courses from './courseREducer';

const rootReducer = combineReducers({
    courses // ES6 shorthand property name
});

export default rootReducer;