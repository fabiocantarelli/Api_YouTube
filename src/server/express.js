const express = require('express');
const app = express({path:'../../'});
const PORT = process.env.PORT || 8080;

const hora = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
require('dotenv').config();


app.listen(PORT, ()=>{
    console.log('\n\n');
    console.log('\x1b[35m%s\x1b[0m',' |#####################|')
    console.log('\x1b[32m%s\x1b[0m',' |== SERVIDOR ONLINE ==| ');
    console.log('\x1b[36m%s\x1b[0m',' |==== PORTA: '+ PORT +' ====| ');
    console.log('\x1b[36m%s\x1b[0m',' |====== INICIADO =====|');
    console.log('\x1b[36m%s\x1b[0m',' | ' + hora +' |');
    console.log('\x1b[35m%s\x1b[0m',' |#####################|')
    console.log('\n\n');

 
})

module.exports = app;

// Cores para o terminal

// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"



