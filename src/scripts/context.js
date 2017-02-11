import { saveData, getData } from './services/local-storage';
import { stringify } from "./tools/json-handler";

 const itemValue = {
        "name": "Lady Gaga",
        "assistants": {
          "name": "Johnason",
          "age": 29
        }
      };

export function setContext() {
  const convertedValue = stringify(itemValue);
  console.log('context saved', convertedValue);

  saveData("context", convertedValue);
}

export function getContext() {
  const convertedValue = getData("context");
  console.log('context get', convertedValue);

  return convertedValue;
}
