//**********Split method splits a string into an array of substrings, and returns the new array***********
let string = "To Check if the split function works";
console.log("String after Spliting " + string.split(" ")); // output will be [ 'To', 'Check', 'if', 'the', 'split', 'function', 'works' ]

//**********Destructuring an array***********
let queue = ["John", "Barry", "clark", "joseph", "henry", "kent"];
let [firstInQueue, restOfTheQueue] = queue;
console.log("Array value after destructuring " + firstInQueue); //output will be john

//**********Destructuring an object***********
let o = { username: "username", password: "pswd" };
let { username } = o;
console.log("Value in object after destructuring " + username);

//*******typeOf operator********
let str = "this is a string";
console.log(typeof str);

let number = 1;
console.log(typeof number);

let array = [1, 2, 3];
console.log(typeof array);

let func = () => {
  console.log("This is a function");
  return;
};
console.log(typeof func);

let obj = { name: "sat", age: "25" };
console.log(typeof obj);

//*******Spread Operator**********
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [7, 8];

let arr = arr1.concat(arr2);

console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

//******** Rest Operator **********
function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

console.log("Using sum function with 3 (1, 2, 3) parameters - " + sum(1, 2, 3));
console.log(
  "Using sum function with 5 (1, 2, 3, 4, 5) parameters - " + sum(1, 2, 3, 4, 5)
);

//*********** Difference between var, let and const ***************

console.log(college);
var college = "SJSU"; // var is attached to the window object

function start() {
  for (var i = i; i < 5; i++) console.log(i);

  console.log(i); // scope is not limited to the block, but it is limited to the function.
}

const constantValue = "This is a constant String";
//constantValue="trying to change";

//******** includes**********
let books = ["harry potter", "deception point", "davinci code", "narnia"];
console.log(books.includes("harry potter")); // Should return true

//************** Classes and Inheritance *****************
class Book {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  type() {
    return "This is a book.";
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

class BookGenre extends Book {
  constructor(name, year, genre) {
    super(name, year);
    this.genre = genre;
  }
  type() {
    return `This is ${this.genre} book.`;
  }
}

let myBook1 = new Book("Harry Potter", 2014);
let myBook2 = new Book("Deception Point", 2019);
console.log(myBook1.age());

let myBook3 = new BookGenre("Davinci Code", 2012, "Fiction");

console.log(myBook3.age());
console.log(myBook3.type());
let myBook4 = new Book();

//Object.assign method assigns the value of myBook1 to myBook4
Object.assign(myBook4, myBook1);
console.log(myBook4.age());
