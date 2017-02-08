import { expect } from 'chai';
import { stringify } from "./pre-processor";

describe('Local Storage, stringify, test simple object', () => {
  it('should get', () => {

    // Arrange:
    const itemValue = { "name": "Lady Gaga" };
    const expectedValue = '{"name":"Lady Gaga"}';

    // Act:
    const convertedValue = stringify(itemValue);

    // Assert
    expect(convertedValue).to.equal(expectedValue);
  });
});

describe('Local Storage, stringify, test nested object', () => {
  it('should get', () => {

    // Arrange:
    const itemValue = { 
        "name": "Lady Gaga",
        "assistants": {
          "name": "Johnason",
          "age": 29
        }
      };
      
    const expectedValue = '{"name":"Lady Gaga","assistants":{"name":"Johnason","age":29}}';

    // Act:
    const convertedValue = stringify(itemValue);

    // Assert
    expect(convertedValue).to.equal(expectedValue);
  });
});

describe('Local Storage, stringify, test with replacer', () => {
  it('should get', () => {

    // Arrange:
    const itemValue = { 
        "name": "Lady Gaga",
        "assistants": {
          "name": "Johnason",
          "age": 29
        }
      };
      
    const expectedValue = '{"name":"Lady Gaga","assistants":{"name":"Johnason","age":29}}';

    // Act:
    const convertedValue = stringify(itemValue);

    // Assert
    expect(convertedValue).to.equal(expectedValue);
  });
});
