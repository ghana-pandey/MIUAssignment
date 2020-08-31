'use-strict'
function commonPrefix(str1, str2) {
   let cmn = "";
   let length = (str1.length + str1.length) / 2;
   for (let i = 0; i < length; i++) {
      if (str1[i] === str2[i]) {
         cmn = cmn + str1[i];
      }
   }
   return cmn;
}



console.log(commonPrefix("dist", "distance"));