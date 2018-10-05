import axios from 'axios';
import { GET_ERRORS,GET_USER } from './actionType';


const apiUrl = 'http://localhost:3001/users';

  export const userChoise = (userid,poll) => dispatch => {
    axios.put(`${apiUrl}/choise/${userid}:${poll.id_p}:${poll.id_a}`)
      .then(res => {
        dispatch(getUser(res.data));
      })
      .catch(error => {
        throw(error);
      });
  }
export const getUser = payload => {
  return {
    type: GET_USER,
    payload,
  }
}