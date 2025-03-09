// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age.
//  Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
var person = [
    {
        name: "saja",
        age: 22
    },
    {
        name: "nada",
        age: 22
    },
    {
        name: "toqa",
        age: 17
    }
];
function checkage(person) {
    if (person.age < 18) {
        console.log("Minor");
    }
    else {
        console.log("Adult");
    }
}
person.forEach(function (users) {
    checkage(users);
});
var teaches = [
    {
        name: "saja",
        subject: ["oop", "js", "c++"]
    }
];
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
teaches.forEach(function (element) {
    console.log("".concat(element.name, " teaches: "));
    element.subject.forEach(function (item) {
        console.log("".concat(item));
    });
});
function addProduct() {
    var _a, _b, _c, _d;
    var productName = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value;
    var productDescription = (_b = document.getElementById("description")) === null || _b === void 0 ? void 0 : _b.value;
    var productPrice = parseFloat((_c = document.getElementById("price")) === null || _c === void 0 ? void 0 : _c.value);
    var productQuantity = parseInt((_d = document.getElementById("quantity")) === null || _d === void 0 ? void 0 : _d.value);
    var newProduct = {
        name: productName,
        description: productDescription,
        price: productPrice,
        quantity: productQuantity
    };
    var productList = JSON.parse(localStorage.getItem("productList") || "[]");
    productList.push(newProduct);
    localStorage.setItem("productList", JSON.stringify(productList));
    displayProducts();
}
function displayProducts() {
    var productList = JSON.parse(localStorage.getItem("productList") || "[]");
    var productContainer = document.getElementById("productContainer");
    if (productContainer) {
        productContainer.innerHTML = '';
        productList.forEach(function (product) {
            var productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = "\n                <h3>".concat(product.name, "</h3>\n                <p><strong>Details:</strong> ").concat(product.description, "</p>\n                <p><strong>Price:</strong> $").concat(product.price.toFixed(2), "</p>\n                <p><strong>Available Quantity:</strong> ").concat(product.quantity, "</p>\n            ");
            productContainer.appendChild(productCard);
        });
    }
}
