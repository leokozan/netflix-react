import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { categories } from './api';
import Row from './components/Row/Row';

function App() {
  return (
    <div>
      {categories.map((category) => {
        return <Row title={category.title}/>
      })}
    </div>
  );
}

export default App;
