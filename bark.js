function bark (name, weight) {
    if (weight > 20) {
        console.log(`${name} says WOOF WOOF!`);
    }   else {
        console.log(`${name} says woof woof!`);
    }
}

bark('rover', 23);
bark('spot', 13);
bark('spike', 53);
bark('lady', 17);
bark('dino', 0, 0);
bark('lady', 20);
bark('dino', "20");

function calculateArea (radius) {
    var area;
    if (radius <=0) {
        return;
    } else {
        area = Math.PI * radius * radius;
        return area;
    }
}
 var radius = 7;
 var theArea = calculateArea(radius)
 console.log(`The area is ${theArea}`);