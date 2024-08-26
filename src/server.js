var express = require('express');

var cors = require('cors');

var app = express();

app.use(express.json());

var port = process.env.PORT || 5000; // Definir a porta

app.use(cors());

// app.post('/login',(re,res)=>{
//     let sessionID = ''
//     res.send(sessionID)
// })

app.post('/fazerLogin',(req,res)=>{
    const { username, password } = req.body;
    if (username && password) {
        res.status(200).json({ message: 'Login bem-sucedido', username });
    } else {
        res.status(400).json({ message: 'Usuário ou senha ausente' });
    }

})

app.get('/test',(req,res)=>{
    res.send('fdsafdsafadsfdaf')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});