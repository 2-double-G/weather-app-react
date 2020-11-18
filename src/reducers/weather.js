import {
    FETCH_WEATHER_START,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_ERROR
} from '../actions/actionTypes';

const initialState = {
    city: null,
    touched: false,
    weather: {},
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
                touched: true,
                weather: action.weather,
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
        case FETCH_WEATHER_START:
            return {
                ...state,
                city: action.city
            }
        default:
            return state;
    }
}