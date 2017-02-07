import { expect } from 'chai';
import { saveData, getData } from "./local-data-manager";

describe('Local Storage, saveData, test', () => {
  it('should save', () => {

    // Arrange:
    const expectedValue = "Lady Gaga2";

    // Act:
    saveData();
    const value = getData();

// console.log(value);
    // Assert
    expect(value).to.equal(expectedValue);
  });
});