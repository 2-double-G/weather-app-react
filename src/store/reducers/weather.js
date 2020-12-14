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
} from "../actions/actionTypes";

const initialState = {
  weather: {},
  weatherHourly: [],
  weatherWeekly: [],
  timezone: null,
  touched: false,
  checkExisting: false,
  error: {
    message: null,
    isError: false,
  },
  loading: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.weather,
        touched: true,
        error: {
          isError: false,
        },
        loading: false,
      };
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        touched: true,
        error: {
          message: action.error,
          isError: true,
        },
        loading: false,
      };
    case FETCH_WEATHER_HOURLY_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_HOURLY_SUCCESS:
      return {
        ...state,
        weatherHourly: action.weatherHourly,
        timezone: action.timezone,
        error: {
          isError: false,
        },
        loading: false,
      };
    case FETCH_WEATHER_HOURLY_ERROR:
      return {
        ...state,
        error: {
          message: action.error,
          isError: true,
        },
        loading: false,
      };
    case FETCH_WEATHER_WEEKLY_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_WEEKLY_SUCCESS:
      return {
        ...state,
        weatherWeekly: action.weatherWeekly,
        timezone: action.timezone,
        error: {
          isError: false,
        },
        loading: false,
      };
    case FETCH_WEATHER_WEEKLY_ERROR:
      return {
        ...state,
        error: {
          message: action.error,
          isError: true,
        },
        loading: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
