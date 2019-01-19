import React  from 'react'
import {range} from 'lodash'



const Stars=(props)=>{

return(
   <div className="col-5">
        {range(props.randomStar).map((i)=><i key={i} className="fas fa-star"></i>)}

   </div>
)

}






export default Stars
