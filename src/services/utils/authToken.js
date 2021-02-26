import axios from '../../axios/axios';

export default function authToken(token) {
    if(token) {
        axios.defaults.headers.common['Authorization'] = `${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}