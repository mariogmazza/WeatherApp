import { combineReducers } from "redux";
import getWeatherReducer from "./getWeatherReducer";
import iconImg from './imgChangerReducer'
import cityname from './getCityNameReducer'

 
const rootReducer = combineReducers({
  getWeather:getWeatherReducer,
  iconImg,
  cityname
});

export default rootReducer;