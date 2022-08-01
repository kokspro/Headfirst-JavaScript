var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

var highScore = printAndGetHighScore(scores);
var bestSolutions = getBestResults(scores, highScore);
var bestValue = costEffective(scores, costs, highScore);

function printAndGetHighScore (scores) {
    var highScore = 0;

    for (let i = 0; i < scores.length; i++) {
        solution = i;
        console.log(`Solution #${i} produces ${scores[i]} bubbles.`);
        if ( scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults (scores, highScore) {
    var bestSolutions = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

function costEffective (scores, costs, highScore) {
    var cost = 100;
    var index;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i])
                index = i;
                cost = costs[i];
        }
    }
    return index;
}

console.log(`Bubble tests: ${scores.length}`);
console.log(`Highest bubble score: ${highScore}`);
console.log(`Solutions with the highest score: ${bestSolutions}`);
console.log(`The most cost effective solution is #${bestValue}`);