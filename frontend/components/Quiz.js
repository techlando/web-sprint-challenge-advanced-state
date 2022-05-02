import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchQuiz, selectAnswer, postAnswer } from "../state/action-creators";



 function Quiz(props) {

  const newObj = {
    quiz_id: props.thisQuiz.quiz_id,
    answer_id: props.thisAnswer1.answer_id
   }
   const newObj1 = {
    quiz_id: props.thisQuiz.quiz_id,
    answer_id: props.thisAnswer2.answer_id
  } 
  const onSubmit = (e) => {
    e.preventDefault()
    console.log("here")
    props.postAnswer(showSelected())
  }

  useEffect(() => {
    props.fetchQuiz();
   
   
    
  },[])
  

  const onClick = () => {
    props.selectAnswer()
  }


 

const showSelected = () => {
 
  if(props.selected === false){
    return newObj
  } else {
    return newObj1
  }
}


   
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        !props.loading ? (
          <>
            <h1>{props.thisQuiz.question}</h1>
           {/* {props.selected ? <div id='quizAnswers'>
             <div className='answer selected'>{props.thisAnswer1} <button>
               SELECTED</button></div>
           </div> : <div className="answer">
               {props.thisAnswer2}
                <button>
                  Select
                </button>
              </div>} */}


            <div id="quizAnswers">
              { !props.selected ? 
              <div className="answer selected">
                {props.thisAnswer1.text}
                <button onClick={onClick}>
                  
                  SELECTED
                </button>
              </div> : <div className="answer ">
                {props.thisAnswer1.text}
                <button onClick={onClick}>
                  
                  Select
                </button>
              </div> }
              { !props.selected ? 
             <div className="answer">
             {props.thisAnswer2.text}
             <button onClick={onClick}>
                  
                  Select
                </button>
              </div>   :
                <div className="answer selected">
                {props.thisAnswer2.text}
                <button onClick={onClick}>
                  
                SELECTED
                </button>
              </div> }




              {/* <div className="answer ">
               {props.thisAnswer2}
                <button >
                  Select
                </button> 
              </div> */}
            </div>

            <button onClick={onSubmit} disabled={false} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
   thisQuiz: state.quiz,
   loading: state.loadingReducer,
   thisAnswer1: state.answerReducer,
   thisAnswer2: state.answerReducer2,
   selected: state.selectedAnswer
}
}


export default connect(mapStateToProps, {fetchQuiz, selectAnswer, postAnswer })(Quiz);