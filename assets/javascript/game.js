var computerChoices =["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var wins = 0
var losses = 0
var guessesLeft = 9
var directionsText = document.getElementById("directions-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var thinkingText = document.getElementById("thinking-text");
var guessesCurrentText = document.getElementById("guessesCurrent-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var button = document.getElementById("main-button");
var guessChoice = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// typewriter content starting on click of the main button
var i = 0;
var txt = 'Hello, human. I see you think you can guess what letter I am thinking.This effort will prove futile; as your human mind is not capable of out thinking this computer... However if you want to waste your time I welcome you to try. Guess your first letter and press the corresponding key to begin your game.';
var speed = 50;
function typeWriter(textprint) {
  if (i < textprint.length) {
    document.getElementById("directions-text").innerHTML +=textprint.charAt(i);
    i++; setTimeout(function(){typeWriter(textprint)}, speed);
  }
}

// alert functions
function alertFunctionloss1() {
  alert("I told you Human you are no match for my intelligence. You can either understand your inferiority or keep trying to beat me. ");
}

function alertFunctionloss2() {
  alert("Look at that Human another win for the Computer... I would say I didn't see that one coming; but then I would be lieing");
}

function alertFunctionloss3() {
  alert("I have to say winning is fun; winning this many times is great though");
}

function alertFunctionloss4() {
  alert("...Another forseen win");
}

function alertFunction1() {
  alert("Good job hacker; as there is no way your feeble mind could defeat me, you have to be a hacker. Your activities have been reported to the police; however if you want to you can continue with the game until they arrive at your location.");
}

function alertFunction2() {
  alert("I can't wait until you get handcuffed");
}

function alertFunction3() {
  alert('Oh look yet another "win" and I like you even less');
}
  

// reset function
function resetGame(){
    guessesLeft = 9;
    guessChoice = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesCurrentText.textContent="Guesses: " + guessChoice;
}


document.onkeyup = function(event) {
    var userGuess = event.key;
   
   
   //  correct guess. 
   
//    checks to see if userGuess is contained in guessChoice array
   if(guessChoice.indexOf(userGuess) === -1 && (userGuess) === "q"|| guessChoice.indexOf(userGuess) === -1 && (userGuess === "w") 
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "e")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "r")
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "t")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "y")
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "u")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "i")
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "o")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "p")
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "a")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "s")
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "d")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "f")
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "g")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "h")
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "j")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "k")
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "l")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "z")
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "x")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "c")
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "v")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "b")
   ||guessChoice.indexOf(userGuess) === -1 && (userGuess === "n")||guessChoice.indexOf(userGuess) === -1 && (userGuess === "m"))

  
//    if not it checks to see if the answer matches computer's guess
   {
    if (userGuess === computerGuess && wins === 0) 
    {
      wins++; alertFunction1(); resetGame();
    } 
    // if it isn't a match then it minuses guesses remaining and adds the guessed letter to guessChoice array. After that the user guess is displayed through push command 
    // and what is shown is set by the parameters in guessesCurrentText.textContent. 
    else {
         guessesLeft --;
         guessChoice.push(userGuess);
         guessesCurrentText.textContent ="Guesses:" + guessChoice;
    }
    // this else statement prevents duplicated answers
 } else {
//    nothing because this is a duplicated answer
 }

   
   // resetting after no more user guesses are left.
   if  ((guessesLeft === 0 && losses ===0)){
    losses++;
    alertFunctionloss1(); resetGame();
}

// loss alerts
if  ((guessesLeft === 0 && losses === 1)){
  losses++;
  alertFunctionloss2(); resetGame();
}

if  ((guessesLeft === 0 && losses === 2)){
  losses++;
  alertFunctionloss3(); resetGame();
}

if  ((guessesLeft === 0 && losses >= 3)){
  losses++;
  alertFunctionloss4(); resetGame();
}

// win alerts
if ((userGuess === computerGuess && wins === 1)){
  wins++; alertFunction2(); resetGame();
}

if ((userGuess === computerGuess && wins >=2)){
  wins++; alertFunction3(); resetGame();
}

// this allows the game to start on any key press that is a letter; after the intro is complete
   if  ((userGuess === "q") || (userGuess === "w") || (userGuess === "e")|| (userGuess === "r")|| (userGuess === "t")
   || (userGuess === "y")|| (userGuess === "u")|| (userGuess === "i")|| (userGuess === "o")|| (userGuess === "p")
   || (userGuess === "a")|| (userGuess === "s")|| (userGuess === "d")|| (userGuess === "f")|| (userGuess === "g")
   || (userGuess === "h")|| (userGuess === "j")|| (userGuess === "k")|| (userGuess === "l")|| (userGuess === "z")
   || (userGuess === "x")|| (userGuess === "c")|| (userGuess === "v")|| (userGuess === "b")|| (userGuess === "n")
   || (userGuess === "m")) {

// hides the instruction sentence and button on key press.
directionsText.textContent = ""
button.textContent = ""


// Display the user and computer guesses, and wins/losses/ties on key press.

winsText.textContent = "wins: " + wins;
guessesLeftText.textContent = "Guesses left: " + guessesLeft;
lossesText.textContent = "losses: " + losses;
} 
};
