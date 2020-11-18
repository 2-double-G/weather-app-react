import {
    FETCH_WEATHER_START,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_ERROR
} from '../actions/actionTypes';

const initialState = {
    city: null,
    weather: {},
    touched: false,
    error: {
        message: null,
        isError: false
    },
    loading: false,
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_START:
            return {
                ...state,
                city: action.city,
                loading: true,
            }
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weather: action.weather,
                touched: true,
                error: {
                    isError: false
                },
                loading: false,
            }
        case FETCH_WEATHER_ERROR:
            return {
                ...state,
                touched: true,
                error: {
                    message: action.error,
                    isError: true
                },
                loading: false,
            }
        default:
            return state;
    }
}