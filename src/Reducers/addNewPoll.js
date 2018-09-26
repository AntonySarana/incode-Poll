import * as actionType from '../actions/actionType';


export default (state=[], action) => {
  switch (action.type){
    case actionType.ADD_NEW_POLL:
      let poll=[];
      poll.push(action.poll);
      console.log(poll);
      if (state.polls) poll= poll.concat(state.polls);
      console.log(poll);
      return Object.assign({},state,poll);
    default: return state;
  }
}