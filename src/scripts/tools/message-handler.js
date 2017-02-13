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

export function setMessage(inputValue) {
	const data = inputValue || itemValue;
	const convertedValue = stringify(data);

	// console.log('message saved', convertedValue);
	saveData("message", convertedValue);
}

export function getMessage() {
	const convertedValue = getData("message");

	// console.log('message get', parse(convertedValue));
	return parse(convertedValue);
}
