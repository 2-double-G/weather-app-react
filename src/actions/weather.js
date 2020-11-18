import {
    FETCH_WEATHER_START,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_ERROR
} from './actionTypes';

import is from 'is_js';


function storeCityName(city) {
    if (city === null) {
        console.log('City was null. Get city name from local storage');
        return localStorage.getItem('city');
    } else {
        console.log('City was not null. Set new city name in local storage');
        localStorage.setItem('city', city);
        return city;
    }
}

function findPropertyValueByKey(obj, searchItem) {
    let result = null;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === searchItem) {
                result = obj[key];
                break;
            }
        }

        if (is.object(obj[key])) {
            let innerObj = findPropertyValueByKey(obj[key], searchItem);

            if (innerObj) {
                result = innerObj;
                break;
            }
        }
    }

    return result;
}

function getWeatherObject(data) {
    // Need to find this keys in data
    const keys = ['name', 'dt', 'feels_like', 'temp', 'temp_max', 'temp_min', 'main', 'icon'];
    const newObj = {};

    keys.forEach(searchItem => {
        newObj[searchItem] = findPropertyValueByKey(data, searchItem);
    });

    return newObj;
}

export function fetchTodayWeather(city) {
    return async dispatch => {

        dispatch(fetchWeatherStart(city));
        const localCityName = storeCityName(city);

        try {          
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${localCityName}&appid=4248d412b7d3efc097f20f1640cf0f2d&units=metric`);
            const data = await response.json();
            if (data.cod === '404') throw new Error(`City not found`);

            const prepareData = getWeatherObject(data);
            
            dispatch(fetchWeatherSuccess(prepareData));
        } catch (error) {
            dispatch(fetchWeatherError(error.message));          
        }
    }
}

export function fetchWeatherStart(city) {
    return {
        type: FETCH_WEATHER_START,
        city
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
        error
    }
}
