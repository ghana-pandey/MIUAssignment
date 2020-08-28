
function mothersDay(arr) {
    //let arr=[1908,5,10];
    let temp = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        temp[j] = arr[i];
        j++;
    }
    return temp;

}
let arr1 = [1908, 5, 10];
console.log(mothersDay(arr1));