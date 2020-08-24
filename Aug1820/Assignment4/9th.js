let result = 'x ';
let i,j;
for (i = 0; i <= 12; i++) {

    for (j = 0; j <= 12; j++) {

        if(i == 0 && j > 0){
         result += '[' + j + ']';
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);