var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var guessTotal = 0;
var score = 7;
var isSunk = false;
var hits = 0;

while (isSunk == false) {
    if (hits == 3) {
        isSunk = true;
        alert(`
            You sank my battleship!
            Your score was ${score}
            It took you ${guessTotal} guesses`);
        break;    
    }
    guess = prompt('Where do you want to shoot? (0-6)');
    parseInt(guess);
    if (guess >= 0 && guess <= 6) {
        if ( guess == location1) {
            alert('HIT!');
            guessTotal += 1;
            location1 = 20;
            hits += 1;
        } else if (guess == location2) {
            alert('HIT!');
            guessTotal += 1;
            location2 = 20;
            hits += 1;
        } else if (guess == location3) {
            alert('HIT!');
            guessTotal += 1;
            location3 = 20;
            hits += 1;
        } else {
            alert('MISS!');
            score -= 1;
            guessTotal += 1;
        }
        
    } else {
        alert('You did not guess a proper value, try again!');
    }
};







