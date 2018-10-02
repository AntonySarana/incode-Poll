import * as actionType from './actionType';
/*

export default function addNewPoll(poll) {
  console.log(poll);
  return {
    type: actionType.ADD_NEW_POLL,
    poll,
  }
}
*/


import axios from 'axios';
const apiUrl = 'http://localhost:3001/voters';

export function addNewPoll(poll) {
  return (dispatch) => {
    return axios.post(`${apiUrl}/newPoll/${poll}`)
      .then(response => {
        dispatch(addNewPollSucces(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
/*
export function putNewPoll(poll) {
  return (dispatch) => {
    return axios.update(`${apiUrl}/newPoll/${poll}`)
      .then(response => {
        dispatch(addNewPollSucces(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}*/



export const addNewPollSucces = (payload) => {
  return {
    type: actionType.ADD_NEW_POLL,
    payload,
  }
};