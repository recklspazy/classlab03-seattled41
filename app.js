"use strict";
/*alert('Please respond to the following questions with Y/ y/ YES/ Yes/ yes OR N/ n/ NO/ No,');

console.log(responseOne);

var responseOne = prompt('Was I born in WA state?').toUpperCase();
if (responseOne === 'Y' || responseOne === 'YES') {
  alert('Sorry, That is incorrect.');
} else {
  alert('You are correct. I was not born in WA state.');
}
console.log(responseOne);

console.log(responseTwo);
var responseTwo = prompt('Do I like to drive?').toUpperCase();
if (responseTwo === 'Y'|| responseTwo === 'YES') {
  alert('Yes I like to drive.');
}
else {
  alert ('No, I actually like to drive.');
}
console.log(responseTwo);

console.log(responseThree);
var responseThree = prompt ('Am I Right Handed?') .toUpperCase();
if (responseThree === 'N'|| responseThree === 'NO'){
  alert('Actually I am right handed.');
}
else if (responseThree === 'YES' || responseThree === 'Y') {
  alert ('YES, I am right handed.');
}
console.log(responseThree);

console.log(responseFour);
var responseFour = prompt ('Am i Short?').toUpperCase();
if  (responseFour === 'Y' || responseFour === 'YES'){
  alert ('Well if you say so.');
} 
else {
  alert ('I like to think i am tall.');
}
console.log(responseFour);

console.log(responseFive);
var responseFive = prompt ('Am i tired?').toUpperCase();
if (responseFive === 'Y' || responseFive === 'YES'){
  alert ('Yeah i used to work night shift. So i am adjusting to the day time routine.');
}
else if (responseFive === 'N' || responseFive === 'NO'){
  alert ('Actually i am very tired from switching shift around.');
}
console.log(responseFive);

console.log(numberGuess);*/
var answer = 23;
var numberGuess = parseInt(prompt ('Between 1 to 50. What number am i guessing?'));
var counter = 3;
while (numberGuess !== 23 && counter > 0) {
  counter--; 

  if (numberGuess < 23) {
    numberGuess = parseInt(prompt('too low guess again.'));
  } else {
    numberGuess = parseInt(prompt('too high. guess again.'));
  } if (answer === 23) {
    alert ('you got it.');
  }
}
console.log(counter);
console.log(numberGuess);
console.log(answer);
/*var states = ['california','kentucky','maryland'];
var guessState = parseInt(prompt ('Guess what state i have visited?'));
var counter = 5;
console.log(states);
while ( guessState !== states && counter > 6)
{ counter --;}
if (guessState === states) {
  states = parseInt(prompt('That is correct.'));
} else {
  guessState = parseInt(prompt('Try again.')); }*/

