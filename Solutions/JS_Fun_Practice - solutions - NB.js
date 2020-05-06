/* 1.- Identity(x)
Write a function identity that takes an argument
and returns that argument*/

/*lets write it in 3 different ways:*/
// 1 - in ES6
const identity = (x) => x;

// 2- in ES6
function identity(x) {
	return x;
}
// 3- in ES5 - with function xpression
const identity = function(x) {
	return x;
}

let x=10;
identity(x);

// *******************************

/* 2.- addb(a, b) ⇒ number
Write a binary function addb that takes two
numbers and returns their sum */

const addb = (a,b) => a+b;

// *******************************

/* 7.- add(...nums) ⇒ number
Write a function add that is generalized 
for any amount of arguments */
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const add = (...array) => array.reduce(reducer) 
/*the ... converts the numbers into array (the reduce method works only with array)*/

add(1,2,4);

// *******************************

/* 8.- sub(...nums) ⇒ number
Write a function sub that is generalized 
for any amount of arguments */
const reducer = (accumulator, currentValue) => accumulator - currentValue;

const sub = (...array) => array.reduce(reducer) 

sub(1,2,4);

// *******************************

/* 12.- addRecurse(...nums) ⇒ number
Write a function addRecurse that is the 
generalized add function but uses recursion */
const addRecurse = (...array) => {
	// debugger
	if (!array.length) {
		return 0;
	} else {
		return console.log(array[0] + addRecurse(...array.slice(1)))
	}
}
// this is wht the slice method does:
// sum([1,2,3])
// -> 1 + sum([2,3])
// -> 1 + 2 + sum([3])
// -> 1 + 2 + 3 + sum([])
// -> 1 + 2 + 3 + 0
// -> 6

addRecurse(1,2,4,5,6);

// *******************************

// set(...args) ⇒ array
// Write a function set that is given a list of arguments and returns an array with all duplicates removed
function set(arr) {
	// debugger;
	for (let i=0; i<arr.length ; i++) {
		for (let j=i+1; j<arr.length; j++) {
			if (arr[i]===arr[j]) {
				arr.splice(j,1);
				j--;
			}

		}

	}

	console.log ('the new array is:',arr);
}

let arr = [1,1,2,3,4,2,1];
set(arr); 

// *******************************

// extract(array, prop) ⇒ array
/* Write a function extract that takes an array of objects and an object property name
and converts each object in the array by extracting that property*/

function extract(arr_obj, prop) {
	let arr_names = [];
	// debugger;
	for (let i=0 ; i<arr_obj.length ; i++) {
		arr_names.push(arr_obj[i][prop]); 
		/*there are 2 ways accesing a property:
		1 - object.property
		2 - object['property']
		and that was the truck by pssing 'name' to the function
		as a string - for using the second way*/
	}

	return(arr_names);
}

let people = [{ name: 'john'}, { name: 'bob' }];
let names = extract(people, 'name'); // ['john', 'bob']
console.log(names);


