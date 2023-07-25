'use strict';




function getLocation(){




    let location = prompt("Where are you from?");
   
    console.log(location)
   
    document.write(location)
   
}




function getFavoriteVaction(){


    let FavoriteVaction = prompt("What state did your favorite vacation spot reside in?")
    console.log(FavoriteVaction)
   
    if (FavoriteVaction == "Louisiana") {
        alert("Come Back Soon");
    }   else if (FavoriteVaction == "Wisconsin") {
        alert("How's the cheese?");
    }   else {
        alert("Where was my invite?");
       
    }
}


let userGuess = prompt("Guess what state I currently live in?");
let attempts = 3;
let correctAnswer = "Louisiana";


while (attempts > 0) {
  if (userGuess === correctAnswer) {
    alert("You got it! I live in " + correctAnswer);
    break;
  } else {
    userGuess = prompt("Try Again");
    attempts--;
  }
}


if (attempts === 0) {
  alert("Out of attempts. The correct answer is " + correctAnswer);
}
