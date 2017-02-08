export function replaceSpecialChar(key, value) {

  if (value === "&") {
    // return encodeURIComponent(value);
    return "X";
  }
  else {
    return value;
  }
}