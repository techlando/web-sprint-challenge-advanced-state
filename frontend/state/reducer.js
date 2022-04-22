// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import * as types from './action-types';


// currPosition: initialWheelState
// current quiz question
// values of form
const initialWheelState = 0
function wheel(state = initialWheelState, action) {
switch( action.type){
  default:
    return state;
}}

const initialQuizState = {
    question: [],
    choice1: [],
    choiceB: [],
    loading: false
}
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case'FETCH_START':
    return {
      ...state,
      loading: true
    }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        question: action.payload,
        choice1: action.payload,
        choiceB: action.payload
      }
    default:
      return (state);
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
