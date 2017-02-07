export function saveData(itemName, itemValue) {
  localStorage.setItem(itemName, itemValue);
}

export function getData(itemName) {
  return localStorage.getItem(itemName);
}

// JSON.stringify({}); 
export function stringify(value) {
  // deep copy input 
  const itemValue = value;

  return JSON.stringify(itemValue);
  // 
}