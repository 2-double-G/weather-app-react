import {
    // FETCH_WEATHER_TODAY,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_ERROR
} from '../actions/actionTypes';

const initialState = {
    weather: {},
    touched: false,
    error: {
        message: null,
        isError: false
    }
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weather: action.weather,
                touched: true,
                error: {
                    isError: false
                }
            }
        case FETCH_WEATHER_ERROR:
            return {
                ...state,
                touched: true,
                error: {
                    message: action.error,
                    isError: true
                }
            }
        default:
            return state;
    }
}