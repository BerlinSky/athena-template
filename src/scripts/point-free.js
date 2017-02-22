import { converge, equals, head, sort, descend, identity, compose } from 'ramda';


// version #1
// export const isBigHead = list =>
//   list[0] === list.sort((a, b) => b - a)[0];

// version #2
// export const isBigHead = converge(
//   equals, [
//     list => list[0],
//     list => list.sort((a, b) => b - a)[0]
//   ]
// );

// version #3
// export const isBigHead = converge(
//   equals, [
//     head,
//     list => head(list.sort((a, b) => b - a))
//   ]
// );

// version #4
// export const isBigHead = converge(
//   equals, [
//     head,
//     list => head(sort(descend(identity))(list))
//   ]
// );

// version #5
export const isBigHead = converge(
  equals, [
    head,
    compose(head, sort(descend(identity)))
  ]
);
