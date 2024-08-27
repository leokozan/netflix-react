import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

function App() {
  const isAuthenticated = () => {
    return !!localStorage.getItem('sessionID');
};
  return (
    <Router>
      <Routes>
        <Route path="/telaLogin" element={<Login />} />
        <Route
          path="/home"
          element={
            isAuthenticated() ? <Home /> :  <Navigate to="/telaLogin"/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
