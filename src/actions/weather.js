import {
    FETCH_WEATHER_START,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_ERROR,
    FETCH_WEATHER_HOURLY_SUCCESS,
    FETCH_WEATHER_HOURLY_ERROR,
    FETCH_WEATHER_HOURLY_START,
    FETCH_WEATHER_WEEKLY_START,
    FETCH_WEATHER_WEEKLY_SUCCESS,
    FETCH_WEATHER_WEEKLY_ERROR

} from './actionTypes';

import is from 'is_js';


const storeCityName = city => {
    if (city === null) {
        console.log('City was null. Get city name from local storage');
        return localStorage.getItem('city');
    } else {
        console.log('City was not null. Set new city name in local storage');
        localStorage.setItem('city', city);
        return city;
    }
}

const findPropertyValueByKey = (obj, searchItem) => {
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

const getWeatherObject = (data, keys) => {
    const newObj = {};

    keys.forEach(searchItem => {
        newObj[searchItem] = findPropertyValueByKey(data, searchItem);
    });

    return newObj;
}

export const fetchTodayWeather = city => {
    return async dispatch => {

        dispatch(fetchWeatherStart(city));
        const localCityName = storeCityName(city);

        try {          
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localCityName}&appid=4248d412b7d3efc097f20f1640cf0f2d&units=metric`);
            const data = await response.json();

            if (data.cod === '404') throw new Error(`City not found`);

            const keys = ['name', 'dt', 'timezone', 'feels_like', 'temp', 'temp_max', 'temp_min', 'main', 'icon', 'lat', 'lon'];

            const prepareData = getWeatherObject(data, keys);

            localStorage.setItem('coordinates', JSON.stringify({
                lat: prepareData.lat,
                lon: prepareData.lon
            }));
            localStorage.setItem('timezone', prepareData.timezone);
            localStorage.setItem('isError', false);
            
            dispatch(fetchWeatherSuccess(prepareData));
        } catch (error) {
            localStorage.setItem('isError', true);
            dispatch(fetchWeatherError(error.message));          
        }
    }
}

export const fetchWeatherStart = city => {
    return {
        type: FETCH_WEATHER_START,
        city
    }
}

export const fetchWeatherSuccess = weather => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        weather
    }
}

export const fetchWeatherError= error => {
    return {
        type: FETCH_WEATHER_ERROR,
        error
    }
}

export const fetchHourlyWeather = () => {
    return async dispatch => {
        
        dispatch(fetchWeatherHourlyStart());

        const coordinates = JSON.parse(localStorage.getItem('coordinates'));

        const lon = coordinates.lon,
              lat = coordinates.lat;
        
        const isError = JSON.parse(localStorage.getItem('isError'));
        
        try {          
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&units=metric&appid=4248d412b7d3efc097f20f1640cf0f2d`);
            const data = await response.json();

            console.log(data);
            if (data.cod === '404' || isError) throw new Error(`City not found`);
                
            const keys = ['dt', 'icon', 'temp'];
            
            const prepareData = data.hourly.map(item => {
                return getWeatherObject(item, keys);
            })

            const timezone = JSON.parse(localStorage.getItem('timezone'));

            dispatch(fetchWeatherHourlySuccess(prepareData, timezone));
        } catch (error) {
            dispatch(fetchWeatherHourlyError(error.message));          
        }
    }
}

export const fetchWeatherHourlyStart = () => {
    return {
        type: FETCH_WEATHER_HOURLY_START
    }
}

export const fetchWeatherHourlySuccess = (weatherHourly, timezone) => {
    return {
        type: FETCH_WEATHER_HOURLY_SUCCESS,
        weatherHourly,
        timezone
    }
}

export const fetchWeatherHourlyError = error => {
    return {
        type: FETCH_WEATHER_HOURLY_ERROR,
        error
    }
}

export const fetchWeeklyWeather = () => {
    return async dispatch => {
        
        dispatch(fetchWeatherWeeklyStart());

        const coordinates = JSON.parse(localStorage.getItem('coordinates'));

        const lon = coordinates.lon,
              lat = coordinates.lat;
        
        const isError = JSON.parse(localStorage.getItem('isError'));
               
        try {          
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&units=metric&appid=4248d412b7d3efc097f20f1640cf0f2d`);
            const data = await response.json();

            if (data.cod === '404' || isError) throw new Error(`City not found`);
            
            const keys = ['dt', 'icon', 'max', 'min'];
            
            const prepareData = data.daily.map(item => {
                return getWeatherObject(item, keys);
            })

            const timezone = JSON.parse(localStorage.getItem('timezone'));

            dispatch(fetchWeatherWeeklySuccess(prepareData, timezone));
        } catch (error) {
            dispatch(fetchWeatherWeeklyError(error.message));          
        }
    }
}

export const fetchWeatherWeeklyStart = () => {
    return {
        type: FETCH_WEATHER_WEEKLY_START
    }
}

export const fetchWeatherWeeklySuccess = (weatherWeekly, timezone) => {
    return {
        type: FETCH_WEATHER_WEEKLY_SUCCESS,
        weatherWeekly,
        timezone
    }
}

export const fetchWeatherWeeklyError = error => {
    return {
        type: FETCH_WEATHER_WEEKLY_ERROR,
        error
    }
}
