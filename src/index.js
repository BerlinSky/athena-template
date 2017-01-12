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

newBand("Beatles");