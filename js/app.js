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
    alert('Thats correct. Never been to India');
  }
console.log('The user thought ' + travelGuess);

var flavorPref = prompt('Is my favorite flavor of ice cream chocolate?');
if(flavorPref === 'no' || flavorPref === 'NO' || flavorPref === 'No' || flavorPref === 'nO') {
  alert('You\'re right, I like a lot of other flavors more than chocolate!');
} else{
  alert('No way! Vanilla is better!');
}
console.log('user thinks I like chocolate best ' + flavorPref);
/* decided to add a bunch of 'or statements, just for the sake of practice*/

var tattooNum = prompt('Do I have more than six tattoos? Y/N').toUpperCase();
if(tattooNum === 'y'){
  alert('No, but I wish I did have more!');
} else{
  alert('That\'s exactly right!');
}
console.log('tatto answer ' + tattooNum);
var cardGames = prompt('Do I like trading card games? Y/N').toLowerCase();
if(cardGames === 'y'){
  alert('Ya! I like games like Magic: The Gathering');
} else{
  alert('Actually, I really enjoy trading card games.');
}
console.log('nerd level is correct ' + cardGames);
