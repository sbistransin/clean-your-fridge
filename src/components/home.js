import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import background from '../photo/better-photo.jpg'

const Home = () => {
  const ingredients = useSelector(({ ingredients }) => ingredients);

  const renderIngredients = () => {
    if(ingredients.length > 0) {
      return ingredients.map((p) => {
        return (
          <ul className="lead">
            <li>{p.ingredient} - Expires in {p.expiration} day(s)</li>
          </ul>
        )
      })
    }
    return <p className="lead">No Ingredients!</p>
  }
  return (
    <div className="row">
      <div id="h-color" className="offset-md-4 col-md-4 jumbotron mt-5 rounded">
        <p className="display-4 test text-center">Your Fridge:</p>
        <div className="d-flex justify-content-center">
          <div>
            {renderIngredients()}
          </div>
        </div>
      </div>
      <div className="home-page">
        <Link to='/refrigerator' className="btn btn-outline-light home-button">Add to Fridge</Link>
        <Link to='/recipes' className="btn btn-outline-light home-button">Search Recipes</Link>
      </div>
          {/* <div className="col-md-6 offset-md-3">
            <div className='d-flex align-items-center justify-content-center H-spacing'>
              <div className="header h-spacing bg-light rounded jumbotron">
                <p className='display-4 logo font-link'>Clean Your Fridge App</p>
              </div>
            </div>
            <div className="home-page">
              <Link to='/refrigerator' className="btn btn-outline-light home-button">Add to Fridge</Link>
              <Link to='/recipes' className="btn btn-outline-light home-button">Search Recipes</Link>
            </div>
          </div> */}
    </div> 
  )
};

export default Home