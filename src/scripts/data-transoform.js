// import { merge, toUpper } from 'ramda';
import { toUpper , evolve, multiply, inc } from 'ramda';

const product = {
  name: 'cog',
  price: 180,
  details: {
    shippingInfo: {
      weight: 7
    }
  }
}

// Version #1
// const adjustProduct = p => {
//   return merge(p, { name: toUpper(p.name)} )
// }

// Version #2:
// const adjustProduct = evolve({
//   name: toUpper,
//   price: multiply(2)
// });

// version #3:
const adjustProduct = evolve({
  name: toUpper,
  price: multiply(2),
  details: {
    shippingInfo: {
      weight: inc
    }
  }
});

export const transform = function() {
  const result = adjustProduct(product);
  console.log(result);
}
