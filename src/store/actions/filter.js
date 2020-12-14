import { FILTER_HOURLY_WEATHER } from "./actionTypes";

export const changeFilter = (activFilter) => ({
  type: FILTER_HOURLY_WEATHER,
  activFilter,
});
