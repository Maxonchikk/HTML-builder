const fs = require('fs');
const path = require('path');
const writableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const { stdin, stdout } = process;

stdout.write('Введите текст...\n')
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        console.log('Ввод завершен. Спасибо!');
        process.exit()
    }
    const str = data.toString();
    writableStream.write(str);
})

process.on('SIGINT', () => {
    console.log('Ввод завершен');
    process.exit()
})

process.on('error', error => stdout('Error', error.message));
