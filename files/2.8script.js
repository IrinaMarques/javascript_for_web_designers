////// FUNCTIONS //////
/*
function printToConsole(message) {
	console.log(message);
}
printToConsole("Hello!");
*/

/*
function add(val1, val2) {
	console.log(val1 + val2);
}
add(45, 2);
*/

/* console can return values 
function add(val1, val2) {
	return val1+val2;
}

console.log(add(45, 2));

var square = function(number) {
	return number * number;
}

console.log(square (2));
*/

var x = 3; //variable x is available anywhere it's not inside a scope

function test2() {
	var y = 5;

	console.log(y)
}

function test() {
	var x = 10;

	console.log(x);
}

test();
console.log(x);

/*3 maneiras de declarar funções */
//como variavel
var nomeDaFuncao = function() {
	return "rui"
};

//como nome
function nomeDaFuncao () {

};

//anonima
(function() {
	console.log("ENTRA AKI")
});

var personJames = new Object();
personJames.name = "James";
personJames.age = 43;

var personAna = new Object();
personAna.name = "Ana";
personAna.age = 68;

var getPersonName = function(person) {
	if(person){
		return person.name;
	}
	return 'Put your name';
};


//console.log( getPersonName() );
//console.log( getPersonName(personJames) );
//console.log( getPersonName(personAna) );