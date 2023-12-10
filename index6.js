
function range(start, end, step = 1) {
    const result = [];
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}


const numbers = range(1, 10);
console.log(sum(numbers)); 