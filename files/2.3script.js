// Array

// Ways of declare an array
// variable list equals square brakets and the list of values
var list = ["John", "Marie", "Sander", 32, false],
	list2 = [],
	list3 = new Array(12, false);


var array = [];

var keep = function() {
	array.push( document.getElementById('text').value )
	console.log(array)
}

var remove = function() {
	array.pop()
	console.log(array)
}