import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//import { useEffect } from "react";

const RecipeCard = props => {
  
  // not sure if this will fix it
  // useEffect (() => {
  // }, []);

  // const recipe = useSelector((state) => {
  //   // return state.recipes[props.match.params.index].recipe;
  //   const recipeIndex = parseInt(props.match.params.index)
  //   return state.recipes.hits[recipeIndex].recipe;
  // })

  const recipe = useSelector(({ recipes }) => {
    return recipes.hits[parseInt(props.match.params.index)].recipe;
  });

  const renderIngredients = () => {
    return recipe.ingredientLines.map((i, index) => {
      return <div key={index}>{i}</div>
    })
  }

  const renderHealth = () => {
    return recipe.healthLabels.map((i, index) => {
      return <div key={index}>{i}</div>
    })
  }
  
  if (!recipe) {
    return (
    <div>Sorry, but the recipe was not found</div>
    );
  }

  return (
    <div className="recipe-row row">
      <Link to="/recipes">Back to Recipes</Link>
      <Link to="/refrigerator">Back to Refrigerator</Link>
      <div className="col-md-3 offset-md-2">
        <p className="recipe-card-header">{recipe.label}</p>
        <p className="recipe-type">{recipe.cuisineType[0]}, {recipe.dishType[0]}</p>
        <a href={recipe.source}>{recipe.source}</a>
      </div>
      <div className="col-md-5">
        <div className="card-image-container">
            <img className="card-img-top" src={recipe.image} alt=""/>
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