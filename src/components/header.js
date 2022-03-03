import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id="height" className='d-flex justify-content-between sticky-top bg-white '>
      <div>
        <p className='col-auto display-5 font-link pt-1'>Clean Your Fridge</p>
      </div>
      <div>
        <Link to='/' className='btn header-link header-buttons float-end'><p className='lead buttons'>Home</p></Link>
        <Link to='/refrigerator' className='btn header-link header-buttons'><p className='lead buttons'>Ingredients</p></Link>
        <Link to='/recipes' className='btn header-link header-buttons'><p className='lead buttons'>Recipes</p></Link>
      </div>
    </div>
  )
}

export default Header