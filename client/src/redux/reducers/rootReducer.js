import { combineReducers } from "redux";
import getWeatherReducer from "./getWeatherReducer";
import newImg from './imgChangerReducer'

 
const rootReducer = combineReducers({
  getWeather:getWeatherReducer,
  newImg
});

export default rootReducer;