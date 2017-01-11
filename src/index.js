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

function delay(message) {
  setTimeout(() => {
    console.log( message );
  }, 1000 );
}
delay( "Hello World" );