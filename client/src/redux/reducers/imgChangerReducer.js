import { CHANGE_IMG } from "../actions/weatherConstans";

let initialState={}



const imgChangerReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_IMG:
        return {
            ...state, 
            data: action.data
        }
      
      default:
        return state;
    }
  };

  export default imgChangerReducer;