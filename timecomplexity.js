//given n find fisrt elemnts of fibonacci sequence

function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;

}
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// The time complexity of this function is O(n) because the function iterates n times to find the first n elements of the Fibonacci sequence. The space complexity is also O(n) because the function creates an array of size n to store the Fibonacci sequence.

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;

}
console.log(factorial(5)); // [1, 1, 2, 6, 24, 120]



function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) { // O(n) time complexity can be used with for (let i =2; i< math.sqrt(n); i++); to reduce time complexity
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(11)); // true