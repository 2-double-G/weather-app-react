import {
  FETCH_CITY_START,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_ERROR,
} from "./actionTypes";

import { storeCityName, getWeatherObject } from "./../../cityFramework/city";

export const checkCity = (city) => {
  return async (dispatch) => {
    dispatch(fetchCityStart());

    const localCityName = storeCityName(city);

    try {
      const response = await fetch(
        `//api.openweathermap.org/data/2.5/weather?q=${localCityName}&appid=4248d412b7d3efc097f20f1640cf0f2d&units=metric`
      );
      if (response.status == "404") throw new Error("City not found");

      const data = await response.json();

      const keys = ["timezone", "lat", "lon"];
      const prepareData = getWeatherObject(data, keys);
      localStorage.setItem(
        "coordinates",
        JSON.stringify({
          lat: prepareData.lat,
          lon: prepareData.lon,
        })
      );
      localStorage.setItem("timezone", prepareData.timezone);

      dispatch(fetchCitySuccess());
    } catch (error) {
      console.log(error);
      dispatch(fetchCityError());
    }
  };
};

export const fetchCityStart = () => {
  return {
    type: FETCH_CITY_START,
  };
};

export const fetchCitySuccess = () => {
  return {
    type: FETCH_CITY_SUCCESS,
  };
};

export const fetchCityError = () => {
  return {
    type: FETCH_CITY_ERROR,
  };
};
