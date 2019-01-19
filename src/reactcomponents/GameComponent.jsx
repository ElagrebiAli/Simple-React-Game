import React from 'react'

import Stars from './components/Stars.jsx'
import Button from './components/Button.jsx'
import Answer from './components/Answer.jsx'
import Numbers from './components/Numbers.jsx'
import DoneFrame from './components/DoneFrame.jsx'
import DownCounter from './components/DownCounter.jsx'

const GameComponent=(props)=>{
  return(
    <div className="container">
        <div className="row">
              <Stars randomStar={props.randomStar}/>
              <Button selectedNumbers={props.selectedNumbers} checkAnswer={props.checkAnswer} answerIsCorrect={props.answerIsCorrect} acceptAnswer={props.acceptAnswer} reset={props.reset} resetCombination={props.resetCombination} />
              <Answer selectedNumbers={props.selectedNumbers} handleChangeUnSelect={props.handleChangeUnSelect}  />
        </div>

      {props.gameStatus ? <DoneFrame gameStatus={props.gameStatus}  resetAllGame={props.resetAllGame} />:
          <div>
                <Numbers handleChangeSelect={props.handleChangeSelect} selectedNumbers={props.selectedNumbers} answerIsCorrect={props.answerIsCorrect} usedNumbers={props.usedNumbers}/>
                <DownCounter sec={props.sec} min={props.min} downCounter={props.downCounter}/>
         </div> }
    </div>
  )
}

export default GameComponent
