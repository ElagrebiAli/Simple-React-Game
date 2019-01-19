import React  from 'react'


const Button=(props)=>{
  let button
  switch (props.answerIsCorrect){
       case true:
          button= <button className="btn btn-success" onClick={props.acceptAnswer}><i className="fas fa-check"></i></button>
          break
       case false:
          button= <button className="btn btn-danger"><i className="fas fa-times"></i></button>
          break
       default:
          button=<button className="btn" disabled={props.selectedNumbers.length===0} onClick={props.checkAnswer}> <span>Check!</span></button>
}
  return(
     <div className="col-2">
        {button}
        <br/><br/>

       <button className="btn btn-warning" onClick={props.resetCombination} style={{display:props.reset===0 &&"none"}}><i className="fas fa-sync-alt"></i><strong>{props.reset}</strong></button>
     </div>
  )
}


export default Button
