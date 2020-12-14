import { FILTER_HOURLY_WEATHER } from "./../actions/actionTypes";

const initilaState = {
  activFilter: 12,
};

const filterReducer = (state = initilaState, action) => {
  switch (action.type) {
    case FILTER_HOURLY_WEATHER:
      return {
        ...state,
        activFilter: action.activFilter,
      };
    default:
      return state;
  }
};

export default filterReducer;
