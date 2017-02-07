import { expect } from 'chai';
import { saveData, getData } from "./local-data-manager";

describe('Local Storage, saveData, test', () => {
  it('should save', () => {

    // Arrange:
    const expectedValue = "Lady Gaga";

    // Act:
    saveData();
    const storedValue = getData();

    // Assert
    expect(storedValue).to.equal(expectedValue);
  });
});