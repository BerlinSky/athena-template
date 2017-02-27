import R from 'ramda';

const products = [
  { name: 'Jeans', price:80, category: 'clothes', stock: 103 },
  { name: 'Hoodie', price:50, category: 'clothes', stock: 20 },
  { name: 'Sneakers', price:120, category: 'clothes', stock: 30 },
  { name: 'Cards', price:35, category: 'games', stock: 15 },
  { name: 'iPhone', price:655, category: 'electronics', stock: 5 },
  { name: 'Sauce Pan', price:180, category: 'houseware', stock: 201 },
]
const predicate = R.where({
  category: R.equals('clothes'),
  stock: R.lt(R.__, 250),
  price: R.lt(R.__, 100)
})

export function declarativeMap() {
  const getResults = R.filter(predicate);
  const result = getResults(products);

  console.table(result);s
}
