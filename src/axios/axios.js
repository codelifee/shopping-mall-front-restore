import * as axios from 'axios';

const instance = axios.create({
  baseURL:
     "http://api.xn--vx3b30no7b.com/"
    //'http://localhost:5000/'
});

export default instance;
