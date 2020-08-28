let sum = 0;
function addEnds(list) {

    let first = list[0];
    let last = list[list.length - 1];
    sum = first + last;
    return sum;
}
let list = [17, 8, 9, 5, 20];
let value = addEnds(list);
console.log(value);


