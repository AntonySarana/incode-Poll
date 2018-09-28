import { GET_ALL_POLLS_REQUEST, GET_ALL_POLLS_SUCCESS } from '../actions/actionType'

export default function getAllPolls(state = [], action) {
  switch (action.type) {
    case GET_ALL_POLLS_REQUEST:
      return { ...state, year: action.payload, isFetching: true }

    case GET_ALL_POLLS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false }

    default:
      return state
  }
}