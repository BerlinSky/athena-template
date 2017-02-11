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

  console.log('convertedValue', convertedValue);
}
