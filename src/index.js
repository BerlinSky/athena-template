import './main.css';
// import $ from 'jquery';

/* eslint-disable no-console */

// $(function() {
//   console.log("bundle works just fine.");
// });

// array methods: filer, sort, map, reduce, 

const colors = [
	{
		color: "red",
		value: "#f00",
    mutiplier: 100
	},
	{
		color: "green",
		value: "#0f0",
    mutiplier: 100
	},
	{
		color: "blue",
		value: "#00f",
    mutiplier: 200
	},
	{
		color: "cyan",
		value: "#0ff",
    mutiplier: 100
	},
	{
		color: "magenta",
		value: "#f0f",
    mutiplier: 200
	},
	{
		color: "yellow",
		value: "#ff0",
    mutiplier: 100
	},
	{
		color: "black",
		value: "#000",
    mutiplier: 100
	}
];

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