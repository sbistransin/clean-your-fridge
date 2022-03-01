import '../temporary.css'
import background from '../photo/background-photo.jpg'

const Header = () => {
  return (
    <div className='d-flex align-items-center justify-content-center mt-5 H-spacing'>
      <div 
      className="header h-spacing bg-light rounded jumbotron">
        <p className='display-4 m-4'>Clean Your Fridge App</p>
      </div>
    </div>
  )
}

export default Header