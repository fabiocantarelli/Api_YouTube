// Web Server 
const app = require('./server/express');
require('dotenv').config();
const fetch = require('node-fetch');
const fs = require('fs');

// Cria URL HTTP do YouTube pra ser feito o request com os 3 parâmetros, chabe da api, id do canal, número de videos.
const Buscar = require('./api/api');
const URL = Buscar(process.env.API_KEY_YOUTUBE, process.env.CHANNEL_ID_1, process.env.MAX_RESULTS)

// Timer que atualiza o arquivo JSON pra poupar request da API
const Timer = 60000 * 60 * 1;

// Hora atual pra controle e registro de atualizações
const hora = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

// Temporizador que executa um GET na API do YouTube, trazendo um json de informações.
// As informções são tratadas e transformadas em um arquivo you.json
setInterval(() => {
    fetch(URL, { method: 'GET' })
        .then(res => res.json())
        .then((json) => {
            const result = JSON.stringify(json);
            fs.writeFile("you.json", result, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('\n\n');
                    console.log('\x1b[34m%s\x1b[0m',
                        ' |#####################|')
                    console.log(
                        '\x1b[33m%s\x1b[0m',
                        ' |== API ATUALIZADA  ==| \n' +
                        ' |======= DATA ========| \n' +
                        ' | ' + hora + ' |'
                    );
                    console.log('\x1b[34m%s\x1b[0m',
                        ' |#####################|')
                    console.log('\n\n');
                }
            });

        })
}, Timer);


app.get('/', (req, res) => {
    res.send('Raiz');
})


app.get('/API_FLOW', (req, res) => {
    fs.readFile("you.json", "utf8", function (err, data) {
        var jsonData = JSON.parse(data); // faz o parse para json
        res.send(jsonData)
    });
})