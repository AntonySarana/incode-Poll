import * as actionType from "../actions/actionType.js";

export default (state=[],action) => {
  switch (action.type){
    case actionType.SELECT_POLL:
      const poll = action.payload;
      return Object.assign({},state,poll);
    default: return state;
  }
}