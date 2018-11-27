'use strict';

// conditional logic
// if/else

//  if(condition) {
//    run this code
  //} else {
    //run this code}

//  if(condition) {
//    run this code
//  } else if {
//   run this code
//  } else {
//    run this code
//  }



var startGame = prompt('Do you want to play a game?').toUpperCase();
if(startGame === 'YES') {
  alert('Great, time to play...');
} else {
  alert('Goodbye forever!');
} 
console.log('the user plays game ' + startGame);

var petGuess = prompt('Do you think I have more than 4 pets?').toLowerCase();
if(petGuess === 'no') {
  alert('That is correct!');
} else {
  alert('That is incorrect!');
}
console.log('the user has guessed ' + petGuess);

var travelGuess = confirm('Do you think I\'ve been to India?');
  if(travelGuess === true) {
    alert('Sorry, but I\'ve never been to India.');
  } else {
    alert('Thats correct. Never been to India')
  }
console.log('The user thought ' + travelGuess);