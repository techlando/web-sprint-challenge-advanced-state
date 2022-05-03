// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types';

import axios from "axios";

export const LOAD_QUIZ = "LOAD_QUIZ";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const LOAD_ANSWER1 = "LOAD_ANSWER1"
export const LOAD_ANSWER2 = "LOAD_ANSWER2"
export const SELECTED = "SELECTED"
export const SET_MESSAGE = "SET_MESSAGE"
export const SET_FORM = "SET_FORM"
export const RESET_FORM = "RESET_FORM"
export const MOVE_CLOCKWISE = "MOVE_CLOCKWISE"
export const MOVE_COUNTER = "MOVE_COUNTER"
export const SELECTED2 = "SELECTED2"

const loadQuiz = (quizData) => {
  return {type: LOAD_QUIZ, payload: quizData}
}
const loading = () => {
  return {type: LOADING}
}
const setMessage =  (message) => {
  return {type: SET_MESSAGE, payload: message}
}

const loadAnswer1 = (answerData) => {
  return {type: LOAD_ANSWER1, payload: answerData}
}
const loadAnswer2 = (answerData2) => {
  return {type: LOAD_ANSWER2, payload: answerData2}
}

export function moveClockwise(current) { 
  return {
    type: MOVE_CLOCKWISE, payload: current
  }
}

export function moveCounterClockwise(current) { 
  return {
    type: MOVE_COUNTER, payload: current
  }
}

export function selectAnswer() { 
  return {type: SELECTED}
}

export function selectAnswer2(){
  return {type: SELECTED2}
}

// export function setMessage(message) { 
//   return {type: SET_MESSAGE, payload: message}
// }

// export function setQuiz() { 
//   return ({type: FETCH_START})
// }

// export function fetchSuccess(question) {
//   return ({type: FETCH_SUCCESS, payload: question})
// }

export function setForm(input) {
  return {type: SET_FORM, payload: input }
 }

export function resetForm(form) { 
  return {type: RESET_FORM, payload: ""}
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch(loading())
    axios.get("http://localhost:9000/api/quiz/next")
    .then(res => {
      // console.log(res)
      dispatch(loadQuiz(res.data))
      dispatch(loadAnswer1(res.data.answers[0]))
      dispatch(loadAnswer2(res.data.answers[1]))
      dispatch(loading());
      // dispatch(setMessage())
     
    })
    .catch(err => {
      console.log(err)
    })
  }
}
// export function fetchAnswer(){
//   return function (dispatch) {
//     dispatch(loading())
//     axios.get("http://localhost:9000/api/quiz/next")
//     .then(res => {
//       console.log(res.data.answers[1].text)
//       dispatch(loading())
//       dispatch(loadAnswer(res.data.answers[1].text))
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }
// }
export function postAnswer(answer) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios.post(`http://localhost:9000/api/quiz/answer`, answer)
    .then(res => {
      
      dispatch(selectAnswer())
      dispatch(setMessage(res.data.message))
      dispatch(fetchQuiz())
      dispatch(selectAnswer2(false))
     
    })
    .catch(err => {
      console.log(err)
    })
  }
}
export function postQuiz(form) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post("http://localhost:9000/api/quiz/new", form)
    .then(res => {
     
     
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
     
    })
    .catch(err => {
      console.log(err)
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state


