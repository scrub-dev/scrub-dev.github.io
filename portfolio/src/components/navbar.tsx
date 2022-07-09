import './css/navbar.css'
import personal from '../info/personal'
import rng from '../utils/rng'

const Navbar = () => {
  let info = personal()
  return (
    <nav>
        <h1 id='name'>{info.name_long}</h1>
        <ul>
          <li><a>test1</a></li>
          <li><a>test2</a></li>
        </ul>
    </nav>
  )
}

export default Navbar