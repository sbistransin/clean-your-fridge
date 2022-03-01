import './App.css';
import Header from './components/header';
import Search from './components/search';
import Filters from './containers/filters';
import Recipes from './components/recipes';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <Header />
          <Search />
          <Filters />
          <Recipes />
        </div>
      </div>
    </div>
  );
}

export default App;
