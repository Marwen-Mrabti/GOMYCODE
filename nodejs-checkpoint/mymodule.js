var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
  var ret = [];
  fs.readdir(dir, function (err, files) {
    if (err) {
      callback(err);
    } else {
      files.forEach(function (fileName) {
        if (path.extname(fileName) === '.' + ext) {
          ret.push(fileName);
        }
      });
      callback(null, ret);
    }
  });
};
