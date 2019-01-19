import React from 'react'
import {range} from 'lodash'


import GameComponent from './GameComponent.jsx'

var verifyCombination=(arr,n)=>{
    if (arr.includes(n))  return true;
    if (arr[0] > n)   return false;
    if (arr[arr.length - 1] > n) {
        arr.pop();
        return verifyCombination(arr, n);
    }
for (var i = 0; i < arr.length - 1; ++i){
        for (var j = i+1; j < arr.length; ++j){
            if (arr[i] + arr[j] === n){
                return true;
            }
        }
    }
    return false;
}
var seconds=120

class GameContainer extends React.Component{
  constructor(){
    super()
     this.state={
       randomStar:GameContainer.random(),
       selectedNumbers:[],
       usedNumbers:[],
       answerIsCorrect:null,
       reset:3,
       gameStatus:null,
       sec:"00",
       min:"00",
       }
       this.handleChangeSelect=this.handleChangeSelect.bind(this)
       this.handleChangeUnSelect=this.handleChangeUnSelect.bind(this)
       this.checkAnswer=this.checkAnswer.bind(this)
       this.acceptAnswer=this.acceptAnswer.bind(this)
       this.resetCombination=this.resetCombination.bind(this)
       this.resetAllGame=this.resetAllGame.bind(this)
       this.downCounter=this.downCounter.bind(this)
  }

 static random(){
   return Math.floor(Math.random()*9)+1
 }

 handleChangeSelect(number){

   if(this.state.selectedNumbers.includes(number)) return;

   this.setState(prevState=>({selectedNumbers:prevState.selectedNumbers.concat(number),answerIsCorrect:null}))
 }

 handleChangeUnSelect(number){
   this.state.answerIsCorrect=null
   this.setState(prevState=>({selectedNumbers:prevState.selectedNumbers.filter(ele=>ele!==number),answerIsCorrect:null}))
 }

 checkAnswer(){
    this.setState(prevState=>({answerIsCorrect:prevState.selectedNumbers.reduce((acc,ele)=>acc+ele,0)===prevState.randomStar}),this.updatedGameStatus)
 }

 acceptAnswer(){
   this.setState(prevState=>({usedNumbers:prevState.usedNumbers.concat(prevState.selectedNumbers),selectedNumbers:[],randomStar:GameContainer.random(),answerIsCorrect:null}),this.updatedGameStatus)
 }

resetCombination(){
  this.setState(prevState=>({randomStar:GameContainer.random(),
  selectedNumbers:[],
  answerIsCorrect:null,
  reset:prevState.reset-1}))
}

resetAllGame(){

  this.setState({
    randomStar:GameContainer.random(),
    selectedNumbers:[],
    usedNumbers:[],
    answerIsCorrect:null,
    reset:3,
    gameStatus:null
  })
}
updatedGameStatus(){
    this.setState(prevState=>{
         if(prevState.usedNumbers.length === 9) return {gameStatus:"Done"}
         const possibleSolution=range(1,10).filter(nbr=>!prevState.usedNumbers.includes(nbr))
         if(prevState.reset===0 && !verifyCombination(possibleSolution,prevState.randomStar))  return {gameStatus:"Game Over !"}
    })
}

downCounter(){

  let min=Math.floor(seconds/60)
  let sec=seconds%60
  this.setState({min:min,sec:sec})
  if(min===0 && sec===0){
     seconds=10
     this.setState({gameStatus:"Game Over !"})
  }
  if(min<10){
    this.setState({min:"0"+min})
  }
  if(sec<10){
    this.setState({sec:"0"+sec})
  }
    seconds--
}


   render(){
     const {randomStar,selectedNumbers,answerIsCorrect,usedNumbers,reset,gameStatus,sec,min}=this.state
      return(
        <GameComponent {...this.state} checkAnswer={this.checkAnswer} answerIsCorrect={answerIsCorrect} acceptAnswer={this.acceptAnswer} resetCombination={this.resetCombination}
        handleChangeUnSelect={this.handleChangeUnSelect} resetAllGame={this.resetAllGame} handleChangeSelect={this.handleChangeSelect} downCounter={this.downCounter} />
      )

   }
}

export default GameContainer
