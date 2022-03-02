import '../temporary.css'
import background from '../photo/better-photo.jpg'

const Header = () => {
  return (
    <div className="row">
      <div style={{ backgroundImage: `url(${background})` }}>
        <div className="col-md-6 offset-md-3">
          <div className='d-flex align-items-center justify-content-center mt-5 mb-5 H-spacing'>
            <div className="header h-spacing bg-light rounded jumbotron">
              <p className='display-4 logo font-link'>Clean Your Fridge App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header