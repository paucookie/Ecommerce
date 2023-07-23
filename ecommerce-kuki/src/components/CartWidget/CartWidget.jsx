import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'


const CartWidget = () => {
  const { totalQuantity} = useContext(CartContext);
  return (
    
    <div>
        <Link to="/cart">
            <span id="imgCart" className="material-symbols-outlined">shopping_cart</span>
            {
                totalQuantity > 0 && <strong>{totalQuantity}</strong>
            }
        </Link>
    </div>
  )
}

export default CartWidget