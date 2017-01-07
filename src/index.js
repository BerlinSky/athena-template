import './main.css';

/* eslint-disable no-console */

const artists = ['U2', 'Carrie Underwood', 'New Kids on the Block', 'Madonna'];

// Assign a variable
const musicians1 = artists;
console.log(artists, musicians1);

musicians1[2] = "Bob Dylan";
console.log(artists, musicians1);

// Arrary copy method #1:
const musicians2 = artists.slice();

musicians2[2] = "Sting";
console.log(artists, musicians2);

// Array copy method #2:
const musicians3 = [].concat(artists);

musicians3[2] = "Beyonce";
console.log(artists, musicians3);

// Array copy method #3:
// The ES6 way
const musicians4 = [...artists];

musicians4[2] = "Maria Carrey";
console.log(artists, musicians4);

// Array copy method #4:
const musicians5 = Array.from(artists);

musicians5[2] = "Michael Bolton";
console.log(artists, musicians5);

// Objects

const artist = {
  name: "Street Gem",
  age: 43,
  city: "Miami"
}

console.log("artist", artist);

// Assign a variable
const musician1 = artist;

musician1.name = "Blue Sky";
console.log(artist, musician1);

// Copy an object:
const musician2 = Object.assign({ }, artist, { name: "Soulmate" });
console.log(artist, musician2);

// For deep copy, we will need a libray or more work
const artist2 = {
  name: "Street Gem",
  age: 43,
  city: "Miami",
  band: {
    name: "Celebration",
    venue: "Mustang Club"
  }
}

// Object assign does NOT work for deep copy
const musician3 = Object.assign({ }, artist2, { name: "Daily Sunshine" });

musician3.band.name = "Nightmare";
console.log(artist2, musician3);

// A poorman's solution, with performance remification
const musician4 = JSON.parse(JSON.stringify(artist2));

musician4.band.name = "No Nightmare";
console.log(artist2, musician4);

