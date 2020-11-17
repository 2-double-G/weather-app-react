import {
    // FETCH_WEATHER_TODAY,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_ERROR
} from '../actions/actionTypes';

const initialState = {
    weather: {},
    error: null,
    isError: false
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weather: action.weather
            }
        case FETCH_WEATHER_ERROR:
            return {
                ...state,
                error: action.error,
                isError: true
            }
        default:
            return state;
    }
}