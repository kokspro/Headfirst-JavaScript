// function handler() { alert('Yeah, that page loaded!')};
// window.onload = handler;

// window.onload = function() { alert('Yeah, that page loaded!')};
// ------------------------------
// window.onload = init;

// var cookies = {
//     instructions: "Preheat oven to 350. . . ",
//     bake: function(time) {
//         console.log('Baking the cookies.');
//         setTimeout(done, time);
//     }
// };

// function init() {
//     var button = document.getElementById('bake');
//     button.onclick = handleButton;
// }

// function handleButton() {
//     console.log('Time to bake the cookies!');
//     cookies.bake(2500);
// }

// function done() {
//     alert('Cookies are ready, take them out to cool.');
//     console.log('Cooling the cookies.');

//     var cool = function() {
//         alert('Cookies are cool, time to eat!');
//     }
    
//     setTimeout(cool, 1000);
// }
// ------------------------
// window.onload = function() {
//     var button = document.getElementById('bake');
//     button.onclick = function() {
//         console.log('Time to bake the cookies!');
//         cookies.bake(2500);
//     };
// };

// var cookies = {
//     instructions: "Preheat oven to 350. . . ",
//     bake: function(time) {
//         console.log('Baking the cookies.');
//         setTimeout(done, time);
//     }
// };

// function done() {
//     alert('Cookies are read, take them out to cool.');
//     console.log('Cooling the cookies.);
//     setTimeout(function() {
//         alert("Cookies are cool, time to eat!");
//     }, 1000);
// }
// --------------------------

// function cookieAlarm() {
//     alert("Time to take the cookies out of the oven");
// }
// setTimeout(cookieAlarm, 1000);

// setTimeout(function() {
//     alert("Time to take the cookies out of the oven");
//     }, 5000);
// ------------------------------

// function vaccine(dosage) {
//     if (dosage > 0) {
//         inject(dosage);
//     }
// }

// administer(patient, vaccine, time);

// administer(patient, function(dosage) {
//     if (dosage > 0) {
//         inject(dosage);
//     }
// } , time);
// ------------------------

// var justAVar = "Oh, don't you worry about it, I'm GLOBAL";

// function whereAreYou() {
//     var justAVar = "Just an every day LOCAL";

//     function inner() {
//         return justAVar;
//     }
    
//     return inner;
// }
// var innerFunction = whereAreYou();
// var result = innerFunction();
// console.log(result);

// --------------------------------

// function makeCounter() {
//     var count = 0;

//     function counter() {
//         count = count + 1;
//         return count;
//     }
//     return counter;
// }

// var doCount = makeCounter();
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());
// ----------------------------------

// function makePassword(password) {
//     return function guess(passwordGuess) { 
//         return (passwordGuess === password);
//     };
// }

// var tryGuess = makePassword("secret");
// console.log("Guessing 'nope': " + tryGuess("nope"));
// console.log("Guessing 'secret': " + tryGuess("secret"));

// function multN(n) {
//     return function multi(m) {
//         return n * m;
//     };
// }

// var numb3 = multN(3);
// console.log(numb3(5));


function makeCounter() {
    var count = 0;

    return {
        increment: function() {
            count++;
            return count;
        }
    };
}

var doCount = makeCounter();
console.log(doCount.increment());
console.log(doCount.increment());
console.log(doCount.increment());