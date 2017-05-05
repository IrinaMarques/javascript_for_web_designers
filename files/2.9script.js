///// SELECTORS /////

console.log(document.body);

console.log(document.images);

// To get by the ID
var firstItem = document.getElementById('item-1'), // To get elements by the ID
	myList = document.getElementsByClassName('mylist'), // To get elements by the class
	paragraphs = document.getElementsByTagName('p'), // To get elements by the tag name
	images = document.querySelectorAll('img'); // Select all the images

// console.log(firstItem); // To get elements by the ID
// console.log(myList); // To get elements by the class
// console.log(paragraphs); // To get elements by the tag name
// console.log(images); // Select all the images

firstItem.style.color = "red"; // change the first item to color red
myList[1].style.display = "none"; // [] because it's an array - we say 1 because we have 2 items (0 and 1), hide the second list

for (var i=0; i<paragraphs.length; i++) {
	paragraphs[i].style.color = "green";
}

