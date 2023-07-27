import axios from 'axios';

const axiosInstance = axios.create({

  //server api
        // baseURL: 'https://grnmypics.onrender.com', 

//   , 

//local api

  baseURL: 'http://localhost:4000/myapp',  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance