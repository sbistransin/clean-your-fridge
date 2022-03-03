import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Recipes from './recipes';
import Refrigerator from '../containers/refrigerator';
import Header from './header';

const Main = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/refrigerator" component={Refrigerator} />
        <Route path="/recipes" component={Recipes} />
      </Switch> 
  )
}

export default Main