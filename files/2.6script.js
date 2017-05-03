var x = 5; //2. Yes, it is!

if (x==5) { //1. Javascript evaluates this expression "is x=5?" 3. if true then we do a console.log
	console.log('True');
}

// Same result:
// if (true) { console.log ('True');}
// if (1) { console.log ('True');} 1 it's also interpreted as true

// if (x==51) { console.log ('True');} nothing it's going to happen because the text inside the {} is not gonna be run

if (age==51) { // if this condition is not met
	console.log('True');
} else { // then we do this
	console.log('False');
}

//ANOTHER PRATICAL EXAMPLE//
 var age = 24;

 if (age<20) { // if age smaller than 20
 	console.log('Teenager!'); 
 } else if (age>=20 && age < 70) { // else if age is higher or equal than 20 and smaller than 70 then
 	console.log('A young man!');
 } else { // else 
 	console.log('Not so young anymore!')
 }

 //TERNARY OPERTOR OR CONDITIONAL OPERATOR//

 if (age > 20) {
 	console.log('Not a teen anymore!');
 } else {
 	console.log('Teen!');
 }

// can be compress to this:
 age > 20 ? console.log('Not a teen anymore!') : console.log('Teen!');
 // if it's true executte the code after the question mark
 // if it's not true execute the code after the :

 condition ? val1 : val2
 //condition ? execute val1 or condition? execute val2