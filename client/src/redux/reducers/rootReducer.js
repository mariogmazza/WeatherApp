import { combineReducers } from "redux";
import getWeatherReducer from "./getWeatherReducer";

 
const rootReducer = combineReducers({
  getWeather:getWeatherReducer
});

export default rootReducer;