import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item, quantity}) => {
    const {deleteProduct} = useContext(CartContext);

  return (
    <div>
        <h4> {item.nombre}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio: $ {item.precio}</p>
        <button onClick = {()=> deleteProduct(item.id)}>Eliminar</button>
        <hr/>
    </div>
  )
}

export default CartItem