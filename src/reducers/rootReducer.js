import { combineReducers } from 'redux';
import weatherReducer from './weather';

const rootReducer = combineReducers({ 
    weatherToday: weatherReducer,
});

export default rootReducer;