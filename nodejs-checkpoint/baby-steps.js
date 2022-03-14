const [, , ...arr] = process.argv
let sum = 0;
arr.map((el)=>sum+=Number(el))
console.log(sum)
