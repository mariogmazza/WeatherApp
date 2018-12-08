import { GET_WEATHER, GET_CITY } from "./weatherConstans"; 
import { addError, removeError } from "./errorActons";
import api from "../../services/api";
// import iconPicker from "../../services/setIcon"
// import { changeImg } from './imgChangerAction'


// import clearsky from "../../assets/clearsky_day.jpg";
// import snowyday from "../../assets/snowy_day.jpg";
// import thounderstorm from "../../assets/thounderstorm_day.jpg";
// import tornado from "../../assets/tornado_day.jpg";
// import rainning from "../../assets/rainning.jpg";



export const changeWeather =(newWeather)=>({ 
  type: GET_WEATHER,
  data: newWeather
});

export const getCityName =(cityname)=>({ 
  type: GET_CITY,
  data: cityname
});


export const loadWeather = (city) => { 

  console.log("loadWeather ", city);

  return async dispatch => {
    try {
      const  {...weatherObj} = await api.call('post','getweather', {city});
        // const iconClass=iconPicker(weatherObj.condition.code)
        // console.log("img icon", iconClass )
        // console.log('loadweather', weatherObj);

        // dispatch(changeImg(iconClass))
        dispatch(changeWeather(weatherObj)) 
        dispatch(removeError())
    } catch (err) {
      const error  = err.message;
      dispatch(addError(error.message));
    }

  }
};