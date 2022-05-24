// export default (state={name:'Akshay'},action) =>{
//     return state;
// }
import authReducer from './auth.reducers';
import { combineReducers } from 'redux';

const rootReducer=combineReducers({
    auth:authReducer
});

export default rootReducer;