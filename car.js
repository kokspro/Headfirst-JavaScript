// var taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341
// };

// function prequal(car) {
//     if ( car.mileage > 10000) {
//         return false;
//     } else if ( car.year > 1960) {
//         return false;
//     }
//     return true;
// }

// var worthALook = prequal(taxi);

// if (worthALook) {
//     console.log(`You gotta check out this ${taxi.make} ${taxi.model}.`);
// } else {
//     console.log(`You should really pass on the ${taxi.make} ${taxi.model}.`);
// }

var honda = {
    make: 'Honda',
    model: 'Civic',
    year: 2014,
    color: 'Grey',
    passengers: 4,
    convertible: false,
    mileage: 71000,
    started: false,
    fuel: 0,
    start: function() {
        if (this.fuel <= 0) {
            alert(`The car is on empty, fill up before starting!`);
        } else {
            this.started = true;
        }       
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(`${this.make} ${this.model} goes zoom zoom!`);
                this.fuel = this.fuel - 1;
            } else {
                alert(`Uh oh, out of fuel.`);
                this.stop();
            }
        } else {
            alert('You need to start the engine first!');
        }
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};

honda.start();
honda.drive();
honda.addFuel(2);
honda.start();
honda.drive();
honda.drive();
honda.drive();
honda.stop();

// for (var prop in honda) {
//     console.log(`${prop}: ${honda[prop]}`);
// }