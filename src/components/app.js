import Header from './header';
import Search from '../containers/search';
import Filters from '../containers/filters';
import Recipes from '../containers/recipes';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Header />
          <Search />
          <Filters />
        </div>
      </div>
      <div class="recipe-section col-md-10 offset-md-1">
        <div className="recipes-container row">
          <Recipes /> 
        </div>
         
      </div>
    </div>
  );
}

export default App;