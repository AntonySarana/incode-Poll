import { combineReducers } from 'redux';

import user from "./init.js";
import polls from "./addNewPoll.js";

export default combineReducers({
 user, // - vsya infa po useru
 polls, // - vse golosovalki
});
