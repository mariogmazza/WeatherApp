import { GET_CITY } from "../actions/weatherConstans";

let initialState={}



const getCityNameReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CITY:
        return {
            ...state, 
            data: action.data
        }
      
      default:
        return state;
    }
  };

  export default getCityNameReducer;