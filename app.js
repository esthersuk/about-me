'use strict';

var response = confirm("Are you ready to play?");
if (response){
  console.log("Let's do this!");
  alert("Let's do this!");
}
else {
  console.log("Bye Felicia!");
}
var response = prompt("Do I love food?");
if (response.toLowerCase() === "yes"){
  console.log("I do!");
  alert("I do!");
}
else {
  console.log("How could I not?");
  alert("How could I not?");
}
var response = prompt("Did I go to the Grand Canyon last weekend?");
if (response.toLowerCase() === "no"){
  console.log("I actually did!");
  alert("I actually did!");
}
else {
  console.log("You're right, it was so amazing!")
  alert("You're right, it was so amazing!")
}
var response = prompt("Is my dog\'s name Woof?")
if (response.toLowerCase === "yes"){
  console.log("Haha, yes one of their names is Woof")
  alert("Haha, yes one of their names is Woof")
}
else {
  console.log("Funny, but it is!")
  alert("Funny, but it is!")
}
var response = prompt("Woof is younger than Coco, though. Yes or no?")
if (response.toLowerCase === "yes"){
  console.log("True story!")
  alert("True story!")
}
else {
  console.log("Nope, Coco was born first!")
  alert("Nope, Coco was born first!")
}
var response = prompt("Do I have any other dogs?")
if (response.toLowerCase === "no"){
  console.log("Yup, I wish I had more though!")
  alert("Yup, I wish I had more though!")
}
else {
  console.log("I wish! But no...")
  alert("I wish! But no...")
}
