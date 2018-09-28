import { GET_ALL_POLLS_REQUEST, GET_ALL_POLLS_SUCCESS } from './actionType.js'

export function getAllPolls(year) {
  return dispatch => {
    // экшен с типом REQUEST (запрос начался)
    // диспатчится сразу, как будто-бы перед реальным запросом
    dispatch({
      type: GET_ALL_POLLS_REQUEST,
      payload: year,
    })

    // а экшен внутри setTimeout
    // диспатчится через секунду
    // как будто-бы в это время
    // наши данные загружались из сети
    setTimeout(() => {
      dispatch({
        type: GET_ALL_POLLS_SUCCESS,
        payload: [1, 2, 3, 4, 5],
      })
    }, 1000)
  }
}