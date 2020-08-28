function multiply(list, multiplier) {
    let j = 0, temp = [];
    for (i = 0; i < list.length; i++) {
        multiply = multiplier * list[i];
        temp[j] = multiply;
        j++

    }
    return temp;

}
let list = [1, 2, 24];

let products = multiply(list, 3);

console.log(products);
