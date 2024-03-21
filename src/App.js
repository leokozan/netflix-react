import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { categories } from './api';
import Row from './components/Row/Row';

function App() {
  return (
    <div>
      {categories.map((category) => {
        return <Row
        key={category.name}
        name={category.name} 
        title={category.title}
        isLarge={category.isLarge}
        path={category.path}
        />
      })}
    </div>
  );
}

export default App;
