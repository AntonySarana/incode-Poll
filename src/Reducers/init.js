import * as actionType from '../actions/actionType';

export default (state=[] ,action) => {
  const user={
    isAuthorize:false,
  }
  const voters={
    isFetching:false
  };
  const selectPoll={

  }
  return {...state,user,voters,selectPoll}
}