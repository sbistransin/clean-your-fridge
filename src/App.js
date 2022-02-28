import './App.css';
import Header from './components/header';
import Search from './components/search';
import Filters from './containers/filters';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <Header />
          <Search />
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default App;
