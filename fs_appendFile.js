var fs = require('fs');

fs.appendFile('new.html', 'helloooooooooooooo boss', function(err){
    if(err) throw err;
    console.log('saved!');
});