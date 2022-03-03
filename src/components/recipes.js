import { Switch, Route } from 'react-router-dom';
import RecipesList from '../containers/recipes-list';
import RecipeCard from '../containers/recipe-card';

const Recipes = () => {

  return (
    <Switch>
      <Route exact path="/recipes" component={RecipesList} />
      <Route path="/recipes/:index" component={RecipeCard} />
    </Switch>
  )

};
export default Recipes