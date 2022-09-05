var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location1 + 2;

var guess;

var guesses = 0;
var hits = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (Enter an integer between 0 and 6) :");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HITS!!!");
            hits++;

            if (hits == 3){
                isSunk = true;
                alert("You sunk my battleship!");
            }
        } else {
            alert("MISS!");
        }
    }
}
var stats = "You took " + guesses + " guesses to sink the ship, " +
            "which means your shooting accuracy is " + (3/guesses);

alert(stats);