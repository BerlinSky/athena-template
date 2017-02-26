

var dotPath = R.useWith(R.path, [R.split('.')]);
var propsDotPath = R.useWith(R.ap, [R.map(dotPath), R.of]);
var obj = {
  a: { b: { c: 1 } },
  x: 2
};

propsDotPath(['a.b.c', 'x'], obj);
// => [ 1, 2 ]
