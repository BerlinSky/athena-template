import { expect } from 'chai';
import { saveData, getData } from "./local-data-manager";

describe('Local Storage, saveData, test', () => {
  it('should save', () => {

    // Arrange:
    const expectedName = "artist";
    const expectedValue = "Lady Gaga";

    // Act:
    saveData("artist", "Lady Gaga");
    const storedValue = localStorage.getItem(expectedName);

    // Assert
    expect(storedValue).to.equal(expectedValue);
  });
});

describe('Local Storage, getData, test', () => {
  it('should get', () => {

    // Arrange:
    const expectedName = "artist";
    const expectedValue = "Lady Gaga";

    // Act:
    localStorage.setItem("artist", "Lady Gaga");
    const storedValue = getData(expectedName);

    // Assert
    expect(storedValue).to.equal(expectedValue);
  });
});