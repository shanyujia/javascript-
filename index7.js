function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

function reverseArrayInPlace(arr) {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = reversed[i];
    }
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);