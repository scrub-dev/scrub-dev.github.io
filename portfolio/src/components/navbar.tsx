import './css/navbar.css'
import personal from '../info/personal'
import rng from '../utils/rng'

const Navbar = () => {
  let info = personal()
  return (
    <nav>
      <div>
        <h1>{info.name_long}</h1>
      </div>
    </nav>
  )
}

export default Navbar