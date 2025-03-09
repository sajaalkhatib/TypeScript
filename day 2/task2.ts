
// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age.
//  Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

interface persons {
    name: string;
    age:number;
}

const person:persons[]=[
   {
    name:"saja",
    age:22
   },
   {
    name:"nada",
    age:22
   },
   {
    name:"toqa",
    age:17
   }

]
function checkage(person){
    if(person.age<18){
        console.log("Minor")
    }
    else
    {
        console.log("Adult")
    }
}
person.forEach(users=>{
    checkage(users);
})


// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface
//  Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.


interface teacher {
    name: string,
   subject: String[];  
}
const teaches:teacher[]=[
    {
        name:"saja",
        subject:["oop","js","c++"]
    }
]


// products.forEach(product => {
//     const productElement = document.createElement('div');
//     productElement.innerHTML = `
//         <h2>${product.name}</h2>
//         <p>${product.description}</p>
//         <p>Price: $${product.price.toFixed(2)}</p>
//     `;
//     productsContainer.appendChild(productElement);
// });
// }

teaches.forEach(element => {
    console.log(`${element.name} teaches: `);
    element.subject.forEach(item=>{
        console.log(`${item}`)
    })

    
});


// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. 
// Write a script to decrease the price of each product by 15% if the quantity is greater than 5.


// interface Product {
//     name: string,
//     price:number,
//     quantity:number
// }
// const products:Product[]=[
//     {
//         name:"product 1",
//         price:20,
//         quantity:15
//     },
//     {
//         name:"product 2",
//         price:55.5,
//         quantity:15
//     },
//     {
//         name:"product 3",
//         price:2.5,
//         quantity:15
//     },
//     {
//         name:"product 4",
//         price:1.5,
//         quantity:15
//     }
// ]

// products.forEach(product => {
//     if (product.quantity > 5) {
//         product.price=product.price-product.price*0.15;
//     }
// });

// console.log(products);

// Task 4 : Create a form inside the HTML page that contains inputs 
// for ( name , description, price and quantity) for product and when you submit the
//  form it will save the product inside array in the local storage and then display all the products as a cards under the form.
// *use interface to create a structure for this product 

interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

function addProduct() {
    var productName = (document.getElementById('name') as HTMLInputElement)?.value;
    var productDescription = (document.getElementById("description") as HTMLInputElement)?.value;
    var productPrice = parseFloat((document.getElementById("price") as HTMLInputElement)?.value);
    var productQuantity = parseInt((document.getElementById("quantity") as HTMLInputElement)?.value);

    const newProduct: Product = {
        name: productName,
        description: productDescription,
        price: productPrice,
        quantity: productQuantity
    };

    let productList: Product[] = JSON.parse(localStorage.getItem("productList") || "[]");

    productList.push(newProduct);

    localStorage.setItem("productList", JSON.stringify(productList));

    displayProducts();
}

function displayProducts() {
    let productList: Product[] = JSON.parse(localStorage.getItem("productList") || "[]");

    var productContainer = document.getElementById("productContainer");

    if (productContainer) {
        productContainer.innerHTML = '';

        productList.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p><strong>Details:</strong> ${product.description}</p>
                <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                <p><strong>Available Quantity:</strong> ${product.quantity}</p>
            `;
            productContainer.appendChild(productCard);
        });
    }
}
