import { MAKE_CHOISE } from './actionType.js'

import axios from 'axios';
const apiUrl = 'http://localhost:3001/voters';


export function makeChoise(poll) {
  return (dispatch) => {
    return axios.put(`${apiUrl}/${poll.id_p}:${poll.id_a}`)
      .then(response => {
        dispatch(choiseAnswer(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}



export const choiseAnswer = (payload) => {
  return {
    type: MAKE_CHOISE,
    payload,
  }
};