import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id='height'className='row sticky-top bg-white'>
      <p className='col-md-4 display-5 font-link pt-1'>Clean Your Fridge</p>
      <Link to='/' className='btn header-link header-button header-buttons'><p className='lead buttons'>Home</p></Link>
      <Link to='/' className='btn header-link header-buttons'><p className='lead buttons'>Ingredients</p></Link>
      <Link to='/' className='btn header-link header-buttons'><p className='lead buttons'>Recipes</p></Link>
      {/* <div className='header-link home-button'>
        yo
      </div>
      <div className='header-link'>
        <Link to="/" className="col-md-1 header-link">Ingredients</Link>
      </div>
      <div className='header-link'>
        <Link to="/" className="col-md-1 header-link">Recipes</Link>
  </div>    */}
    </div>
    // <div className="row">
    //   <div id="height">
    //     <p className='display-6  font-link header-spacing'>Clean Your Fridge </p>
    //     <Link to="/" className="btn btn-outline-light home-button">Home</Link>
    //   </div>
    // </div>
  )
}

export default Header