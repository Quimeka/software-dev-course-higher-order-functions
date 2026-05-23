/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/

const readline = require('readline-sync');

function filterProducts(products,callBackFunction){

  return(products,callBackFunction);

}

//Available Products
const availablity = filterProducts(products, products.filter(product => product.inStock != false));

//Ask User for Budget to check Product Availability
const acceptedPriceRange = Number(
    readline.question("What's your max budget and we'll share what's within your price range?:  ")
);
//Product Availability based on Price Threshold
const priceThreshold = filterProducts(products, products.filter(product => product.price <= acceptedPriceRange));


/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/

const upperCaseArray = products.map(product => product.name.toUpperCase());

/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage as a whole number
- Returns a function that takes in a product object and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` with a parameter `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `forEach()` call to add a new property, `salePrice`, to each product object.
4. Print the array of products to verify the new property and value have been added to each product object.
*/

//Define a function `applyDiscount` with a parameter `discountPercent`.
function applyDiscount(discountPercent){

  //Return a new function that takes a product object.
  return function(product){

    //Returns a function that takes in a product object and returns a discounted price
    return product.price - (product.price * discountPercent/100);
  
  }
 }
//discount value
const discountValue = 10;

//establish function to pass discount value
const discountApply = applyDiscount(discountValue);

//`forEach()` call to add a new property, `salePrice`, to each product object.
products.forEach(product => {
  product.salePrice = discountApply(product);
});

/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/

let totalPrice = products.reduce((total,item) => {

  if (item.inStock == true){
    return total + item.price;
  }
  return total;
},0);


// ============================================
// 🧪 Console Test Your Work
// ============================================

console.log("Filtered products[Availability]:", availablity);
console.log("Filtered products[Price Range]:", priceThreshold);
console.log("Uppercased names:", upperCaseArray);
console.log("Discounted products:", products);
console.log("Total value in stock:", totalPrice);
