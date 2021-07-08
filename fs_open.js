var fs = require('fs');

fs.open('lara.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});