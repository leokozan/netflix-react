var express = require('express');
const session = require('express-session');
var cors = require('cors');
const jwt = require("jsonwebtoken");
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

var dados = {
    usuarios: [
        {id: '1', nome:'Teste da Silva', email: 'teste@teste.com', senha: '1234', idade: '18'},        
    ]
}

const generateToken = (userID) => {
    return jwt.sign({userID}, secretKey, { expiresIn: 60 * 60});
};
function verifyJWT(req, res, next){
    console.log('verify ', req.body)
    let token = req.body.sessionID
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, secretKey, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      req.session.usuarioID = decoded.userID;
      console.log('verify: ', req.session)
      next();
    });
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