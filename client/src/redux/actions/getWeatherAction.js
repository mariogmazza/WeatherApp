import { GET_WEATHER } from "./weatherConstans"; 
import { addError, removeError } from "./errorActons";
import api from "../../services/api";
import { changeImg } from './imgChangerAction'


import clearsky from "../../assets/clearsky_day.jpg";
import snowyday from "../../assets/snowy_day.jpg";
import thounderstorm from "../../assets/thounderstorm_day.jpg";
import tornado from "../../assets/tornado_day.jpg";
import rainning from "../../assets/rainning.jpg";



export const changeWeather =(newWeather)=>({ 
  type: GET_WEATHER,
  data: newWeather
});


const imagePicker = condCode => {
  const arr = [
    [0, 1, 2], //TORNADO IMG
    [3, 4, 37, 38, 39], // THOUNDER IMG
    [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 25, 41, 42, 43, 46], // SNOWY IMG
    [45, 40, 44, 47, 27, 28, 29, 30], // RAINNING IMG
    [31, 32, 33, 34, 36] // SUNNY IMG
  ];

  console.log("code", condCode);

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr[i].length - 1; j++) {
      if (condCode === arr[i][j] + "") {
        switch (i) {
          case 0:
            return tornado;
          case 1:
            return thounderstorm;
          case 2:
            return snowyday;
          case 3:
            return rainning;
          case 4:
            return clearsky;
          default:
            return "";
        }
      }
    }
  }
};

export const loadWeather = (city) => {
  return async dispatch => {
    try {
      const  {...weatherObj} = await api.call('post','getweather', {city});
        const newImg=imagePicker(weatherObj.condition.code)
        dispatch(changeImg(newImg))
        dispatch(changeWeather(weatherObj)) 
        dispatch(removeError())
    } catch (err) {
      const error  = err.message;
      dispatch(addError(error.message));
    }

  }
};