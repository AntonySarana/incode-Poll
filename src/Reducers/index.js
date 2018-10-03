import { combineReducers } from "redux";

import user from "./init.js";
import polls from "./addNewPoll.js";
import selectPoll from "./selectPoll.js";
import voters from './getAllPolls.js'
import errors from './errorReducer';
import auth from './authReducer';

export default combineReducers({
  //user, // - vsya infa po useru
  polls, // - vse golosovalki
  selectPoll, // - vibranniy POLL
  voters,
  errors,
  auth,

});