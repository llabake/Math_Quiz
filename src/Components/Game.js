import React from 'react';
import { Stars } from './Star';
import { Button } from './Button';
import { Answer } from './Answer';
import { Numbers } from './Numbers';
import { DoneFrame } from './DoneFrame';

class Game extends React.Component {
  static randomNumber = () => 1 + Math.floor(Math.random()* 9);
  initialState = () => ({
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    usedNumbers: [],
    redraws: 5,
    doneStatus: null,
  });
  state = this.initialState();
  selectedNumber = (clickedNumber) => {
    if ((this.state.selectedNumbers.includes(clickedNumber)
    || this.state.usedNumbers.includes(clickedNumber))) { return }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  }

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars ===
      prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }))
  }
  
  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumberOfStars: Game.randomNumber(),
    }), this.updateDoneStatus);
  }

  redraw =  () => {
    if (this.state.redraws === 0) { return } 
    this.setState(prevState => ({
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      selectedNumbers: [],
      redraws: prevState.redraws - 1
    }), this.updateDoneStatus);
  }

  updateDoneStatus = () =>  {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { doneStatus: 'Done Nice'}
    }
      if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
          return { doneStatus: 'Game Over'}
      }
    })
  }

  possibleCombinationSum(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return this.possibleCombinationSum(arr, n);
    }
    let listSize = arr.length, combinationsCount = (1 << listSize);
    for (let i = 1; i < combinationsCount ; i++ ) {
      let combinationSum = 0;
      for (let j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }
    return false;
  };

  possibleSolutions = ({randomNumberOfStars, usedNumbers}) => {
    const possibleNumbers = [...Array(9).keys()].map((number) => {
      return number + 1
    }).filter((number) => !usedNumbers.includes(number));
    return this.possibleCombinationSum(possibleNumbers, randomNumberOfStars)

  }

  resetGame = () => this.setState(this.initialState());

  render() {
    const { 
      randomNumberOfStars, 
      selectedNumbers, 
      answerIsCorrect, 
      usedNumbers,
      redraws,
      doneStatus
    } = this.state
    return (
      <div className='container'>
        <h2>Play Nine</h2>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars}/>
          <Button 
            selectedNumbers={selectedNumbers} 
            checkAnswer={this.checkAnswer}
            acceptAnswer={this.acceptAnswer}
            redraw={this.redraw}
            redraws={redraws}
            answerIsCorrect={answerIsCorrect}/>
          <Answer 
            selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber}/>
        </div>
        <br/>
        {doneStatus 
        ? <DoneFrame 
          doneStatus={doneStatus} 
          resetGame={this.resetGame}
          />
        : <Numbers 
          selectedNumbers={selectedNumbers} 
          selectedNumber={this.selectedNumber}
          usedNumbers={usedNumbers}/> }
      </div>
    );
  }
}

export default Game;