import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
const initialFormState ={
        newQuestion: '',
        newTrueAnswer: '',
        newFalseAnswer: '',
}
const coolObj = {
  question_text: props.form.newQuestion,
  true_answer_text: props.form.newTrueAnswer,
  false_answer_text: props.form.newFalseAnswer
}


  const onChange = evt => {
  props.setForm({
    ...props.form,
    [evt.target.id]: evt.target.value
  })
    
  
  }
  

  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz(coolObj)
    props.resetForm(form)
    
  
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
