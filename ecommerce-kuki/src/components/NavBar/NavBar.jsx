import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <header className="NavMenu">
        <Link to='/'>
            <img className="KukiLogo" src="../img/KukiLogo.png"></img>
        </Link>

            <nav>
                <ul>
                    <li>
                    <NavLink className="Menu" to={'/categoria/audio'}>Audio</NavLink>
                    </li>
                    <li>
                    <NavLink className="Menu" to={'/categoria/gadgets'}>Gadgets</NavLink>
                    </li>
                    <li>
                    <NavLink className="Menu" to={'/categoria/accesorios'}>Accesorios para celular</NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar