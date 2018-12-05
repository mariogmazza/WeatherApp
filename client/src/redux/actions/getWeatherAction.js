import { GET_WEATHER } from "./weatherConstans"; 
import { addError, removeError } from "./errorActons";
import api from "../../services/api";


export const changeWeather =(newWeather)=>({ 
  type: GET_WEATHER,
  data: newWeather
});



export const loadWeather = (city) => {
  console.log("action", city)

  return async dispatch => {
    try {
      const  {...weatherObj} = await api.call('post','getweather', {city});

        dispatch(changeWeather(weatherObj)) 
        dispatch(removeError())
    } catch (err) {
      const error  = err.message;
      dispatch(addError(error.message));
    }

  }
};