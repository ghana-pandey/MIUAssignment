function countEvens(list) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0)
            count++
    }
    return count;
}
let list = [17, 8, 9, 5, 20];
let count = countEvens(list);
console.log("The count is" + " " + count);

