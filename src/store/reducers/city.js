import {
  FETCH_CITY_START,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_ERROR,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  isError: false,
  touched: false,
};

export const cityReducer = (state = initialState, { type }) => {
  switch (type) {
    case FETCH_CITY_START:
      return {
        loading: true,
        isError: false,
        touched: true,
      };
    case FETCH_CITY_SUCCESS:
      return {
        loading: false,
        isError: false,
        touched: true,
      };
    case FETCH_CITY_ERROR:
      return {
        isError: true,
        touched: true,
        loading: false,
      };
    default:
      return state;
  }
};
