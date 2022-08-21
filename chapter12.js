// var dog = {
//     name: "Fido",
//     breed: "Mixed",
//     weight: 38
// };

// var duck = {
//     type: "redheaded",
//     canFly: true
// }

// function Duck(type, canFly) {
//     this.type = type;
//     this.canFly = canFly;
// }
// ---------------------------
// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function() {
//         if (this.weight > 25) {
//             alert(`${this.name} says Woof!`);
//         } else {
//             alert(`${this.name} says Yip!`);
//         }
//     };
// }

// var fido = new Dog("Fido", "Mixed", 38);
// var fluffy = new Dog("Fluffy", "Poodle", 30);
// var spot = new Dog("Spot", "Chihuahua", 10);
// var dogs = [fido, fluffy, spot];

// for (let i = 0; i < dogs.length; i++) {
//     var size = "small";
//     if (dogs[i].weight > 10) {
//         size = "large";
//     }
//     console.log(`Dog: ${dogs[i].name} is a ${size} ${dogs[i].breed}.`);
// }

// for (let i = 0; i < dogs.length; i++) {
//     dogs[i].bark();
// }
// ------------------------

// function Coffee(roast, ounces) {
//     this.roast = roast;
//     this.ounces = ounces;
//     this.getSize = function() {
//         if (this.ounces === 8) {
//             return "small";
//         } else if (this.ounces === 12) {
//             return "medium";
//         } else {
//             return "large";
//         }
//     };
//     this.toString = function() {
//         this.getSize();
//         return `You've ordered a ${this.getSize()} ${this.roast}`;

//     }
// }

// var houseBlend = new Coffee("House Blend", 12);
// console.log(houseBlend.toString());
// var darkRoast = new Coffee("Dark Roast", 16);
// console.log(darkRoast.toString());
// --------------------------------

// function Car(make, model, year, color, passengers, convertible, mileage) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.passengers = passengers;
//     this.convertible = convertible;
//     this.mileage = mileage;
//     this.started = false;
//     this.start = function() {
//         this.started = true;
//     };
//     this.stop = function() {
//         this.started = false;
//     };
//     this.drive = function() {
//         if (this.started) {
//             console.log(`${this.make} ${this.model} goes zoom zoom!`);
//         } else {
//             console.log(`Start the engine first.`);
//         }
//     };
// }

// var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
// var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
// var taxi = new Car("Webville motors", "Taxi", 1955, "yellow", 4, false, 281341);
// var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
// var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

// var cars = [chevy, cadi, taxi, fiat, testCar];

// for (let i = 0; i < cars.length; i++) {
//     cars[i].start();
//     cars[i].drive();
//     cars[i].drive();
//     cars[i].stop();
// }

// var cadiParams = {
//     make: "GM",
//     model: "Cadillac", 
//     year: 1955,
//     color: "tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12892
// };

// var cadi = new Car(cadiParams);

// function Car(params) {
//     this.make = params.make;
//     this.model = params.model;
//     this.year = params.year;
//     this.color = params.color;
//     this.passengers = params.passengers;
//     this.convertible = params.convertible;
//     this.mileage = params.mileage;
//     this.started = false;
//     this.start = function() {
//         this.started = true;
//     };
//     this.stop = function() {
//         this.started = false;
//     };
//     this.drive = function() {
//         if (this.started) {
//             console.log(`${this.make} ${this.model} goes zoom zoom!`);
//         } else {
//             console.log(`Start the engine first.`);
//         }
//     };
// }

// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function() {
//         if (this.weight > 25) {
//             alert(`${this.name} says Woof!`);
//         } else {
//             alert(`${this.name} says Yip!`);
//         }
//     };
// }

// var limoParams = {
//     make: "Webville Motors",
//     model: "limo",
//     year: 1983,
//     color: "black",
//     passengers: 12,
//     convertible: true,
//     mileage: 21120
// };

// var limo = new Car(limoParams);
// var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);

// console.log(`${limo.make} ${limo.model} is a ${typeof limo}`);
// console.log(`${limoDog.name} is a ${typeof limoDog}`);

// if (cadi instanceof Car) {
//     console.log(`Congrats, its a Car!`);
// }
// ------------------------------------------

function dogCatcher(obj) {
    if (obj instanceof Dog) {
        return true;
    } else {
        return false;
    }
}

function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);

var fido = {
    name: "Fido",
    breed: "Mixed", 
    weight: 38
};

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            alert(`${this.name} says Woof!`);
        } else {
            alert(`${this.name} says Yip!`);
        }
    };
}

var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [meow, whiskers, fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
        console.log(`${dogs[i].name} is a dog!`);
    }
}