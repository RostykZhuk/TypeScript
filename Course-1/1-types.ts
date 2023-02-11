const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript';

const numberArray: number[] = [1, 2, 3, 4, 5, 8, 13];
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 8, 13];

const words: string[] = ['Hello', 'Typescript'];

// Tuple
const contact: [string, number] = ['Rostyk', 12345678];

// Any
let variable: any = 42;
// ...
variable = 'New User';
variable = [];

// ============

function sayMyName(name: string): void {
  console.log(name);
}
sayMyName('Zuckerberg');

// Never
function throwError(message: string): never {
  throw new Error(message);
}
function infinite(): never {
  while (true) {}
}
