const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, error => {
    if (error) throw error;
});

fs.copyFile()
