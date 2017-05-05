///// EVENTS /////

var submitBtn = document.getElementById("submit"),
	container = document.querySelector(".container");

submitBtn.addEventListener("click", function(event) {
	console.log('Hey, I\'ve been clicked!');
});
/* pass the name of the event we want to listen, 
and specify what happens when the event ir trigger with a function name or declare an anonymous function */

// Mouse Enter Event
// Mouse Enter just one time - remove the event listner
container.addEventListener("mouseenter", mouseEnterContainer);

function mouseEnterContainer() {
	console.log('Hey, there was a mouseenter event triggered!');

	container.removeEventListener("mouseenter", mouseEnterContainer);
};

// Keyup Event
// give numbers ex. 37/39 for slides
document.addEventListener("keyup", function(event) {
	console.log(event.keyCode)
});