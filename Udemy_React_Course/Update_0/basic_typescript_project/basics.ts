// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 12.1;

let userName: string;
userName = "Hello";

let isInstructor: boolean;
isInstructor = false;

// Creats an error condition when trying to assign anything to a typed variable of null
// let hobbies: null;
// hobbies = 12;

// More complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking", "Sleeping"];

let person: { name: string; age: number };
person = {
  name: "Max",
  age: 32,
};

// Array of objects1
let people: { name: string; age: number }[];

// Type infrence
// let course = 'React - The Complete Guide';
// Causes error due to type infrence, string -> number = error
// course = 12341;

// Storing multiple types
let course: string | number = "My course";
course = 12341;

// Type aliases
type Person = { name: string; age: number };
let kameron: Person = { name: "Kameron", age: 26 };

// Functions & Types
function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a','b','c'], 'd');
