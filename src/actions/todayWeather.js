import {
    // FETCH_WEATHER_TODAY,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_ERROR
} from './actionTypes';

export function fetchTodayWeather(city) {
    return async dispatch => {
        try {
            const API_KEY = '4248d412b7d3efc097f20f1640cf0f2d';
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
         
            if (data.cod === '404') throw new Error(`City not found`);

            dispatch(fetchWeatherSuccess(data));
        } catch (error) {
            dispatch(fetchWeatherError(error));          
        }
    }
}

export function fetchWeatherSuccess(weather) {
    return {
        type: FETCH_WEATHER_SUCCESS,
        weather
    }
}

export function fetchWeatherError(error) {
    return {
        type: FETCH_WEATHER_ERROR,
        error: error.message
    }
}