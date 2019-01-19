import React  from 'react'
import {range} from 'lodash'
const array=range(1,10)

const Numbers =(props)=>{
   const numberClassName=(number)=>{
        if(props.usedNumbers.includes(number)) return 'used'
        if(props.answerIsCorrect && props.selectedNumbers.includes(number)) return 'used'
        if(props.selectedNumbers.includes(number)) return 'selected'
}
  return(
       <div className="card text-center number">
         <div>
           {array.map((number,i)=><span
             key={number}
             onClick={()=>props.handleChangeSelect(number)}
             className={numberClassName(number)}>
                       {number}
                       </span>)}
         </div>
       </div>
  )
}






export default Numbers
