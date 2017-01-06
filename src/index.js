import './main.css';
import { colors } from './array-methods';

// import $ from 'jquery';

/* eslint-disable no-console */

console.table(colors);

// Arrary: filter
const selectedColors = colors.filter( (color) => {
  if (color.mutiplier === 200) {
    return true;
  }
});

console.table(selectedColors);

// Array: map
const updatedColors = colors.map( (color, i) => {
  return color.mutiplier * i;
})

console.table(updatedColors);

// Array sort
const sortedColors = colors.sort( (a, b) => a.color > b.color ? 1 : -1);

console.table(sortedColors);

// Array reduce
const totalMultipliers = colors.reduce( (total, color) => {
  return total += color.mutiplier;
}, 0)

console.log(totalMultipliers);

// Arrary some
const hasBlack = colors.some( (color) => color.value === '#000' );

console.log({hasBlack});

// Arrary find


// Arrary findIndex
