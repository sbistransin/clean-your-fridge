import '../App.css'
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";


const Recipes = () => {
  const recipes = useSelector((state) => {
    return state.recipes.hits
  })

  if(recipes === undefined) {
    return null;
  }

  const renderRecipes = () => {
    return recipes.map((p) => {
      return (
        <div className="row">
          <div className="d-flex">
            <img src={p.recipe.image} alt="" width="200" className=''/>
            <h5 className="text-center width">{p.recipe.label}</h5>
            <p>{p.recipe.mealType}</p>
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