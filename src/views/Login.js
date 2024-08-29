import { useState } from 'react';
import './Login.css';
import { TextField,Container, Box, Button, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [aviso,SetAviso] = useState(null)
    const navigate = useNavigate();
    const handleUserChange = (event) => {
        setUsername(event.target.value);
      };
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    const  handleLogin = async () =>{
        if (!username || !password){
            SetAviso('É necessário preencher todos os campos')
        }else{
            try {
                console.log(username,password)
                const response  = await fetch('http://localhost:5000/login',{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }) 
                })
                const data = await response.json()
                if(response.ok){
                  navigate('/home');
                }
            } catch (error) {
              SetAviso('Email ou senha incorreta.')
            }
        }
    }
  return (
    <Container style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>    
        <Box width={'50%'} height={'45%'} display={'flex'}  gap={3} flexDirection={'column'} padding={3} borderRadius={3} justifyContent={'center'} border={'2px solid white'}>
            <h1 style={{color:'white'}}>Entrar</h1>
            {aviso && (
                    <Alert variant='outlined' severity="error" sx={{color: 'white'}}>
                    {aviso}
                    </Alert>
                )}
            <TextField fullWidth type='email' placeholder='Email ' variant='outlined' value={username} onChange={handleUserChange}
             InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'rgba(255, 255, 255, 0.5)' }, 
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}/>
            <TextField fullWidth placeholder='Senha' variant='outlined' type="password" value={password} onChange={handlePasswordChange}
             InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'rgba(255, 255, 255, 0.5)' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)', 
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}/>
                 <Button
                    variant="outlined"
                    sx={{
                    color: '#fff',
                    backgroundColor: '#b81414',
                    border:'1px solid #b81414',
                    '&:hover': {
                        backgroundColor: '#861d1d',
                        border:'1px solid #861d1d'
                    },
                    }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                    color: '#fff',
                    backgroundColor: '#b81414',
                    border:'1px solid #b81414',
                    '&:hover': {
                        backgroundColor: '#861d1d',
                        border:'1px solid #861d1d'
                    },
                    }}
                >
                    Fazer cadastro
                </Button>
        </Box>
    </Container>
  );
}

export default Login;
