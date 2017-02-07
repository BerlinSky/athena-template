import { expect } from 'chai';
import { saveDataToLocalStorage, getDataFromLocalStorage } from "./local-data-manager";

describe('Local Storage, saveDataToLocalStorage, test', () => {
  it('should save', () => {

    // Arrange:
    const expectedName = "artist";
    const expectedValue = "Lady Gaga";

    // Act:
    saveDataToLocalStorage("artist", "Lady Gaga");
    const storedValue = localStorage.getItem(expectedName);

    // Assert
    expect(storedValue).to.equal(expectedValue);
  });
});

describe('Local Storage, getDataFromLocalStorage, test', () => {
  it('should get', () => {

    // Arrange:
    const expectedName = "artist";
    const expectedValue = "Lady Gaga";

    // Act:
    localStorage.setItem("artist", "Lady Gaga");
    const storedValue = getDataFromLocalStorage(expectedName);

    // Assert
    expect(storedValue).to.equal(expectedValue);
  });
});