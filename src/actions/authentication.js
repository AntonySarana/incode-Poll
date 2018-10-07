import axios from 'axios';
import { GET_ERRORS,SET_CURRENT_USER } from './actionType';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

const apiUrl = 'http://localhost:3001/users';

export const registerUser = (user, history) => dispatch => {
  axios.post(`${apiUrl}/register`, user)
    .then(res => history.push('/login'))
    .catch(err => {
       dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      /* throw(err) */
    });
}

export const loginUser = (user) => dispatch => {
  axios.post(`${apiUrl}/login`, user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
}
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
export const logoutUser = (history) => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  //history.push('/login');
}