import axios from 'axios';

// const host = 'http://localhost:4000/api';


export const call = async (method, path, data) => {
  // const response = await axios[method](`${host}/${path}`, data);
  const response = await axios[method](`/api/${path}`, data);


  return response.data;
};

export default {call};