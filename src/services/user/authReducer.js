import {LOGIN_REQUEST, LOGOUT_REQUEST, SUCCESS, FAILURE} from './authTypes';

const initialSate = {
    isLoggedIn:''
};

const reducer = (state = initialSate, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
            return{
                ...state
            };
        case SUCCESS:
        case FAILURE:
            return {
                isLoggedIn: action.payload
            };
        default:
            return state;            
    }  
};

export default reducer;
