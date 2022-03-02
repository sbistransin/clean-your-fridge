import { Link } from "react-router-dom";
const Home = () => (
  <div className="home-page">
    <button className="btn">
      <Link to='/refrigerator'>Add to Fridge</Link>
    </button>
    <button className="btn">
      <Link to='/recipes'>Search Recipes</Link>
    </button>
  </div>
  
);

export default Home