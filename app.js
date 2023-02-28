// var http = require('http')

// http.createServer(function(req, res){
//     res.end("Ola");
// }).listen(8081)

// console.log('Servidor Rodando!')
import {openDb} from './configDB.js';
import {createTable, insertPessoa, updatePessoa} from './controller/Pessoa.js'
import express  from 'express';
const app = express();
app.use(express.json());

createTable();

app.get("/", function(req,res) {

    res.sendFile("D:/Programing/NodeJs/Hello World/http/html/index.html")
})

app.post('/pessoa', function(req, res){
    insertPessoa(req.body);
    res.json({
        'statusCode' : 200
    });
});


app.put('/pessoa', function(req, res){
    if(req.body && !req.body.id){
        res.json({
            "statusCode" : 400,
            "msg" : "E preciso informar um ID"
        })
    }
    else {
        updatePessoa(req.body);
        res.json({
            'statusCode' : 200
        });
    }

});

app.get("/sobre", function(req,res) {
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req,res) {
    res.send("Bem vindo ao meu blog")
})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
});