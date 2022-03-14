const filterExt = require('./mymodule');

const dirname = process.argv[2];
const ext = process.argv[3];

filterExt(dirname, ext, function (err, files) {
  if (err) {
    console.err(err);
  } else {
    files.forEach(function (fileName) {
      console.log(fileName);
    });
  }
});
