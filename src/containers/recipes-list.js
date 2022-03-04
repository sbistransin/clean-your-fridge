import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from '../action/filter-actions';
import { getRecipes } from '../action';
import { TEST_RESPONSE } from "../reducers/reducer-recipes";

import { Link } from "react-router-dom";
const RecipesList = (props) => {
  const dispatch = useDispatch();

  // don't entirely get what this is doing, but I think it lets us
  // re-render when getRecipes is called
  useEffect(() => {
    // would add dispatch here if we wanted search results to load when the
    // page loads
  }, [getRecipes]);

  const recipes = useSelector(({ recipes }) => recipes.hits);
  
  // const recipes = TEST_RESPONSE

  const filters_array = useSelector(state => {
    return state.filters
  });

  const fridge_contents = useSelector((state) => {
    return state.ingredients;
  })

  const [showBox, setShowBox] = useState(false);
  const [filtersBoxClassName, setFiltersBoxClassName] = useState("search-box");
  const [selectedIngredients, setSelectedIngredients] = useState([]);


  const handleRecipeCardClick = (index, e) => {
    props.history.push(`/recipes/${index}`)
  }

  const onCheckIngredient = (e) => {

    if(e.target.checked) {
      // add to state
      setSelectedIngredients([...selectedIngredients, e.target.value])
    } else {
      // remove from state
      setSelectedIngredients(selectedIngredients.filter(i => i !== e.target.value))
    }
  }

  const handleDietaryRestrictionsClick = () => {
    const flipState = !showBox
    setShowBox(flipState);
    if (flipState) {
      setFiltersBoxClassName("search-box show col-md-12 jumbotron rounded")
    } else {
      setFiltersBoxClassName("search-box col-md-12 jumbotron rounded")
    }
  }

  const onCheckFilter = (e) => {
    if(e.target.checked) {
      dispatch(addFilter(e.target.value))

    } else {
      dispatch(removeFilter(e.target.value))
    }
  }

  const handleSearchRecipes = () => {
    console.log("search")
    dispatch (
      getRecipes(selectedIngredients, filters_array )
    )
  }


  const renderRecipes = () => {

    if(recipes === undefined) {
      return <div>No recipes</div>
    }
    // if (recipes.length === 0) {
    //   return <div>No recipes</div>
    // }
    return recipes.map((p, index) => {
      return (
          <div className="col-md-4 d-flex" key={index} onClick={(p) => handleRecipeCardClick(index, p)}>
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

  const renderIngredients = () => {
    
    if (fridge_contents.length > 0) {
      return fridge_contents.map((i, index) => {
        return (
          <li className="form-check form-check-inline" key={index}>
            <input className="form-check-input" type="checkbox" id={index} value={i.ingredient}
              onChange={onCheckIngredient}/>
            <label className="form-check-label" htmlFor={index}>{i.ingredient} - Expires in {i.expiration} day(s)</label>
          </li>
        )
      })
    } 
    return <div className="lead">No ingredients!</div>
  }

  return ( 
    <div className="row recipe-page">
      <h2 className="page-header">Search for Recipes</h2>
      <div className="recipe-section col-md-6 offset-md-1">
        <div className="row card-deck">
          {renderRecipes()}
        </div>
      </div>
      <div className="fridge-section col-md-5">
        {/* <h4>1. Select Ingredients</h4> */}
        <div id="h-color" className="col-md-12 jumbotron rounded text-center">
          <div class="search-inner">
            <h5>1. Select Ingredients</h5>
            <form>
              <ul className="lead">{renderIngredients()}</ul>
            </form> 
          </div>
          
            <button className="btn btn-secondary search-buttons"
              onClick={handleDietaryRestrictionsClick}>2. Click For Dietary Restrictions</button>
            <div id="h-color" className={filtersBoxClassName}>
              <form>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="dairy-free" 
                    onChange={onCheckFilter}/>
                  <label className="lead form-check-label" htmlFor="inlineCheckbox1">Dairy-Free</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="egg-free" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox2">Egg-free</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="gluten-free" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox3">Gluten-free</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="fish-free" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox1">Fish-free</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="kosher" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox2">Kosher</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="vegan" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox3">Vegan</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="vegetarian" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox2">Vegetarian</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="peanut-free" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox2">Peanut-Free</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input " type="checkbox" id="inlineCheckbox2" value="pescatarian" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox2">Pescatarian</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="pork-free" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox2">Pork-Free</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="red-meat-free" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox2">Red Meat-Free</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="keto-friendly" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox2">Keto-Friendly</label>
                </div>
                <div className="form-check form-check-inline ">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="shellfish-free" 
                    onChange={onCheckFilter}/>
                  <label className="form-check-label lead" htmlFor="inlineCheckbox2">Shellfish-Free</label>
                </div>
              </form>
            </div>
            <button className="btn btn-primary search-buttons"
              onClick={handleSearchRecipes}>3. New Search</button> 
        </div>
        <button className="btn btn-primary search-buttons"
          onClick={handleSearchRecipes}>New Search</button>
      </div>
    </div>    
  )
}

export default RecipesList;
