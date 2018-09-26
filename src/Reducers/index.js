import { combineReducers } from 'redux';

import user from "./init.js";
import Polls from "./addNewPoll.js";

export default combineReducers({
 user,
  Polls,
});
