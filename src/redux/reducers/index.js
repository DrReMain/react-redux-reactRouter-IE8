import {combineReducers} from 'redux';
import todos from './todos';
import fetchApi from './fetchApi'

const rootReducer = combineReducers({
    todos,
    fetchApi
});

export default rootReducer;
