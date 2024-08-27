var express = require('express');
const session = require('express-session');
var cors = require('cors');
const jwt = require("jsonwebtoken");
const DNS = 'https://api.themoviedb.org/3'
const API_KEY = 'b5e4e9d884cf44a5aea758a85d305554'
const secretKey = "123";
var app = express();
app.use(express.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
  }));
app.use(express.json());

var port = process.env.PORT || 5000;

app.use(cors());

app.get('/movies/popular', async (req, res) => {
    try {
      const response = await axios.get(`${DNS}/trending/all/week?api_key=${API_KEY}&language=pt-BR`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar filmes populares' });
    }
  });

var dados = {
    usuarios: [
        {id: '1', nome:'Teste da Silva Junior', email: 'teste@teste.com', senha: '1234', idade: '16'},   
        {id: '2', nome:'Teste da Silva Maciel', email: 'maciel@teste.com', senha: '1234', idade: '12'},   
        {id: '3', nome:'Teste da Silva Kobayashi', email: 'kobayashi@teste.com', senha: '1234', idade: '18'},          
    ]
}

const generateToken = (userID) => {
    return jwt.sign({userID}, secretKey, { expiresIn: 60 * 60});
};
function findUserByID(userID){
    let encontrado = {}
    
    dados.usuarios.forEach((usuario)=>{
        console.log(usuario.id, userID)
        if(usuario.id==userID){
            encontrado = usuario
        }
    })
    
    return encontrado
}
app.post('/login', (req, res, next)=>{

    console.log( req.body)
 
    let logado = false
    let usuarioLogado = {}
    dados.usuarios.forEach((usuario)=>{
        if(usuario.email==req.body.username && usuario.senha==req.body.password){
            logado = true
            usuarioLogado = usuario
        }
    })

    if(logado){
        const sessionData = req.session;
        req.session.isLogado = true;
        req.session.usuarioID = usuarioLogado.id;
        console.log('login ', req.session)
        const token = generateToken(usuarioLogado.id);
        res.send({sessionID: token})
    }else{
        res.send('Error....')
        console.log('Deu errado')
    }
        
})
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed.' });
        }
        res.status(200).json({ message: 'Logout successful.' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});