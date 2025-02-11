// Task 1 - Working with Arrays
let products = [
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Desk Chair", price: 150, category: "Furniture"}
]

function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category)
}

console.log(getProductsByCategory(products, "Electronics"))
