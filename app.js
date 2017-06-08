'use strict';

var correctAnswers = 0;

function start() {
  var response = confirm('Want to learn about me?');
  if (response){
    console.log('Let\'s do this!');
    alert('Let\'s do this!');
    correctAnswers += 1;
  } else {
    console.log('Okay, no worries!');
    alert('Okay, no wories!');
  }
}

function question1() {
  var response = prompt('Do I love food?');
  if (response.toLowerCase() === 'yes'){ //Null response gets error because cant lowerCase
    console.log('I do!');
    alert('I do!');
    correctAnswers += 1;
  } else {
    console.log('How could I not?');
    alert('How could I not?');
  }
}

function question2() {
  var response = prompt('Did I have a previous e-commerce role?');
  if (response.toLowerCase() === 'no'){
    console.log('I actually did!');
    alert('I actually did!');
    correctAnswers += 1;
  }else {
    console.log('You\'re right, I loved it!');
    alert('You\'re right, I loved it!');
  }
}

function question3() {
  var response = prompt('Is my dog\'s name Woof?');
  if (response.toLowerCase === 'yes'){
    console.log('Haha, yes one of their names is Woof');
    alert('Haha, yes one of their names is Woof');
    correctAnswers += 1;
  } else {
    console.log('Funny, but it is!');
    alert('Funny, but it is!');
  }
}


function question4() {
  var response = prompt('Woof is younger than Coco, though. Yes or no?');
  if (response.toLowerCase === 'yes'){
    console.log('True story!');
    alert('True story!');
    correctAnswers += 1;
  } else {
    console.log('Nope, Coco was born first!');
    alert('Nope, Coco was born first!');
  }
}


function question5() {
  var response = prompt('Do I have any other dogs?');
  if (response.toLowerCase === 'no'){
    console.log('Yup, I wish I had more though!');
    alert('Yup, I wish I had more though!');
    correctAnswers += 1;
  }
  else {
    console.log('I wish! But no...');
    alert('I wish! But no...');
  }
}

function question6() {
  var number = 26;
  var guesses = 4;
  while(guesses > 0) {
    var response = parseInt(prompt('Try to guess how old I am! You have ' + guesses + ' guesses!'));
    if(response === number){
      alert('Yes, good guess!');
      guesses = 0;
      correctAnswers += 1;
    } else if ( response < number){
      alert('Your guess is too low.');
      guesses--;
    } else if ( response > number){
      alert('Your guess is too high.');
      guesses--;
    } else {
      alert('Incorrect');
      guesses--;
    }
  }
}

  function question7() {
    var country = parseInt(prompt('How many countries have I traveled to?'));
    for (var i = 4; i > 0 ; i--) {
      if (country === 8){
        alert('Yes: Germany, Italy, Greece, France, Spain, South Korea, U.S.A., and Canada.');
        i = 0;
        correctAnswers += 1;
      } else if ( country < 8){
        country = parseInt(prompt('Your answer is too low.'));
      } else if ( country > 8){
        country = parseInt(prompt('Your answer is too high.'));
      } else {
        country = parseInt(prompt('More or less, but try again!'));
      }
    }
  }

start();
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7()
  alert('That\'s all the questions, you got ' + correctAnswers + ' correct out of 7 possible.')
