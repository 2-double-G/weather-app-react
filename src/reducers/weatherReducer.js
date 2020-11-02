import { FETCH_WEATHER } from '../constants';

const weatherInfo = (state = { weatherInfo: {} }, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return {...state, weatherInfo: action.payload}
        default:
            return state;
    }
}

export default weatherInfo;