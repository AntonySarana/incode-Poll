import * as actionType from './actionType';

export default function addNewPoll(poll) {
  console.log(poll);
  return {
    type: actionType.ADD_NEW_POLL,
    poll,
  }
}