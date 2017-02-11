export function saveData(itemName, itemValue) {
  localStorage.setItem(itemName, itemValue);
}

export function getData(itemName) {
  return localStorage.getItem(itemName);
}
