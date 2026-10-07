// 03-objects — your work goes in this file.
//
// The lesson is in example.js:  node 03-objects/example.js
// Check your work with:         npm test 03

export function productName(product) {
  return product.name;
}

export function getField(product, field) {
  return product[field];
}

export function studentCity(student) {
  return student.address.city;
}

export function summarize(product) {
  const { name, price } = product;
  return `${name} costs ${price} EGP`;
}

export function withPrice(product, newPrice) {
  return { ...product, price: newPrice };
}