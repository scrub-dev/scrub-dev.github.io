import style from './css/navbar.module.css'
import personal from '../info/personal'
export const Navbar = () => 
    <nav className={style.nav}>
        <h1 className={style.name}>{personal().name_long}</h1>
        <ul>
          <li><a href="#title">Home</a></li>
          <li><a href="#info">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
    </nav>