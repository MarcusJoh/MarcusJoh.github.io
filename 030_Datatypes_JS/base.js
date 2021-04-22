
/*
JavaScript has three kinds of variable declarations.
var
    Declares a variable, optionally initializing it to a value.
let
    Declares a block-scoped, local variable, optionally initializing it to a value.
const
    Declares a block-scoped, read-only named constant. 
*/

//alert(c);

let x = "this is a let";

var y = "this is a var"; // do not use

const c = "this is a const";




//strings

let aString = "this is a string";
let bString = 'this is also a string';
let bStringLength = bString.length;

let bStringButBig = bString.toUpperCase();

console.log(bStringButBig);


// number

let number = 42;



let a = "42";
let b = Number(a);

console.log(a);

console.log(b);


// boolean bool

let aBool=true;


let bBool=false;


console.log(aBool+""+bBool);



// arreys

let places = ["Sweden","Norway","Canada"];



console.log(places);


console.log(places[3]);


let numbers=[number,b,2,9,5,3];


numbers.push(99);

numbers.pop();


let emptyArrey=[];
emptyArrey.length=10;
console.log();