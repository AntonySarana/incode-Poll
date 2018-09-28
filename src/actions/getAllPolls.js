import { GET_ALL_POLLS_REQUEST, GET_ALL_POLLS_SUCCESS } from './actionType.js'

import axios from 'axios';
const apiUrl = 'http://localhost:3001/voters';


export function getAllPolls() {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(allPolls(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}



export const allPolls = (payload) => {
  return {
    type: GET_ALL_POLLS_SUCCESS,
    payload,
  }
};