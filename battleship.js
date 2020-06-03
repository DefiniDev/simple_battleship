var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hit1 = false;
var hit2 = false;
var hit3 = false;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 && hit1 == false) {
      alert("Hit forward!");
      hit1 = true;
    } else if (guess == location1 && hit1 == true) {
      alert("Already hit!");
    } else if (guess == location2 && hit2 == false) {
      alert("Hit mid!");
      hit2 = true;
    } else if (guess == location2 && hit2 == true) {
      alert("Already hit!");
    } else if (guess == location3 && hit3 == false) {
      alert("Hit aft!");
      hit3 = true;
    } else if (guess == location3 && hit3 == true) {
      alert("Already hit!");
    } else {
      alert("MISS!");
    }
    if (hit1 && hit2 && hit3 == true) {
      isSunk = true;
      alert("You sank my battleship!");
    }
  }
}
var stats =
  "You took " +
  guesses +
  " guesses to sink the battleship, " +
  "which means your shooting accuracy was " +
  3 / guesses;
alert(stats);
