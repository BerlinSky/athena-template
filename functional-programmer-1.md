## Notes on Functional Programmer

#### Notes:
+ Learning Functional Programming takes patience.
+ Most useful pure functions take at least one parameter.
+ All useful pur functions return something.
+ Pure functions will always produce the same output given the same input.
+ Pure functions have no side effects.
+ Pure functions lead to immutability.
+ Functional Programming does not have no variables.
+ Functional Programming uses recursion instead of looping

#### Pure Function

+ Not a pure function
```
let a = 100;
function add(x, y) {
  return a + x + y;
}
```

+ A pure function
```
function add(x, y) {
  return x + y;
}
```

+ Impure fuctions by definition
```
writeToFile(filePath, fileName);
postAjaxRequest(url, data);
```


