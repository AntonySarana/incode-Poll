import { GET_ERRORS } from '../actions/actionType';

export default function(state = {}, action ) {
  switch(action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}