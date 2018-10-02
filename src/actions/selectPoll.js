import * as actionType from "./actionType.js";
import axios from "axios";
const apiUrl = 'http://localhost:3001/voters';



export function selectPoll (payload) {
  return {
    type:actionType.SELECT_POLL,
    payload,
  }
}




export function getOnePoll(id_p) {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${id_p}`)
      .then(response => {
        dispatch(getOnePollSucces(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}



export const getOnePollSucces = (payload) => {
  return {
    type: actionType.SELECT_POLL,
    payload,
  }
};

