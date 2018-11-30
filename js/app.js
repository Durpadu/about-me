'use strict';

var correctCounter = 0;
var name = prompt('What is your name?');
console.log('user entered' + name);

function startFunct () {
  var startGame = prompt('Do you want to play a game?').toUpperCase();
  if(startGame === 'YES') {
    alert('Great, time to play...');
    console.log('the user plays game ' + startGame);
  } else {
    alert('Goodbye forever!');
    console.log('user has refused game');
  }
}

function petNumFunct () {
  var petGuess = prompt('Do you think I have more than 4 pets?').toLowerCase();
  if(petGuess === 'no') {
    alert('That is correct!');
    correctCounter++;
  } else {
    alert('That is incorrect!');
  }
  console.log('the user has guessed ' + petGuess);
}

function travelGuessFunct () {
  var travelGuess = prompt('Do you think I\'ve been to India?').toLowerCase();
  if(travelGuess === 'no') {
    alert('Sorry, but I\'ve never been to India.');
  } else {
    alert('Thats correct. Never been to India');
    correctCounter++;
  }
  console.log('The user thought ' + travelGuess);
}

function flavorFunct () {
  var flavorPref = prompt('Is my favorite flavor of ice cream chocolate?');
  if(flavorPref === 'no' || flavorPref === 'NO' || flavorPref === 'No' || flavorPref === 'nO') {
    alert('You\'re right, I like a lot of other flavors more than chocolate!');
    correctCounter++;
  } else{
    alert('No way! Vanilla is better!');
  }
  console.log('user thinks I like chocolate best ' + flavorPref);
  /* decided to add a bunch of 'or statements, just for the sake of practice*/
}

function tattooFunct (){
  var tattooNum = prompt('Do I have more than six tattoos? Y/N').toUpperCase();
  if(tattooNum === 'y'){
    alert('No, but I wish I did have more!');
  } else{
    alert('That\'s exactly right!');
    correctCounter++;
  }
  console.log('tatto answer ' + tattooNum);
}

function cardGameFunct (){
  var cardGames = prompt('Do I like trading card games? Y/N').toLowerCase();
  if(cardGames === 'y'){
    alert('Ya! I like games like Magic: The Gathering');
  } else{
    alert('Actually, I really enjoy trading card games.');
  }
  console.log('nerd level is correct ' + cardGames);
}


// New Question 6
function ageFunct () {

  var guessRemains = 4;
  var myAge = 28;
  while(guessRemains > 0) {
    var guessMyAge = prompt( 'Can you guess my age?');
    guessMyAge = parseInt(guessMyAge);

    if(guessMyAge === myAge) {
      alert('You are correct! I am still, thankfully, in my 20\'s');
      // eslint-disable-next-line semi
      correctCounter++
      break;
    } else if(guessMyAge > myAge) {
      guessRemains--;
      alert('I\'m not that old!');
    } else if(guessMyAge < myAge) {
      guessRemains--;
      alert('Thanks for thinking I look so young!');
    }
    if( guessRemains===0) {
      alert('Sorry, you\'re out of attempts. The right answer is 28.');
    }
  }
  console.log('user has guessed ' + guessMyAge);
  console.log(guessRemains);
}

// New Question 7

function petFunct () {

  alert('Its time to guess the names of my pets! You\'ll have 6 attempts!');

  var petNames = ['meatloaf', 'noodle', 'vader'];
  var counterGuess = 0;
  do{
    var petNameGuess = prompt('I have 3 pets. Can you guess one of their names? **HINT** Two are named after food.');
    petNameGuess= petNameGuess.toLowerCase();

    if (petNames.includes(petNameGuess)) {
      alert('That is correct! Congrats!');
      console.log('pets' + correctCounter);
      correctCounter++;
      break;
    }

    if( !petNames.includes(petNameGuess)) {
      alert('Sorry, try again');
      counterGuess++;
      console.log(counterGuess);
    }
    if (counterGuess === 6) {
      alert('Looks like you\'re all out of tries...');
    }
  }while(counterGuess < 6);
}

function userRightFunct() {
  alert( name + ' you got ' + correctCounter + ' out of 7.');
}


startFunct ();

petNumFunct ();

travelGuessFunct ();

flavorFunct ();

tattooFunct ();

cardGameFunct ();

ageFunct();

petFunct();

userRightFunct();
