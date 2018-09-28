import { combineReducers } from "redux";

import user from "./init.js";
import polls from "./addNewPoll.js";
import selectPoll from "./selectPoll.js";
import voters from './getAllPolls.js'

export default combineReducers({
  user, // - vsya infa po useru
  polls, // - vse golosovalki
  selectPoll, // - vibranniy POLL
  voters,

});