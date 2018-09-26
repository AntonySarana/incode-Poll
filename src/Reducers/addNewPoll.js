import * as actionType from '../actions/actionType';


export default (state=[], action) => {
  switch (action.type){
    case actionType.ADD_NEW_POLL:
      const poll = action.poll;
      return Object.assign({},state,poll);
    default: return state;
  }
}