// 'use strict';

// // conditional logic
// // if/else

// //  if(condition) {
// //    run this code
// // } else {
// // run this code}

// //  if(condition) {
// //    run this code
// //  } else if {
// //   run this code
// //  } else {
// //    run this code
// //  }
// var correctCounter = 0

var name = prompt('What is your name?');
console.log('user entered' + name);

// function startFunction () {
//   var startGame = prompt('Do you want to play a game?').toUpperCase();
//   if(startGame === 'YES') {
//     alert('Great, time to play...');
//   } else {
//     alert('Goodbye forever!');
//   }
//   console.log('the user plays game ' + startGame);
// }

// function petNumFunction () {
//   var petGuess = prompt('Do you think I have more than 4 pets?').toLowerCase();
//   if(petGuess === 'no') {
//     alert('That is correct!');
//     correctCounter++
//   } else {
//     alert('That is incorrect!');
//   }
//   console.log('the user has guessed ' + petGuess);
// }

// function travelGuessFunction () {
//   var travelGuess = prompt('Do you think I\'ve been to India?');
//   if(travelGuess === true) {
//     alert('Sorry, but I\'ve never been to India.');
//   } else {
//     alert('Thats correct. Never been to India');
//   }
//   console.log('The user thought ' + travelGuess);
// }

// function flavorFunction () {
//   var flavorPref = prompt('Is my favorite flavor of ice cream chocolate?');
//   if(flavorPref === 'no' || flavorPref === 'NO' || flavorPref === 'No' || flavorPref === 'nO') {
//     alert('You\'re right, I like a lot of other flavors more than chocolate!');
//   } else{
//     alert('No way! Vanilla is better!');
//   }
//   console.log('user thinks I like chocolate best ' + flavorPref);
//   /* decided to add a bunch of 'or statements, just for the sake of practice*/
// }

// function tattooFunction (){
//   var tattooNum = prompt('Do I have more than six tattoos? Y/N').toUpperCase();
// if(tattooNum === 'y'){
//   alert('No, but I wish I did have more!');
// } else{
//   alert('That\'s exactly right!');
// }
// console.log('tatto answer ' + tattooNum);
// }

// function cardGameFunction (){
//   var cardGames = prompt('Do I like trading card games? Y/N').toLowerCase();
//   if(cardGames === 'y'){
//     alert('Ya! I like games like Magic: The Gathering');
//   } else{
//     alert('Actually, I really enjoy trading card games.');
//   }
//   console.log('nerd level is correct ' + cardGames);
// }


// // New Question 6
// function ageFunction () {

//   var guessRemains = 4;
//   var myAge = 28;
//   while(guessRemains > 0) {
//     var guessMyAge = prompt( 'Can you guess my age?');
//     guessMyAge = parseInt(guessMyAge);

//     if(guessMyAge === myAge) {
//       alert('You are correct! I am still, thankfully, in my 20\'s');
//       break;
//     } else if(guessMyAge > myAge) {
//       guessRemains--;
//       alert('I\'m not that old!');
//     } else if(guessMyAge < myAge) {
//       guessRemains--;
//       alert('Thanks for thinking I look so young!');
//     }
//     if( guessRemains===0) {
//       alert('Sorry, you\'re out of attempts. The right answer is 28.');
//     }
//   }
//   console.log('user has guessed ' + guessMyAge);
//   console.log(guessRemains);
// }


// New Question 7

// function petFunction () {

var numGuess = 3;
var petNames = ['meatloaf', 'noodle', 'vader'];
var petFlag = false;
// going through array

for (var x = 0; x < numGuess; x++) {
  var petNameGuess = prompt('I have 3 pets. Can you guess one of their names? **HINT** Two are named after food.');
  console.log(petNameGuess);
  petNameGuess= petNameGuess.toLowerCase();
  console.log(petFlag);
  // checking for true

  if (petFlag === true) {
    alert('That\'s correct!');
    break;
  }

  for (var i = 0; i < petNames.length; i++) {
    console.log(petNameGuess + ' : ' + petNames[i]);
    if (petNameGuess === petNames[i]) {
      petFlag = true;
      break;
    }

  }

  console.log('user guessed ' + petNameGuess);
// console.log(numGuess);
}

// function userRightFunc () {
//   alert( name + ' you got ' + counterCorrect + ' out of 7.');
// }

// }


// startFunction ();
// petNumFunction ();
// travelGuessFunction ();
// flavorFunction ();
// tattooFunction ();
// cardGameFunction ();
// ageFunction();

// petFunction();
// userRightFunc();
