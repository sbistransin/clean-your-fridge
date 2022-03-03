import { Link } from "react-router-dom";
import background from '../photo/better-photo.jpg'

const Home = () => (
  <div className="row">
      <div className="home-height" style={{ backgroundImage: `url(${background})` }}>
        <div className="col-md-6 offset-md-3">
          <div className='d-flex align-items-center justify-content-center H-spacing'>
            <div className="header h-spacing bg-light rounded jumbotron">
              <p className='display-4 logo font-link'>Clean Your Fridge App</p>
            </div>
          </div>
          <div className="home-page">
            <Link to='/refrigerator' className="btn btn-outline-light home-button">Add to Fridge</Link>
            <Link to='/recipes' className="btn btn-outline-light home-button">Search Recipes</Link>
          </div>
        </div>
      </div>
  </div> 
);

export default Home