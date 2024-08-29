import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/telaLogin" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
