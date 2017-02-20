## Notes on Functional Programmer

#### Notes:
+ A first-class citizen: A function is just another value, thus, a first-class citizen
+ A Higher-order function:  A function either takes functions as input parameters, return functions or both.
+ In JavaScript, the effect of a higher-order function is achieved through closure, which keeps a funcstion's scope alive by a reference to it.

#### Higher-order Function

+ An example of a higher-order function
```
function calculateExchangeRate(baseValue) {
  return function multiply(value) {
    return baseValue * value;
  };
}
```

+ Now, the function can be used:
```
let exchangeYen = calculateExchangeRate(110); // apply the exchange rate
console.log(exhangeYen(20));  // 2,200 (yen)
console.log(exhangeYen(30));  // 3,300 (yen)
console.log(exhangeYen(50));  // 5,500 (yen)
```


