// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export function moveClockwise() { 
  return {
    type: types.MOVE_CLOCKWISE,
    payload: id
  }
}

export function moveCounterClockwise() { }

export function selectAnswer() { }

export function setMessage() { }

export function setQuiz() { 
  return ({type: FETCH_START})
}

export function fetchSuccess({question, choice1, choiceB}) {
  return ({type: FETCH_SUCCESS, payload: {question, choice1, choiceB}})
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
