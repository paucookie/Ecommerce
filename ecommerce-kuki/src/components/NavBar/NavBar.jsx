import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <header class="NavMenu">
        <Link to='/'>
            <img class="KukiLogo" src="../img/KukiLogo.png"></img>
        </Link>

            <nav>
                <ul>
                    <li>
                    <NavLink class="Menu" to={'/categoria/audio'}>Audio</NavLink>
                    </li>
                    <li>
                    <NavLink class="Menu" to={'/categoria/gadgets'}>Gadgets</NavLink>
                    </li>
                    <li>
                    <NavLink class="Menu" to={'/categoria/accesorios'}>Accesorios para celular</NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar