function getMiddle(list) {
    let n = list.length;
    let sumMiddle = 0
    let middle = (n / 2);
    middle = Math.round(middle);
    let a = list[middle];
    sumMiddle = a + list[middle - 1]
    if (sumMiddle % 2 !== 0) {
        return a;
    }
    else {
        avg = sumMiddle / 2;
        return avg;
    }

}
let list = [12, 4, 8, 15, 17, 5, 20, 11];
let value = getMiddle(list);
console.log(value);
