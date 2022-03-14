const fs = require('fs');

const dirPath = process.argv[2];
const filterArg = process.argv[3];
fs.readdir(dirPath, (err, list) => {
  if (err) {
    console.log(err);
  } else {
    let arr = list.map((fileName) => fileName.split('.'));
    let filteredArr = arr
      .filter((el) => el[1] === filterArg)
      .map((file) => file.join('.'))
      .join('\n');
    console.log(filteredArr);
  }
});