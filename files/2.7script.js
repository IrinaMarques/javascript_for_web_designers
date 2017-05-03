/*
///// FOR STATEMENT/////

var names = ["George", "Margaret", "Sean"];

for (var x = 1; x <= 10; x++) {
	console.log(x);
}

To print the names in the array:

for (var y = 0; y < names.length; y++) {
	console.log(names[y]);
}

We started from 0 and we are going up until names the length, in this case three (George, Margaret, Sean)
So we're going to 0, 1 and 2 and incrementing y as we go along and were out putting those names to the consul

///// DO-WHILE STATEMENT/////

var names = ["George", "Margaret", "Sean"];

var x = 0;

do {
	console.log(names[x]);
	x++;
} while (x < names.length);

/* this is not met
do {
	console.log(x)
} while (x > 0);
*/

// WHILE STATEMENT//

var names = ["George", "Margaret", "Sean"];

var x = 0;

while (x <5) {
	console.log(x++);
} 

/* this statement has not been executed 
while (x > 0) {
	console.log(x);
} */