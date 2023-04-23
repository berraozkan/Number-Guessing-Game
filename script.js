var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100) + 1;
var noOfGuess = 0;
var guessedNums = [];

function play() {
    var userGuess = document.getElementById("guess").value;

    if (userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1 and 100.");
    }
    else {
        guessedNums.push(userGuess);

        noOfGuess += 1;

        if (userGuess < answer) {
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. Of guesses: " + noOfGuess;
            msg3.textContent = "Guessed numbers are: " + guessedNums;
        }
        else if (userGuess > answer) {
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. Of guesses: " + noOfGuess;
            msg3.textContent = "Guessed numbers are: " + guessedNums;
        }
        else if (userGuess == answer) {
            msg1.textContent = "Yippie You Win!!!";
            msg2.textContent = "The number was:" + answer;
            msg3.textContent = "You guessed it in " + noOfGuess + "guesses";
            document.getElementById("myButton").disabled = true;
        }
    }
}
