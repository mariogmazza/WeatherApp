import axios from 'axios';

// const host = 'http://localhost:5000/api';


export const call = async (method, path, data) => {
  console.log("api", data)
  // const response = await axios[method](`${host}/${path}`, data);
  const response = await axios[method](`/api/${path}`, data);


  return response.data;
};

export default {call};