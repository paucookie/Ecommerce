import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ id, nombre, precio, img, stock, description }) => {
  const [addQuantity, setAddQuantity] = useState (0);

  //useContext
  const {addProduct} = useContext (CartContext);

  //Función para manejar la cantidad
  const quantityHandler = (quantity) => {
    setAddQuantity(quantity);
    //console.log ("Productos Agregados: " + quantity);
    const item = {id, nombre, precio, description};
    addProduct(item, quantity);
  }

  return (
    <div className="itemDetail">
      <h3> Nombre: {nombre} </h3> 
      <h4> Precio: ${precio} </h4>
      <h4> Id: {id} </h4>
      <h5> Stock: {stock}</h5>
      <p>
        Descripción: {description}
      </p>
      <img className="imgDetail" src={img} alt={nombre} />
      
      {
        //Montaje y desmontaje del componente//
      }
      {
        addQuantity > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} functionAdd={quantityHandler}/>)
      }
    </div>
  );
};

export default ItemDetail;
