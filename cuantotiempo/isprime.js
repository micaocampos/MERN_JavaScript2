
Number.prototype.isPrime = function () {
    for (let i = 2, raiz = Math.sqrt(this); i <= raiz; i++)
        if (this % i === 0) {
            return false;
        }
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }

    return true;
}
/*const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);*/
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e5) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
/*
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e6) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
*/ 
