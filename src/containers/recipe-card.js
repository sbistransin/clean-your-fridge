import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const RecipeCard = props => {
  
  //const recipe = PlayerAPI.get(parseInt(props.match.params.number, 10));
  const recipe = useSelector((state) => {
    return state.recipes[props.match.params.index].recipe;
    // return state.recipes.hits[index]
  })

  if (!recipe) {
    return <div>Sorry, but the recipe was not found</div>;
  }

  const renderIngredients = () => {
    return recipe.ingredientLines.map((i) => {
      return <div>{i}</div>
    })
  }

  const renderHealth = () => {
    return recipe.healthLabels.map((i) => {
      return <div>{i}</div>
    })
  }
  return (
    <div class="recipe-row row">
      <Link to="/recipes">Back to Recipes</Link>
      <Link to="/refrigerator">Back to Refrigerator</Link>
      <div className="col-md-3 offset-md-2">
        <p className="recipe-card-header">{recipe.label}</p>
        <p className="recipe-type">{recipe.cuisineType[0]}, {recipe.dishType[0]}</p>
        <a href={recipe.source}>{recipe.source}</a>
      </div>
      <div className="col-md-5">
        <div className="card-image-container">
            <img className="card-img-top" src={recipe.images.LARGE.url} alt=""/>
        </div>
      </div>
      <div className="col-md-4 offset-2 ingredients-list">
        <h4>Ingredients</h4>
        <p>{renderIngredients()}</p>
      </div>
      <div className="col-md-4 offset-md-1 health-list">
        <h4>Health Concerns</h4>
        <p>{renderHealth()}</p>
      </div>
    </div>
  );
};

export default RecipeCard