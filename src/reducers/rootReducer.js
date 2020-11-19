import { combineReducers } from 'redux';
import weatherReducer from './weather';
import filterReducer from './filter';

const rootReducer = combineReducers({ 
    weatherToday: weatherReducer,
    filter: filterReducer
});

export default rootReducer;