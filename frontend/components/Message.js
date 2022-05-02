import React from 'react'
import { connect} from "react-redux"
import setMessage from "../state/reducer"

 function Message(props) {
   console.log(props.Message)
 
  return <div id="message">{props.Message} </div>
}

const mapStateToProps = (state) => {
  
  return {
    Message: state.setMessage
  }
}
 
export default connect(mapStateToProps,{setMessage})(Message);