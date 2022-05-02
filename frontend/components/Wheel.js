import React from 'react'
import { connect } from "react-redux"
import {moveClockwise, moveCounterClockwise} from "../state/action-creators"


 function Wheel(props) {
  // console.log(props)

  const helperfunc = () => {
  }

  const onClickClockwise = () => {
    props.moveClockwise()
   
   
  }
  const onClickCounter = () => {
    props.moveCounterClockwise()
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        {props.wheel === 0 ? <div className="cog active" style={{ "--i": 0 }}>B</div> :  <div className="cog" style={{ "--i": 0 }}></div> }
        {props.wheel === 1 ? <div className="cog active" style={{ "--i": 1 }}>B</div> :  <div className="cog" style={{ "--i": 1 }}></div> }
        {props.wheel === 2 ? <div className="cog active" style={{ "--i": 2 }}>B</div> :  <div className="cog" style={{ "--i": 2 }}></div> }
        {props.wheel === 3 ? <div className="cog active" style={{ "--i": 3 }}>B</div> :  <div className="cog" style={{ "--i": 3 }}></div> }
        {props.wheel === 4 ? <div className="cog active" style={{ "--i": 4 }}>B</div> :  <div className="cog" style={{ "--i": 4 }}></div> }
        {props.wheel === 5 ? <div className="cog active" style={{ "--i": 5 }}>B</div> :  <div className="cog" style={{ "--i": 5 }}></div> }
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div> */}
        {/* <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div> */}
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={onClickCounter} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={onClickClockwise}id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    wheel: state.wheel

  }
}
export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);