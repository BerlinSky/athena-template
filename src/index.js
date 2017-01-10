import './main.css';

/* eslint-disable no-console */

/*
// global variables
*/
const band = "The New Kids on the Block";
let newBand;

function myBand() {
  const myBand = "Local NKOTB";

  function leaderSinger(artist) {
    console.log({band});
    console.log({myBand});
    console.log({artist});
  }

  // assigned to the inner function:
  newBand = leaderSinger;
}

myBand();

/*
// still has the access to the inner function of another function 
// even though that function has gone out of the scope.
// thus, we can invoke an inner function through a variable declared in "outer" context
*/
newBand("Magic Thinking");


// var outer='outer';
// var copy;
// function outerFn() {
//   var inner='inner';
//   function innerFn(param){
//     console.log(outer);
//     console.log(inner);
//     console.log(param);
//     console.log(magic);
//   }
//   copy=innerFn;
// }
// console.log(magic); //ERROR: magic not defined
// var magic="Magic";
// outerFn();
// copy("copy");