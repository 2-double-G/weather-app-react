import { combineReducers } from 'redux';
import weatherReducer from './todayWeather';

const rootReducer = combineReducers({ 
    weatherToday: weatherReducer,
});

export default rootReducer;