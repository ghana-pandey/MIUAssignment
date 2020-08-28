function rotateRight(list) {
    let temp = list[list.length - 1];
    let j = 0;
    for (let i = list.length - 1; i > 0; i--) {
        list[i] = list[i - 1];

    }
    list[0] = temp;
    return list;
}
let list = [17, 8, 9, 5, 20];
console.log(rotateRight(list));

