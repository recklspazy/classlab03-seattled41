"use strict";
alert('Please respond to the following questions with Y/ y/ YES/ Yes/ yes OR N/ n/ NO/ No,');

function rightAnswer(){
  console.log("You are correct!");
  return "You are Correct!"
}
function wrongAnswer(){
  console.log("You are wrong!");
  return "You are wrong!"
}
//function for question one
function questionOne(){
  var responseOne = prompt('Was I born in WA state?').toUpperCase();
  console.log(responseOne);

  if (responseOne === 'Y' || responseOne === 'YES') {
    return wrongAnswer();
  } else {
    return rightAnswer();
  }
  console.log(responseOne);
} 
//function for question two
function questionTwo(){
  var responseTwo = prompt('Do I like to drive?').toUpperCase();
  console.log(responseTwo);
  if (responseTwo === 'Y'|| responseTwo === 'YES') {
    return rightAnswer();
  }
  else {
    wrongAnswer();
  }
  console.log(responseTwo);
}
//function for question three
function questionThree(){
  var responseThree = prompt ('Am I Right Handed?') .toUpperCase();
  console.log(responseThree);
  if (responseThree === 'N'|| responseThree === 'NO'){
    return wrongAnswer();
  }
  else if (responseThree === 'YES' || responseThree === 'Y') {
   return rightAnswer();
  }
  console.log(responseThree);
}
//funciton for questoin four
function questionFour(){
  var responseFour = prompt ('Am i Short?').toUpperCase();
  console.log(responseFour);
  if  (responseFour === 'Y' || responseFour === 'YES'){
    return rightAnswer();
  } 
  else {
    return wrongAnswer();
  }
  console.log(responseFour);
}
//function for question 5
function questionFive(){
  var responseFive = prompt ('Am i tired?').toUpperCase();
  console.log(responseFive);
  if (responseFive === 'Y' || responseFive === 'YES'){
    return rightAnswer();
  }
  else if (responseFive === 'N' || responseFive === 'NO'){
    return wrongAnswer();
  }
  console.log(responseFive);
}
//funciton for question six
function questionSix(){
  var favNum = 23;
  var numberGuess = parseInt(prompt ('Between 1 to 50. What number am i guessing?'));
  console.log('favNum', favNum);
  var counter = 0;
  while (numberGuess !== favNum && counter < 3) { 
    if (numberGuess < favNum) {
      numberGuess = parseInt(prompt('too low guess again.'));
      counter ++;
    } else {
      numberGuess = parseInt(prompt('too high. guess again.'));
      counter ++;
    }
}
console.log('counter',counter);
console.log('numberGuess',numberGuess);
}
//funciton for question seven
function questionSeven(){
  var states = ['california','kentucky','maryland'];
  var guessState = prompt ('Guess what state i have visited?');
  var counter2 = 0;
  var answer = false;

  while (counter2 <5 && answer === false) {
    for(var places = 0; places <= states.length; places++){
      if(guessState === states[places]) {
        alert('You are right');
        counter2 ++;
        break;
      } 
    } 
    if(counter2 === 6){
      alert ('you are out of tries');
    } 
    else {
      guessState = prompt ('guess again.');
      counter2 ++;
    } 
  }  
}
