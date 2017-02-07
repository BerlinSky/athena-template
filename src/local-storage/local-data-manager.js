export function saveData() {
  localStorage.setItem("artistName", "Lady Gaga");
}

export function getData() {
  return localStorage.getItem("artistName");
}