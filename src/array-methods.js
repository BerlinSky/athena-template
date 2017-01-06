export const colors = [
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

// Arrary: filter
export function selectedColors(multilier) {
	const selectedColors = colors.filter( (color) => {
		if (color.mutiplier === multilier) {
			return true;
		}
	});
	return selectedColors;
}