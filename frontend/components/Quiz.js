import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { setQuiz, fetchSuccess } from "../state/action-creators";
import axios from "axios";

 function Quiz(props) {

  useEffect(() => {
    
    props.setQuiz();
    axios.get("http://localhost:9000/api/quiz/next")
    .then(res => {
      console.log(res.data.answers[1].text)
      props.fetchSuccess(res.data.question, res.data.answers[0].text, res.data.answers[1].text);
    })
    .catch(err => {
      console.log(err);
    })
    
  },[])
  
   const { loading } = props;
   console.log(props.quiz)
   
   
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        !props.quiz.loading ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant{}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
   ...state,
    question: state.question,
    
    loading: state.loading
  }
}
export default connect(mapStateToProps, { setQuiz, fetchSuccess })(Quiz);