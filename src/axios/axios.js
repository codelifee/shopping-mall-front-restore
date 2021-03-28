import * as axios from 'axios';

const instance = axios.create({
  baseURL: //"https://api.xn--vx3b30no7b.com/",
  // "https://shoppingmall-env.eba-jac9afx7.us-east-1.elasticbeanstalk.com/",
  "http://localhost:5000/"
});

export default instance;
