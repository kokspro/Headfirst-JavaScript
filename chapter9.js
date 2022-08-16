// function pageLoadedHandler() {
//     alert(`I'm alive!`);
// }

// window.onload = pageLoadedHandler;


// window.onload = init;

// function init() {
//     var images = document.getElementsByTagName('img');
//     for (let i = 0; i < images.length; i++) {
//         // images[i].onclick = showAnswer;
//         images[i].onmouseover = showAnswer;
//         images[i].onmouseout = reblur;
//     }
// }

// function showAnswer(e) {
//     var image = e.target;
//     var name = image.id;
//     name =  "images/" + name + ".jpg";
//     image.src = name;  
// }

// function reblur(e) {
//     var image = e.target;
//     var name = image.id;
//     name = "images/" + name + "blur.jpg";
//     image.src = name;
// }
// window.onload = init;

// function init() {
//     var map = document.getElementById('map');
//     map.onmousemove = showCoords;
//     forever();
// }

// function showCoords(e) {
//     var coords = document.getElementById('coords');
//     var x = e.clientX;
//     var y = e.clientY;
//     coords.innerHTML = `Map Coordinates: ${x}, ${y}`;
// }

// function timerHandler() {
//     alert('This is pretty cool to be honest');
//     forever();
// }

// function forever() {setTimeout(timerHandler, 3000);}

// var tick = true;

// function ticker() {
//     if (tick) {
//         console.log('Tick');
//         tick = false;
//     } else {
//         console.log('Tock');
//         tick = true;
//     }
// }

// setInterval(ticker, 1000);

function resize() {
    var element = document.getElementById('display');
    element.innerHTML = element.innerHTML + " that tickles";
}

window.onresize = resize;