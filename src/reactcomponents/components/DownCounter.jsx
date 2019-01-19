import React from 'react'



class DownCounter extends React.Component{
   constructor (props){
     super(props)
   }
   render(){
     return(
       <div className="counter">
        <h3> {this.props.min}:{this.props.sec}</h3>
       </div>
     )
   }
componentDidMount(){
      this.interval=setInterval(this.props.downCounter,1000)
    }
componentWillUnmount(){
     console.log('li')
        clearInterval(this.interval)
      }
}



export default DownCounter
