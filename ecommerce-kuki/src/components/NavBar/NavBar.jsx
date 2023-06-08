import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header class="NavMenu">
            <img class="KukiLogo" src="./img/KukiLogo.png"></img>

            <nav>
                <ul>
                    <li>Audio</li>
                    <li>Gadgets</li>
                    <li>Accesorios para celular</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar