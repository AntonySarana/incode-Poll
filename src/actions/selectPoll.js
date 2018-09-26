import * as actionType from "./actionType.js";

export default (poll) => {
  return {
    type:actionType.SELECT_POLL,
    poll,
  }
}