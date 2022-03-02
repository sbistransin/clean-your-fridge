import { useSelector } from "react-redux";


const Recipes = () => {
  const recipes = useSelector((state) => {
    return state.recipes;
    // return state.recipes.hits
  })

  if(recipes === undefined) {
    return null;
  }

  const renderRecipes = () => {
    return recipes.map((p) => {
      return (
          <div className="col-md-3 d-flex">
            <div className="card">
               <img className="card-img-top" src={p.recipe.image} alt=""/>
                <div className="card-body">
                  <h6 className="card-title">{p.recipe.label}</h6>
                  <p className="card-text">{p.recipe.mealType}</p>
                </div>
              
          </div>
        </div>
        
        
      )
    })
  }

  return renderRecipes()
}


export default Recipes;








  // const recipesSorter = recipes.map((p) => {
  //   const name = p.recipe.label;
  //   const imageUrl = p.recipe.image;
  //   const recipleUrl = p.recipe.url;
  //   const mealType = p.recipe.mealType[0];
  //   const cuisineType = p.recipe.cuisineType[0];
  //   const ingredientsArray = p.recipe.ingredients.map((p) => p.food);
  //   return {
  //     name: name,
  //     imageUrl: imageUrl,
  //     recipleUrl: recipleUrl,
  //     mealType: mealType,
  //     cuisineType: cuisineType,
  //     ingredientsArray: ingredientsArray
  //   }
  // })