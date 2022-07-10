import './css/navbar.css'
import personal from '../info/personal'

const Navbar = () => {
  let info = personal()
  return (
    <nav>
        <h1 id='name'>{info.name_long}</h1>
        <ul>
          <li><a>test1</a></li>
          <li><a>test2</a></li>
          <li><a>test3</a></li>
        </ul>
    </nav>
  )
}

export default Navbar