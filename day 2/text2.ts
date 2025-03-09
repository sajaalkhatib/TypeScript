// console.log("TS Day2");

let multiType:(number | string | boolean )[];
multiType = ["adnan", 2000, true];
console.log(multiType[0]);

multiType.forEach(e => {
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
// function sumAll(...numbers: number[]): number {
//     return numbers.reduce((a, b) => a + b);
// }
// console.log("the total is : " + sumAll(1, 2, 3, 4, 5));
// console.log("the total is : " + sumAll(1, 2, 3));
//--------------------------------------------------------------------------------

//array of objects
// const person = {
//     name: "Nada",
//     age: 21,
//     isStudent: true
//   };
  
//   console.log(person.name); 

let products = [
    { name: "product 1", description: "description 1", price: 50 },
    { name: "product 2", description: "description 2", price: 100 },
    { name: "product 3", description: "description 3", price: 55.5 }
];
function loadProducts() {
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) return; // Add check to ensure element exists

    productsContainer.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
        `;
        productsContainer.appendChild(productElement);
    });
}


///////////////////////////////
interface Product {
    name: string;
    description: string;
    price: number;
}

// Define an array of 3 Product objects
const products: Product[] = [
    {
        name: "Laptop",
        description: "A high-performance laptop for work and gaming.",
        price: 999.99
    },
    {
        name: "Headphones",
        description: "Noise-cancelling over-ear headphones.",
        price: 149.99
    },
    {
        name: "Smartphone",
        description: "Latest model with a stunning display.",
        price: 799.99
    }
];

// Function to load products into the HTML

// function loadProducts() {
//     const productList : any = document.getElementById("productList");

//     productList.innerHTML = ""; // Clear existing content

//     products.forEach(product => {
//         const listItem = document.createElement("li");
//         listItem.textContent = ${product.name} - ${product.description} - ${product.price};
//         productList.appendChild(listItem);
//     });

// }