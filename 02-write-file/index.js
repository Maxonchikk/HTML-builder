const fs = require('fs');
const path = require('path');
const writableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
// const readableStream = fs.createReadStream(path.join(__dirname, 'text.txt'));
const { stdin, stdout } = process;

const EventEmmiter = require('events');
const exit = new EventEmmiter();

exit.on('exit', (exit) => {
    console.log('Удачи!');
    process.exit();
});

emitter.emit('exit');

stdout.write('Введите текст...\n')
stdin.on('data', data => {
    const str = data.toString();
    writableStream.write(str);
    process.exit();

})

process.on('exit', () => stdout.write('Удачи'));
process.on('error', error => stdout('Error', error.message));
