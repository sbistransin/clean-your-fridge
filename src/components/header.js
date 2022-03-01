import '../temporary.css'
const Header = () => {
  return (
    <div>
      <div 
      className="header h-spacing">
        <h1 className="mb-0">Clean Your Fridge App</h1>
      </div>
      <div style={{  
        backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
}}></div>
    </div>
  )
}

export default Header