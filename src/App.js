import logo from './logo.svg';
import './App.css';

import Header from './components/header';

function App() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 offset-md-3 text-center">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
