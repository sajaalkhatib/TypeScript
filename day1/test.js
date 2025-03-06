var num = 10;
if (num % 2 === 0) {
    console.log("".concat(num, " is an Even number"));
}
else {
    console.log("".concat(num, " is an Odd number"));
}
var prices = [10, 110, 200, 30, 500];
var threshold = 100;
for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
    var price = prices_1[_i];
    if (price > threshold) {
        console.log("Expensive Price: ".concat(price));
    }
}
var totalSum = prices.reduce(function (acc, price) { return acc + price; }, 0);
console.log("Total Sum: ".concat(totalSum));
