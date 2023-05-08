const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, file) => {
    if (err) throw error;
    file.forEach(item => {
        if (item.isFile()) {
            const file = path.join(__dirname, 'secret-folder', item.name);
            const fileName = (path.parse(file))['name'];
            const fileExt = (path.parse(file))['ext'].slice(1);
            let fileSize = '';
            fs.stat(file, (err, stats) => {
                if (err) throw error;
                fileSize = ((stats.size / 1024).toFixed(2)).toString();
                console.log(`${fileName} - ${fileExt} - ${fileSize} kB`);
            })
        }
    })
})