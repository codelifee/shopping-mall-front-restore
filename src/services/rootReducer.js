import {combineReducers} from 'redux';
import authReducer from './user/authReducer';

const rootReducer = combineReducers({
    auth : authReducer
});

export default rootReducer;