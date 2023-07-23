import { useContext } from "react";
import {CartContext} from "../../context/CartContext";
import { Link} from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const {cart, emptyCart, total, totalQuantity} = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <>
                <h2> No hay productos en el carrito </h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }

  return (
    <div>
        {cart.map(product => <CartItem key= {product.id} {...product}/>)}
        <h3>Total: $ {total} </h3>
        <h3>Cantidad Total : {totalQuantity}</h3>
        <button onClick={() => emptyCart()}>Vaciar Carrito</button>
        <Link to="/checkout">Finalizar Compra</Link>
    </div>
  )
}

export default Cart