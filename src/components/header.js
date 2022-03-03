import { Link } from 'react-router-dom'

const Header = () => {
  return (
    // <div id="height" className='d-flex justify-content-between sticky-top bg-white '>
    //   <div>
    //     <p className='col-auto display-5 font-link pt-1'>Clean Your Fridge</p>
    //   </div>
    //   <div>
    //     <Link to='/' className='btn header-link header-buttons '><p className='lead buttons'>Home</p></Link>
    //     <Link to='/refrigerator' className='btn header-link header-buttons'><p className='lead buttons'>Fridge</p></Link>
    //     <Link to='/recipes' className='btn header-link header-buttons float-end'><p className='lead buttons'>Find Recipes</p></Link>
        
    //   </div>
    // </div>

    <nav id="height" class="navbar navbar-light navbar-expand-md sticky-top bg-light justify-content-center">
      <div class="container">
        <a href="/" class="navbar-brand d-flex w-50 me-auto">
          <p className='col-auto display-6 font-link pt-1'>Clean Your Fridge</p>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                <li class="nav-item">
                    <Link className="nav-link" to='/' >Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to='/refrigerator' >Add To Fridge</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to='/recipes' >Find Recipes</Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header