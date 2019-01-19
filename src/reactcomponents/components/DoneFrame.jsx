import React from 'react'


const DoneFrame=(props)=>{
    return(
      <div className="text-center" style={{marginTop:"20px"}}>
           <h3>{props.gameStatus}</h3>
           <div className="col-2" style={{margin:"auto"}}>
           <button className="btn btn-primary" onClick={props.resetAllGame}> reset</button>
            </div>
      </div>
    )

}



export default DoneFrame
