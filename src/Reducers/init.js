import * as actionType from '../actions/actionType';

export default (state=[] ,action) => {
  const user={
    isAuthorize:false,
  }

  return {...state,user}
}