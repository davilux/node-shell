process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === 'pwd'){
        const printWorkingDir = require('./pwd');
        printWorkingDir();
    }
    else if(cmd === 'ls'){
        const listFiles = require('./ls');
        listFiles();
    }
    else if(cmd.slice(0,4) === 'cat '){
        const fileName = cmd.slice(4);
        const logFileContents = require('./cat');
        logFileContents(fileName);
    }
    else process.stdout.write('You typed: ' + cmd);
    setTimeout(()=>{process.stdout.write('\nprompt > ')}, 1000);
})