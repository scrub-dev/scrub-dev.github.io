import './css/navbar.css'
import personal from '../info/personal'
const Navbar = () => {
  let info = personal()
  return (
    <nav id='nav-bar'>
        <h1 id='name'>{info.name_long}</h1>
        <ul>
          <li><a href="#title">test1</a></li>
          <li><a href="#info">test2</a></li>
          <li><a href="#projects">test3</a></li>
        </ul>

    </nav>
  )
}

export default Navbar