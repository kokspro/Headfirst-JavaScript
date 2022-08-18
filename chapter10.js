// var passengers = [
//     { name: "Jane Doloop", paid: true },
//     { name: "Dr. Evel", paid: true },
//     { name: "Sue Propety", paid: false },
//     { name: "John Funcall", paid: true },
//     { name: "Carrie Wilhite", paid: true },
//     { name: "Wyatt Wilhite", paid: false },
//     { name: "Lillian Wilhite", paid: false },
//     { name: "William Koks", paid: false },
// ];

// var paid = [];
// var notPaid = [];

// function check() {
//     for ( let i = 0; i < passengers.length; i++) {
//         if (passengers[i].paid) {
//             paid.push(passengers[i].name);
//         } else {
//             notPaid.push(passengers[i].name);
//         }
//     }
//     print();
// }

// function didPay() {
//     for ( let i = 0; i < paid.length; i++) {
//         console.log(`${paid[i]} has paid the fare.`);
//     }
// }

// function didNotPay() {
//     for ( let i = 0; i < notPaid.length; i++) {
//         console.log(`${notPaid[i]} has not paid the fare.`);
//     }
// }

// function print() {
//     didPay();
//     didNotPay();
// }

// check();

// function processPassengers(passengers, testFunction) {
//     for ( let i = 0; i < passengers.length; i++) {
//         if (testFunction(passengers[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// function checkNoFlyList(passenger) {
//     return (passenger.name === "Dr. Evel");
// }

// function checkNotPaid(passenger) {
//     return (!passenger.paid);
// }

// var allCanFly = processPassengers(passengers, checkNoFlyList);
// if (!allCanFly) {
//     console.log("The plane can't take off: we have a passenger on the no fly list!");
// }

// var allPaid = processPassengers(passengers, checkNotPaid);
// if (!allPaid) {
//     console.log("The plane can't take off: not everyone has paid!");
// }

// function printPassenger(passenger) {
//     var message = passenger.name;
//     if (passenger.paid) {
//         message = message + "has paid.";
//     } else {
//         message = message + "has not paid.";
//     }
//     console.log(message);
// }

// processPassengers(passengers, printPassenger);

// function fun(echo) {
//     console.log(echo);
// }

// fun("hello");

// function boo(aFunction) {
//     aFunction("boo");
// }
// boo(fun);
// console.log(fun);

// var passengers = [
//     { name: "Jane Doloop", paid: true, ticket: "coach" },
//     { name: "Dr. Evel", paid: true, ticket: "firstclass" },
//     { name: "Sue Propety", paid: false, ticket: "firstclass" },
//     { name: "John Funcall", paid: true, ticket: "coach" },
//     { name: "Carrie Wilhite", paid: true, ticket: "firstclass" },
//     { name: "Wyatt Wilhite", paid: false, ticket: "coach" },
//     { name: "Lillian Wilhite", paid: false, ticket: "coach" },
//     { name: "William Koks", paid: false, ticket: "firstclass" },
// ];

// function createDrinkOrder(passenger) {
//     var orderFunction;

//     if ( passenger.ticket === 'firstclass') {
//         orderFunction = function() {
//             alert("Would you  like a cocktail or wine?");
//         };
//     } else {
//         orderFunction = function() {
//             alert("Your choices are cola or water.");
//         };
//     }
//     return orderFunction;
// }

// function serveCustomer(passenger) {
//     var getDrinkOrderFunction = createDrinkOrder(passenger);
//     getDrinkOrderFunction();
//     getDrinkOrderFunction();
//     getDrinkOrderFunction();
//     getDrinkOrderFunction();
// }

// function serverPassengers(passengers) {
//     for ( let i = 0; i < passengers.length; i++) {
//         serveCustomer(passengers[i]);
//     }
// }

// serverPassengers(passengers);


// var passengers = [
//     { name: "Carrie Wilhite", paid: true, ticket: "firstclass" },
//     { name: "Wyatt Wilhite", paid: false, ticket: "premium economy" },
//     { name: "Lillian Wilhite", paid: false, ticket: "coach" },
//     { name: "William Koks", paid: false, ticket: "premium economy" }
// ];

// function createDrinkOrder(passenger) {
//     var orderFunction;

//     if ( passenger.ticket === 'firstclass') {
//         orderFunction = function() {
//             alert("Would you like a cocktail or wine?");
//         };
//     } else if (passenger.ticket === 'coach') {
//         orderFunction = function() {
//             alert("Your choices are cola or water.");
//         };
//     } else {
//         orderFunction = function() {
//             alert("Would you like wine, cola, or water?");
//         }
//     }
//     return orderFunction;
// }

// function createDinnerOrder(passenger) {
//     var dinOrderFunction;
    
//     if ( passenger.ticket === 'firstclass') {
//         dinOrderFunction = function() {
//             alert("Would you like chicken or pasta for dinner?");
//         }
//     } else if (passenger.ticket === 'coach') {
//         dinOrderFunction = function() {
//             alert("You may choose peanuts or pretzels.");
//         }
//     } else {
//         dinOrderFunction = function() {
//             alert("Would you like a snack box or cheese plate?");
//         }
//     }
//     return dinOrderFunction;
// }

// function serveCustomer(passenger) {
//     var getDrinkOrderFunction = createDrinkOrder(passenger);
//     var getDinnerOrder = createDinnerOrder(passenger);
//     getDrinkOrderFunction();
//     getDrinkOrderFunction();
//     getDinnerOrder();
//     getDrinkOrderFunction();
// }

// function serverPassengers(passengers) {
//     for ( let i = 0; i < passengers.length; i++) {
//         serveCustomer(passengers[i]);
//     }
// }

// serverPassengers(passengers);


// var numbersArray = [60, 50, 62, 58, 54, 54];

// function compareNumbers(num1, num2) {
//     if (num2 > num1) {
//         return 1;
//     } else if (num1 === num2) {
//         return 0;
//     } else {
//         return -1;
//     }
// }

// numbersArray.sort(compareNumbers);
// console.log(numbersArray);

var products = [
    {name: 'Grapefruit', calories: 170, color: "red", sold: 8200},
    {name: 'Orange', calories: 160, color: "orange", sold: 12101},
    {name: 'Cola', calories: 210, color: "caramel", sold: 25412},
    {name: 'Diet Cola', calories: 0, color: "caramel", sold: 43922},
    {name: 'Lemon', calories: 200, color: "clear", sold: 14983},
    {name: 'Raspberry', calories: 180, color: "pink", sold: 9427},
    {name: 'Root Beer', calories: 200, color: "caramel", sold: 9909},
    {name: 'Water', calories: 0, color: "clear", sold: 62123}
];

function compareSold(colaA, colaB) {
    return colaA.sold - colaB.sold;
}

products.sort(compareSold);
console.log(products);
