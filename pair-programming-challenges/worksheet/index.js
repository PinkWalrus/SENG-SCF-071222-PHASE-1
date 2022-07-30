// Write down the 7 primitive data types, with an example. I.E. `String:"example"
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
*/

//////// STRING - A string is a series of characters like "John Doe". Strings are written with single quotes, double quotes, or back ticks.

// let coldBeverage = 'iced coffee';
// let coldBeverage = "iced coffee"
// let coldBeverage = `iced coffee`;

//////// NUMBERS - Numbers can be written with or without decimals. Extra large or extra small numbers can be written with scientific (exponential) notation.

// let w = 34;
// let x = 34.00;
// let y = 123e5; // 12300000
// let z = 123e-5; // 0.00123

//////// BOOLEANS - Booleans can only have two values: true or false. Booleans are often used in conditional testing.

// let x = 5;
// let y = 5;
// let z = 6;
// x == y // Returns true
// x == z // Returns false

//////// UNDEFINED - A variable that has not been assigned a value is of type undefined. A method or statement also returned undefined if the variable that is being evaluated does not have an assigned value. A function returned undefined if a value was not returned. A variable can be emptied by setting the value to undefined.
// * NOTE: An empty value has nothing to do with undefined. An empty string has both legal value and type. e.g. let car = "";

// let car; // Value is undefined, type is undefined

//////// NULL - Null is "nothing". It is supposed to be something that doesn't exist. However, the data type of null is an object.
// * NOTE: You can consider it a bug in JavaScript that typeof null is an object. It should be null.

// WHAT IS THE DIFFERENCE BETWEEN UNDEFINED AND NULL?
// Undefined and null are equal in value but different in type:

// typeof undefined  // undefined
// typeof null  // object
// null === undefined  // false
// null == undefined //  true

//   const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };
// person = null;  // Now value is null, but type is still an object

//////// SYMBOL - Symbol represents a unique "hidden" identifier that no other code can accidentally access. For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values. Using symbol() to create a unique identifiers, solves this problem.
// * Symbols are always unique. If you create two symbols with the same description, they will have different values.
// e.g. Symbol("id") == Symbol("id")  // false

//   const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };
// let id = Symbol('id');
// person[id] = 140353;
// Now person[id] = 140353, but person.id is still undefined.

//////// BIGINT - BigInt is a primitive wrapper object used to represent and manipulate primitive bigint values -- which are too large to be represented by the number primitive.

// const hugeNumber = BigInt(9007199254740991);  // 9007199254740991n
//
//
//
//
//
//
//
//
// Write out your definition for what a function and a callback is. Give examples of a named function, arrow function, and an anonymous arrow function
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
  WRITE OUT CODE EXAMPLES BELOW
*/

//////// FUNCTION - A function is a block of code designed to perform a particular task. A function is executed when *something* invokes/ calls it. Inside the function, the arguments (the parameters) behave as local variables.

//////// NAMED FUNCTION - Normal functions (function declaration) having a name or identifier to refer to them are referred to as named functions. Hoisted. A named function can be invoked before declaration.

// E X A M P L E //
// function displayMessage() {
//   // Function body
// }

//////// ANONYMOUS FUNCTION - Anonymous functions (function expression) are those that are produced without a name or identifier to refer to them. Never hoisted. When invoking an anonymous function, you can only call it after the declaration line.

// E X A M P L E //
//  function() {
//   // Function body
// }

//////// ARROW FUNCTION - An arrow function expression is a compact alternative to traditional function expression, but is limited and can't be used in all situations.
// * The => is equivalent to "return" keyword!

// E X A M P L E //
// Traditional anonymous function:
// (function (a) {
//   return a + 100;
// })
// Arrow function equivalent:
// a => a + 100;

//////// FUNCTION PARAMETERS - Function parameters are listed inside the parentheses () in the function definition.

//////// FUNCTION ARGUMENTS - Function arguments are the values received by the function when it is invokes.

// WHAT IS THE DIFFERENCE BETWEEN PARAMETERS AND ARGUMENTS?
// E X A M P L E //
// function add(a + b) {
//   return a + b;
// }

// add(2, 3); // 5

// In the example above, within (a, b), "a" and "b" are parameters.
// Within (2, 3), "2" and "3" are arguments.

///////// FUNCTION INVOCATION - The code inside the function will execute when *something* invokes/ calls the function:
// * When an event occurs (when a user clicks a button)
// * When it is invoked/ called
// * Automatically (self invoked)

//////// FUNCTION RETURN - When JavaScript reaches a return statement, the function will stop executing. If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement. Functions often compute a return value. The return value is "returned" back to the "caller".

//////// WHY FUNCTIONS? - You can reuse code: Define the code once, and use it many times. You can use the same code many times with different arguments, to produce different results. * D R Y *

//////// LOCAL VARIABLES - Variables declared within a JavaScript function, become LOCAL to the function. Local variables can only be accessed from within the function.

//////// CALLBACK FUNCTIONS - A callback function is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.
//
//
//
//
//
//
//
//
// Your Definition of an array, forEach, map, find, and filter.
// (For the iterators please specify the return values of function & callback)
// Give examples of each iterator. I.E.
/*
  forEach returns undefined and the return of the callback does not matter.
*/
// arr.forEach((el) => console.log(el));
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
  WRITE OUT CODE EXAMPLES BELOW
*/

// ARRAYS - Arrays are written with square brackets. Array items are separated by commas. Array indexes are zero-based, which means that the first item is [0], section is [1], and so on. The following code declares (creates) an array called cars, containing three items (car names):

// const cars = ["Honda", "BMW", "Subaru"];

//////// FOREACH() - The forEach() method calls a function for each element in an array.
// * forEach() calls a provided callbackFn function once for each element in an array in ascending index order.

// Syntax:
// array.forEach(function(currentValue, index, arr), thisValue)
// NOTE: In the syntax above, index, arr, and thisValue are optional.
// RETURN VALUE: undefined

// E X A M P L E //
// let students = ['John', 'Sara', 'Jack'];

// students.forEach(myFunction);

// function myFunction(item) {
//   console.log(item);
// }

// John
// Sara
// Jack

// E X A M P L E  *  T W O //
// let students = ['John', 'Sara', 'Jack'];

// function myFunction(item, index, arr) {
//   arr[index] = 'Hello ' + item;
// }

// console.log(students);

// ['Hello John', 'Hello Sara', 'Hello Jack']

//////// MAP() - Map() creates a new array from calling a function for every array element.
// * calls a function once for each element in an array.
// * does not execute the function for empty elements.
// * does not change the original array.

// Syntax:
// array.map(function(currentValue, index, arr), thisValue)
// NOTE: In the syntax above, index, arr, and thisValue are optional.
// RETURN VALUE: An array that contains the results of a function for each array element.

// E X A M P L E //
// const numbers = [2, 5, 10, 4];
// const newArr = numbers.map(myFunction);

// function myFunction(num) {
//   return num * 10;
// }
// 20,50,100,40

//////// FIND() - Find() returns the value of the first element that passes a test.
// * executes a function for each array element
// * returns undefined if no elements are found
// * does not execute the function for empty elements
// * does not change the original array

// Syntax: array.find(function(currentValue, index, arr), thisValue)
// NOTE: In the syntax above, index, arr, and thisValue are optional.
// RETURN VALUE: The value of the first element that pass the test. Otherwise it returns undefined.

// E X A M P L E //
// const array1 = [5, 12, 8, 130, 44];
//
// const found = array1.find(element => element > 10);
//
// console.log(found);
// 12

//////// FILTER() - Filter() creates a new array filled with elements that pass a test provided by a function.
// * does not execute the function for empty elements
// * does not change the original array

// Syntax: array.filter(function(currentValue, index, arr), thisValue)
// NOTE: In the syntax above, index, arr, and thisValue are optional.
// RETURN VALUE: An array containing the elements that pass the test. If no elements pass the test, it returns an empty array.

// E X A M P L E //
// const ages = [32, 33, 16, 40];

// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

//
//
//
//
//
//
//
//
// Your definition of an object. Write a complex object that describes a home. I.E
// const home = {
//   address: {
//     streetName: "fake",
//     streetNum: 555,
//     zip: 10000
//   },
//   rooms: [...],
//   ...
// }
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
  WRITE OUT CODE EXAMPLES BELOW
*/

//////// OBJECTS - Objects are written with curly braces {}. Object properties are written as name: value paries, separated by commas. In the example below, the object (person) has 4 properties: firstName, lastName, age, and eyeColor.

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// const home = {
//   address: {
//     streetNum: "123",
//     streetName: "Broadway Ave",
//     city: "New York",
//     state: "NY",
//     zip: "10012",
//     country: "US",
//   },
//   rooms: [
//     {
//       master: {
//         sqft: "400",
//         floorType: "wood",
//       },
//       bathroom: {
//         sqft: "150",
//         floorType: "tile",
//       },
//     },
//   ],
//   garage: true,
// };
//
//
//
//
//
//
//
//
// Write out 4 selectors that you know of. Using js Create a unordered list with 4 list items.
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
  WRITE OUT CODE EXAMPLES BELOW
*/

// document.querySelector;

// document.querySelectorAll;

// element.classlist.add("class");
// element.classlist.remove("class");

// element.addEventListener("click", element);
