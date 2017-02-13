import { saveData, getData } from '../services/local-storage';
import { stringify, parse } from "./json-handler";

 const itemValue = {
				"name": "Lady Gaga 8",
				"type": "default",
				"assistants": {
					"name": "Johnason",
					"age": 29
				}
			};

export function setContext(inputValue) {
	const data = inputValue || itemValue;
	const convertedValue = stringify(data);

	// console.log('context saved', convertedValue);
	saveData("context", convertedValue);
}

export function getContext() {
	const convertedValue = getData("context");

	// console.log('context get', parse(convertedValue));
	return parse(convertedValue);
}
