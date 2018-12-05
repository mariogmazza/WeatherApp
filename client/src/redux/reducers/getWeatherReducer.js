import { GET_WEATHER } from "../actions/weatherConstans";

let initialState={}



const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_WEATHER:
        return {
            ...state, 
            data: action.data
        }
      
      default:
        return state;
    }
  };

  export default weatherReducer;