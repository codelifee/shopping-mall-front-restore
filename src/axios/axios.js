import axios from 'axios';

const instance = axios.create({
  baseURL:
    //"http://shoppingmall-env.eba-jac9afx7.us-east-1.elasticbeanstalk.com/"
    'http://localhost:5000/',
});

export default instance;
