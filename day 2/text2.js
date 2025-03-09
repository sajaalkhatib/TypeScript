// console.log("TS Day2");
var multiType;
multiType = ["adnan", 2000, true];
console.log(multiType[0]);
multiType.forEach(function (e) {
    console.log(e);
});
//--------------------------------------------------------------------------------
//return types
// function isEven(num: number): boolean {
//     return num % 2 == 0;
// }
// const numberChecked = isEven(50);
// console.log(numberChecked);
// function GreetFunction(name: string): void {
//     console.log(Hello, ${name});
// }
// GreetFunction("adnan");
//parameter types
// function introduction(name: string, age: number): string {
//     return Hello, my name is ${name} and I am ${age} years old.;
// }
// const intro = introduction("adnan", 24);
// console.log(intro);
//--------------------------------------------------------------------------------
//optional parameters
// function greet(name: string, isMorning?: boolean): string {
//     if (isMorning) {
//         return `Good morning, ${name}!`;
//     } else {
//         return `Hello, ${name}!`;
//     }
// }
// console.log(greet("adnan", true));
// console.log(greet("adnan"));
//default parameters
// function greet(name: string, timeOfDay = "day"): string {
//     return `Good ${timeOfDay}, ${name}!`;
// }
// console.log(greet("adnan"));
// console.log(greet("adnan", "Morning"));
//--------------------------------------------------------------------------------
//rest parameter
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; });
}
console.log("the total is : " + sumAll(1, 2, 3, 4, 5));
console.log("the total is : " + sumAll(1, 2, 3));
//--------------------------------------------------------------------------------
//array of objects
// const person = {
//     name: "Nada",
//     age: 21,
//     isStudent: true
//   };
//   console.log(person.name); 
var products = [
    { name: "product 1", description: "description 1", price: 50 },
    { name: "product 2", description: "description 2", price: 100 },
    { name: "product 3", description: "description 3", price: 55.5 }
];
function loadProducts() {
    var productsContainer = document.getElementById('productsContainer');
    if (!productsContainer)
        return; // Add check to ensure element exists
    productsContainer.innerHTML = ''; // Clear existing content
    products.forEach(function (product) {
        var productElement = document.createElement('div');
        productElement.innerHTML = "\n            <h2>".concat(product.name, "</h2>\n            <p>").concat(product.description, "</p>\n            <p>Price: $").concat(product.price.toFixed(2), "</p>\n        ");
        productsContainer.appendChild(productElement);
    });
}
