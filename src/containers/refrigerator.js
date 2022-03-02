import { Link } from "react-router-dom";

const Refrigerator = () => (
  <div className="row frige-row">
    <Link to='/'>Back</Link>
    <h1 className="frige-header">Refrigerator Inventory</h1>
    <div className="ingredients-box col-md-4 offset-md-1">
      <p className="frige-inventory-header">Add Ingredients</p>
      <form></form>
    </div>
    <div className="frige-box col-md-5 offset-md-1">
      <p className="frige-inventory-header">Refrigerator Contents</p>
    </div>
    <div className="col-md-3">
      <button className="btn btn-primary">Search for Recipes</button>
    </div>
  </div>
);

export default Refrigerator