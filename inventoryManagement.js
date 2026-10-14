// Write your code here

// Create an array called products to store product names
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Write a function called logFirstProduct to console log the details of the first product in the array.
function logFirstProduct() {
  console.log(products[0]);
}
logFirstProduct();

// Write a function called addProduct to add a new product to the array. This function should take the product name as an argument.
function addProduct(name) {
  products.push(name);
}
addProduct("MacBook");
console.log(products);

// Write a function called updateProductName to change the name of a product. This function should take the product's position in the array and the new name as arguments.
function updateProductName(index, newName) {
  products[index] = newName;
}
updateProductName(2, "Iphone");
console.log(products); 

// Write a function called removeLastProduct to remove the last product from the array.
function removeLastProduct() {
  products.pop();
}
removeLastProduct();
console.log(products);

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};


