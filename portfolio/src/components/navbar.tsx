import './css/navbar.css'
import personal from '../info/personal'
const Navbar = () => {
  let info = personal()
  return (
    <nav id='nav-bar'>
        <h1 id='name'>{info.name_long}</h1>
        <ul>
          <li><a href="#title">Home</a></li>
          <li><a href="#info">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>

    </nav>
  )
}

export default Navbar