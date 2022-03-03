import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
const RecipesList = (props) => {
  const recipes = useSelector((state) => {
    return state.recipes;
    // return state.recipes.hits
  })

  if(recipes === undefined) {
    return null;
  }

  const handleRecipeCardClick = (index, e) => {
    props.history.push(`/recipes/${index}`)
  }

  const renderRecipes = () => {
    return recipes.map((p, index) => {
      return (
          <div className="col-md-4 d-flex" key={index} onClick={(e) => handleRecipeCardClick(index, e)}>
            <div className="card">
               <img className="card-img-top" src={p.recipe.image} alt=""/>
                <div className="card-body">
                  <h6 className="card-title">{p.recipe.label}</h6>
                  <p className="text-muted recipe-info">{p.recipe.totalTime} min</p>
                </div>
          </div>
        </div>
        
        
      )
    })
  }

  return ( 
    <div className="row recipe-page">
      <Link to='/'>Back</Link>
      <h1 className="recipe-page-title">Search for Recipes</h1>
      <div className="recipe-section col-md-6 offset-md-1">
        <div className="row card-deck">
          {renderRecipes()}
        </div>
      </div>
      <div className="fridge-section col-md-3 offset-md-1">
        <button className="btn btn-primary">New Search</button>
        <button className="btn btn-secondary">Add Dietary Restrictions</button>
        <div className="fridge-box-in-search">
          <div>Refrigerator Contents</div>
        </div>
        <Link to='/refrigerator'>Go Back to Fridge</Link>
      </div>
    </div>
    
  )
}


export default RecipesList;
