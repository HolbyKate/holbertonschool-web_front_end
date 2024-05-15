// Reuse the function countPrimeNumbers and execute it 100 times //

function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            count++;
        }
    }

    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();

    }
    return count;
}

let performance = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${count} milliseconds.`);