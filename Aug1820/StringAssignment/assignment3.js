'use-strict'
function commonSuffix(str1, str2) {
    let cmn = "";
    let count = 0;
    let flen = str1.length;
    let slen = str2.length;
    while (true) {
        if (str1[flen - 1 - count] === str2[slen - 2 - count]) {
            cmn = cmn + str1[flen - 1 - count];
            count++

        }
        else {
            break;
        }
    }
    return cmn;

}
console.log(commonSuffix("distdddist", "distadist"));