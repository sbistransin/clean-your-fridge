import { useSelector } from "react-redux";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { getRecipes } from '../action';
import Filters from "./filters";
// import ReactPaginate from 'react-paginate';
import PaginatedRecipes from "./paginated-recipes";


const RecipesList = (props) => {
  
  const dispatch = useDispatch();

  const recipes = useSelector(({ recipes }) => recipes.hits);
  
  const filters_array = useSelector(state => {
    return state.filters
  });

  const fridge_contents = useSelector((state) => {
    return state.ingredients;
  })

  const [selectedIngredients, setSelectedIngredients] = useState([]);


  // const handleRecipeCardClick = (index, e) => {
  //   props.history.push(`/recipes/${index}`)
  // }

  const onCheckIngredient = (e) => {

    if(e.target.checked) {
      setSelectedIngredients([...selectedIngredients, e.target.value])
    } else {
      setSelectedIngredients(selectedIngredients.filter(i => i !== e.target.value))
    }
  }

  const handleSearchRecipes = () => dispatch(getRecipes(selectedIngredients, filters_array))

  const renderRecipes = () => {

    if (recipes === undefined) {
      return <div></div>
    } else if (recipes.length === 0) {
      return <div>No recipes returned for your search</div>
    } else {
      return < PaginatedRecipes itemsPerPage={6} />
    } 
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

  // function Items({ currentItems }) {
  //   return (
  //     <div className="items row card-deck">
  //       {currentItems && currentItems.map( (item, index) => (
  //           <div className="col-md-4 d-flex" key={index} onClick={(item) => handleRecipeCardClick(index, item)}>
  //             <div className="card">
  //               <img className="card-img-top" src={item.recipe.image} alt=""/>
  //                 <div className="card-body">
  //                   <h6 className="card-title">{item.recipe.label}</h6>
  //                   <p className="text-muted recipe-info">{item.recipe.totalTime} min</p>
  //                 </div>
  //             </div>
  //           </div>  
  //         ))}
  //     </div>
  //   );
  // }

  // function PaginatedRecipes({ itemsPerPage }) {
  //   const [currentItems, setCurrentItems] = useState(null);
  //   const [pageCount, setPageCount] = useState(0);
  //   const [itemOffset, setItemOffset] = useState(0);
  
  //   useEffect(() => {
  //     const endOffset = itemOffset + itemsPerPage;
  //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //     setCurrentItems(recipes.slice(itemOffset, endOffset));
  //     setPageCount(Math.ceil(recipes.length / itemsPerPage));
  //   }, [itemOffset, itemsPerPage]);
  
  //   const handlePageClick = (event) => {
  //     const newOffset = event.selected * 4 % recipes.length;
  //     console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
  //     setItemOffset(newOffset);
  //   };
  
  //   return (
  //     <>
  //       <ReactPaginate
  //         nextLabel="next >"
  //         onPageChange={handlePageClick}
  //         pageRangeDisplayed={3}
  //         marginPagesDisplayed={2}
  //         pageCount={pageCount}
  //         previousLabel="< previous"
  //         pageClassName="page-item"
  //         pageLinkClassName="page-link"
  //         previousClassName="page-item"
  //         previousLinkClassName="page-link"
  //         nextClassName="page-item"
  //         nextLinkClassName="page-link"
  //         breakLabel="..."
  //         breakClassName="page-item"
  //         breakLinkClassName="page-link"
  //         containerClassName="pagination"
  //         activeClassName="active"
  //         renderOnZeroPageCount={null}
  //       />
  //       <Items currentItems={currentItems} />
  //       <ReactPaginate
  //         nextLabel="next >"
  //         onPageChange={handlePageClick}
  //         pageRangeDisplayed={3}
  //         marginPagesDisplayed={2}
  //         pageCount={pageCount}
  //         previousLabel="< previous"
  //         pageClassName="page-item"
  //         pageLinkClassName="page-link"
  //         previousClassName="page-item"
  //         previousLinkClassName="page-link"
  //         nextClassName="page-item"
  //         nextLinkClassName="page-link"
  //         breakLabel="..."
  //         breakClassName="page-item"
  //         breakLinkClassName="page-link"
  //         containerClassName="pagination"
  //         activeClassName="active"
  //         renderOnZeroPageCount={null}
  //       />
  //     </>
  //   );
  // }
  

  return ( 
    <div className="row recipe-page">
      <h2 className="page-header">Search for Recipes</h2>
      <div className="recipe-section col-md-6 offset-md-1">
        <div className="row card-deck">
          {renderRecipes()}
        </div>
      </div>
      <div className="fridge-section col-md-5">
        <div id="h-color" className="col-md-12 jumbotron rounded text-center">
          <div className="search-inner">
            <h5>1. Select Ingredients</h5>
            <form>
              <ul className="lead">{renderIngredients()}</ul>
            </form> 
          </div>
          <Filters />
            <button className="btn btn-primary search-buttons"
              onClick={handleSearchRecipes}>3. New Search</button> 
        </div>
      </div>
    </div>    
  )
}

export default RecipesList;
