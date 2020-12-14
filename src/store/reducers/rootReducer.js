import { combineReducers } from "redux";
import weatherReducer from "./weather";
import filterReducer from "./filter";
import { cityReducer } from "./city";

const rootReducer = combineReducers({
  weatherToday: weatherReducer,
  filter: filterReducer,
  city: cityReducer,
});

export default rootReducer;
