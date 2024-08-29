import './Home.css';
import { categories } from '../api';
import Row from '../components/Row/Row';
import Banner from '../components/Banner/Banner';
import Nav from '../components/Nav/Nav';
import { Button } from '@mui/material';
function Home() {
  return (
    <div>
    <Nav/>
    <Banner/>
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

export default Home;
