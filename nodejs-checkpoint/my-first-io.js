const fs = require('fs');

const path = process.argv[2];
const data = fs.readFileSync(path, 'utf-8');
const strData = data.toString();
const newLines = strData.split('\n').length - 1;
console.log(newLines);
