// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }

// function ShowDog(name, breed, weight, handler) {
//     Dog.call(this, name, breed, weight);
//     this.handler = handler;
// }

// ShowDog.prototype = new Dog();

// ShowDog.prototype.constructor = ShowDog;

// ShowDog.prototype.league = "Webville";

// ShowDog.prototype.stack = function() {
//     console.log("Stack");
// };

// ShowDog.prototype.bait = function() {
//     console.log("Bait");
// };

// ShowDog.prototype.gait = function(kind) {
//     console.log(`${kind}ing`);
// };

// ShowDog.prototype.groom = function() {
//     console.log("Groom");
// }

// Dog.prototype.species = "Canine";

// Dog.prototype.bark = function() {
//     if (this.weight > 25) {
//         console.log(`${this.name} says Woof!`);
//     } else {
//         console.log(`${this.name} says Yip!`);
//     }
// };

// Dog.prototype.sitting = false;

// Dog.prototype.run = function() {
//     console.log(`Run!`);
// };

// Dog.prototype.wag = function() {
//     console.log(`Wag!`);
// };

// Dog.prototype.sit = function() {
//     if (this.sitting) {
//         console.log(`${this.name} is already sitting.`);
//     } else {
//         this.sitting = true;
//         console.log(`${this.name} is now sitting.`);
//     }
 
// ;}

// var fido = new Dog("Fido", "Mixed", 38);
// var fluffy = new Dog("Fluffy", "Poodle", 30);
// var spot = new Dog("Spot", "Chihuahua", 10);
// var barnaby = new Dog("Barnaby", "Basset Hound", 55);
// var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");


// spot.bark = function() {
//     console.log(`${this.name} says WOOF!`);
// }

// scotty.stack();
// scotty.bark();
// console.log(scotty.league);
// console.log(scotty.species);

// fido.bark();
// fido.run();
// fido.wag();

// fluffy.bark();
// fluffy.run();
// fluffy.wag();

// spot.bark();
// spot.run();
// spot.wag();

// barnaby.sit();
// barnaby.sit();
// spot.sit();
// spot.sit();
// -----------------------

// function Game() {
//     this.level = 0;
// }

// Game.prototype.play = function() {
//     this.level++;
//     console.log(`Welcome to level ${this.level}`);
//     this.unlock();
// };

// Game.prototype.unlock = function() {
//     if (this.level === 42) {
//         Robot.prototype.deployLaser = function() {
//             console.log(`${this.name} is blasting you with laser beams!`);
//         }
//     }    
// };

// function Robot(name, year, owner) {
//     this.name = name;
//     this.year = year;
//     this.owner = owner;
// }

// var game = new Game();
// var robby = new Robot("Robby", 1956, "Dr. Morbius");
// var rosie = new Robot("Rosie", 1962, "George Jeston");

// while (game.level < 42) {
//     game.play();
// }

// robby.deployLaser();
// rosie.deployLaser();
// --------------------

// String.prototype.palindrome = function() {
//     var len = this.length-1;
//     for (let i = 0; i <= len/2; i++) {
//         if (this.charAt(i) !== this.charAt(len-i)) {
//             return false;
//         }
//     }
//     return true;
// }

// var phrases = ["mom", "trying", "level", "lever", "crying"];

// for (var i = 0; i < phrases.length; i++) {
//     var phrase = phrases[i];
//     if (phrase.palindrome()) {
//         console.log(`${this.phrase} is a palindrome!`);
//     } else {
//         console.log(`${this.phrase} is NOT a palindrome!`);
//     }
// }

$(document).ready(function () {
    alert("JQuery seems really cool");
});
