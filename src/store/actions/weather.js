import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_HOURLY_SUCCESS,
  FETCH_WEATHER_HOURLY_ERROR,
  FETCH_WEATHER_HOURLY_START,
  FETCH_WEATHER_WEEKLY_START,
  FETCH_WEATHER_WEEKLY_SUCCESS,
  FETCH_WEATHER_WEEKLY_ERROR,
} from "./actionTypes";

import { getWeatherObject } from "./../../cityFramework/city";

export const fetchTodayWeather = () => {
  return async (dispatch) => {
    dispatch(fetchWeatherStart());
    const city = localStorage.getItem("city");

    try {
      const response = await fetch(
        `//api.openweathermap.org/data/2.5/weather?q=${city}&appid=4248d412b7d3efc097f20f1640cf0f2d&units=metric`
      );
      const data = await response.json();
      const keys = ["name", "dt", "timezone", "feels_like", "temp", "temp_max", "temp_min", "main", "icon"];
      const prepareData = getWeatherObject(data, keys);

      dispatch(fetchWeatherSuccess(prepareData));
    } catch (error) {
      dispatch(fetchWeatherError(error.message));
    }
  };
};

export const fetchWeatherStart = () => {
  return {
    type: FETCH_WEATHER_START,
  };
};

export const fetchWeatherSuccess = (weather) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    weather,
  };
};

export const fetchWeatherError = (error) => {
  return {
    type: FETCH_WEATHER_ERROR,
    error,
  };
};

export const fetchHourlyWeather = () => { 
  return async (dispatch) => {
    dispatch(fetchWeatherHourlyStart());

    const coordinates = JSON.parse(localStorage.getItem("coordinates"));
    const lon = coordinates.lon, lat = coordinates.lat;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&units=metric&appid=4248d412b7d3efc097f20f1640cf0f2d`
      );
      const data = await response.json();
      const keys = ["dt", "icon", "temp"];
      const prepareData = data.hourly.map((item) => {
        return getWeatherObject(item, keys);
      });
      const timezone = JSON.parse(localStorage.getItem("timezone"));

      dispatch(fetchWeatherHourlySuccess(prepareData, timezone));
    } catch (error) {
      dispatch(fetchWeatherHourlyError(error.message));
    }
  };
};

export const fetchWeatherHourlyStart = () => {
  return {
    type: FETCH_WEATHER_HOURLY_START,
  };
};

export const fetchWeatherHourlySuccess = (weatherHourly, timezone) => {
  return {
    type: FETCH_WEATHER_HOURLY_SUCCESS,
    weatherHourly,
    timezone,
  };
};

export const fetchWeatherHourlyError = (error) => {
  return {
    type: FETCH_WEATHER_HOURLY_ERROR,
    error,
  };
};

export const fetchWeeklyWeather = () => {
  return async (dispatch) => {
    dispatch(fetchWeatherWeeklyStart());

    const coordinates = JSON.parse(localStorage.getItem("coordinates"));

    const lon = coordinates.lon, lat = coordinates.lat;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&units=metric&appid=4248d412b7d3efc097f20f1640cf0f2d`
      );
      const data = await response.json();
      const keys = ["dt", "icon", "max", "min"];
      const prepareData = data.daily.map((item) => {
        return getWeatherObject(item, keys);
      });
      const timezone = JSON.parse(localStorage.getItem("timezone"));

      dispatch(fetchWeatherWeeklySuccess(prepareData, timezone));
    } catch (error) {
      dispatch(fetchWeatherWeeklyError(error.message));
    }
  };
};

export const fetchWeatherWeeklyStart = () => {
  return {
    type: FETCH_WEATHER_WEEKLY_START,
  };
};

export const fetchWeatherWeeklySuccess = (weatherWeekly, timezone) => {
  return {
    type: FETCH_WEATHER_WEEKLY_SUCCESS,
    weatherWeekly,
    timezone,
  };
};

export const fetchWeatherWeeklyError = (error) => {
  return {
    type: FETCH_WEATHER_WEEKLY_ERROR,
    error,
  };
};