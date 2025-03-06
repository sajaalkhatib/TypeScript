let num: number = 10;
if (num % 2 === 0) {
    console.log(`${num} is an Even number`);
} else {
    console.log(`${num} is an Odd number`);
}

let prices: number[] = [10, 110, 200, 30, 500];
let threshold: number = 100;

for (let price of prices) {
    if (price > threshold) {
        console.log(`Expensive Price: ${price}`);
    }
}

let totalSum: number = prices.reduce((acc, price) => acc + price, 0);
console.log(`Total Sum: ${totalSum}`);
