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
          <div className="col-md-3 d-flex" key={index} onClick={(e) => handleRecipeCardClick(index, e)}>
            <div className="card">
               <img className="card-img-top" src={p.recipe.image} alt=""/>
                <div className="card-body">
                  <h6 className="card-title">{p.recipe.label}</h6>
                  <p className="text-muted recipe-info">{p.recipe.totalTime} min</p>
                </div>
                {/* <div className="card-footer text-muted">{p.recipe.totalTime} min; {p.recipe.dishType}</div> */}
          </div>
        </div>
        
        
      )
    })
  }

  return ( 
    <div className="recipe-section col-md-10 offset-md-1">
      <div className="recipes-container row card-deck">
        <Link to='/'>Back</Link>
        {renderRecipes()}
      </div>
    </div>
  )
}


export default RecipesList;
