const fs = require('fs');

const path = process.argv[2];

fs.readFile(path, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const newLines = data.toString().split('\n').length - 1
    console.log(newLines);
  }
});
