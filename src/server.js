var express = require('express');

var cors = require('cors');

var app = express();

app.use(cors());

app.post('/login',(re,res)=>{
    let sessionID = ''
    res.send(sessionID)
})

app.post('/test',re,res=>{
    let sessionID = req.params.sessionID

    //recuperar sessão
    //let sessao = ...sessionID...

    let dados = ''
    res.send(dados);
})