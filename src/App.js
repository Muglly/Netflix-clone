import { categories } from './Api/TmdbApi';
import './App.css';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import Row from './components/Row/Row';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {categories.map((category) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
