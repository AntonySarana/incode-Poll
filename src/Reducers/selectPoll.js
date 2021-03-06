import * as actionType from "../actions/actionType.js";

export default (state=[],action) => {
  switch (action.type){
    case actionType.SELECT_POLL:
      let poll = action.payload;
      return Object.assign({},state,poll);
    case actionType.MAKE_CHOISE:
      poll = action.payload;
      console.log(poll)
      return Object.assign({},state,poll);
    default: return state;
  }
}