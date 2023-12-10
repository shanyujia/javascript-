function loop(arr, text, update, main) {
    let current = arr;
    while (text(current)) {
        main(current);
        current = update(current);
    }
    return current;
}
//没写出来 想想接着怎么写