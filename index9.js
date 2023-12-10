function fx(array) {
    return array.reduce((a, b) => a.concat(b), []);
}

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(fx(arrays));