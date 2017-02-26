// import { map, pick } from 'ramda';
import { project } from 'ramda';

const products = [
  { name: 'Jeans', price: 80, category: "clothes"},
  { name: 'Hodie', price: 60, category: "clothes"},
  { name: 'Jacket', price: 120, category: "clothes"},
  { name: 'Cards', price: 35, category: "games"},
  { name: 'iPhone', price: 649, category: "electronics"},
  { name: 'Sauce Pan', price: 100, category: "housewares"},
]

// version #1:
// const result = products.map(p => ({name: p.name, price: p.price}))

// version #2:
// const result = products.map(p => pick(['name', 'price'], p));

// version #3:
// const result = products.map(pick(['name', 'price']));

// version #4:
// const getNameAndPrice = map(pick(['name', 'price']));
// const result = getNameAndPrice(products);

// version #5:
const getNameAndPrice = project(['name', 'price']);
const result = getNameAndPrice(products);

export const extractSubset = function() {
  console.table(result);
}
