export function saveDataToLocalStorage(itemName, itemValue) {
  localStorage.setItem(itemName, itemValue);
}

export function getDataFromLocalStorage(itemName) {
  return localStorage.getItem(itemName);
}