import axios from 'axios';

const instance = axios.create({
  baseURL:
<<<<<<< HEAD
     //"http://shoppingmall-env.eba-jac9afx7.us-east-1.elasticbeanstalk.com/"
    'http://localhost:5000/'
=======
     "https://shoppingmall-env.eba-jac9afx7.us-east-1.elasticbeanstalk.com/"
    //'http://localhost:5000/',
>>>>>>> d5b4c44c938cbc75cbdc4f044d95fb22b4749e80
});

export default instance;
