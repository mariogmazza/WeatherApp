import { CHANGE_IMG } from "./weatherConstans"; 


export const changeImg =(newImg)=>({ 
  type: CHANGE_IMG,
  data: newImg
});