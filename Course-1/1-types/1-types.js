var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello Typescript';
var numberArray = [1, 2, 3, 4, 5, 8, 13];
var numberArray2 = [1, 2, 3, 4, 5, 8, 13];
var words = ['Hello', 'Typescript'];
// Tuple
var contact = ['Rostyk', 12345678];
// Any
var variable = 42;
// ...
variable = 'New User';
variable = [];
// ============
function sayMyName(name) {
    console.log(name);
}
sayMyName('Zuckerberg');
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
