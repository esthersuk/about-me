'use strict';

var response = confirm('Want to learn about me?');
if (response){
  console.log('Let\'s do this!');
  alert('Let\'s do this!');
}
else {
  console.log('Okay, no worries!');
  alert('Okay, no wories!');
}
var response = prompt('Do I love food?');
if (response.toLowerCase() === 'yes'){
  console.log('I do!');
  alert('I do!');
}
else {
  console.log('How could I not?');
  alert('How could I not?');
}
var response = prompt('Did I have a previous e-commerce role?');
if (response.toLowerCase() === 'no'){
  console.log('I actually did!');
  alert('I actually did!');
}
else {
  console.log('You\'re right, I loved it!');
  alert('You\'re right, I loved it!');
}
var response = prompt('Is my dog\'s name Woof?');
if (response.toLowerCase === 'yes'){
  console.log('Haha, yes one of their names is Woof');
  alert('Haha, yes one of their names is Woof');
}
else {
  console.log('Funny, but it is!');
  alert('Funny, but it is!');
}
var response = prompt('Woof is younger than Coco, though. Yes or no?');
if (response.toLowerCase === 'yes'){
  console.log('True story!');
  alert('True story!');
}
else {
  console.log('Nope, Coco was born first!');
  alert('Nope, Coco was born first!');
}
var response = prompt('Do I have any other dogs?');
if (response.toLowerCase === 'no'){
  console.log('Yup, I wish I had more though!');
  alert('Yup, I wish I had more though!');
}
else {
  console.log('I wish! But no...');
  alert('I wish! But no...');
}
var number = 26;
var guesses = 4;
while(guesses > 0) {
  var response = parseInt(prompt('Try to guess how old I am! You have ' + guesses + ' guesses!'));
  if(response === number){
    alert('Yes, good guess!');
    guesses = 0;
  }
  else if ( response < number){
    alert('Your guess is too low.');
    guesses--;
  }
  else if ( response > number){
    alert('Your guess is too high.');
    guesses--;
  }
  else {
    alert('incorrect');
    guesses--;
  }
}
var country = parseInt(prompt('How many countries have I traveled to?'));
for (var i = 4; i > 0 ; i--) {
  if (country === 8){
    alert('Yes: Germany, Italy, Greece, France, Spain, South Korea, U.S.A., and Canada.');
    i = 0;
  }
  else if ( country < 8){
    country = parseInt(prompt('Your answer is too low.'));
  }
  else if ( country > 8){
    country = parseInt(prompt('Your answer is too high.'));
  }
  else {
    country = parseInt(prompt('More or less, but try again!'));
  }
}
