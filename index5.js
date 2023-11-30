function countBs(String) {
    let count = 0;
    for (let i = 0; i < String.length; i++) {
        let n = 0;
        if (String[i] === "B")
            count++;
    }
    return count++;
}
function countChar(String, char) {
    let count = 0;
    for (let i = 0; i < String.length; i++)
        if (String[i] === char) {
            count++;
        }
    return count;
}
console.log(countBs("BBC"));
console.log(countChar("xinguangoudoubudai", "g"));