function extractGivenName(str) {
    let str1 = str.split(",");

    let fName = str1[1];

    return fName;

}
console.log(extractGivenName("Regan, Ronald"));
