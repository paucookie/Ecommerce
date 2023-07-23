import { useState, useContext } from "react";
import {CartContext} from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const {cart, emptyCart, totalQuantity} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrdenId] = useState("");

    const manejadorFormulario = (e) => {
        e.preventDefault();

        //Si los datos estan completos 
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        //Validamos que el email coincida
        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        //Creamos el objeto orden
        const orden = {
            items: cart.map( producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.quantity
            })),
            total: totalQuantity,
            nombre,
            apellido,
            telefono,
            email
        };

        //Guardamos la orden en el database

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                emptyCart();
            })
            .catch(error => {
                console.log("Error no ha creado la orden", error);
                setError("Se produjo un error al crear la orden");
            })
    }

  return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={manejadorFormulario}>
            {cart.map(producto => (
                <div>
                    <p>
                        {producto.item.nombre} x {producto.quantity}
                    </p>
                    <p>Precio $ {producto.item.precio} </p>
                    <hr />
                </div>
            ))}
            <hr />

                <div>
                    <label htmlFor="nombre"> Nombre </label>
                    <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> E-mail </label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Confirmación de E-mail</label>
                    <input type="email" value={emailConfirmacion} onChange={(e)=>setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{color:"red"}}> {error} </p>
                }

                <button type="submit"> Finalizar Compra </button>
        </form>
        {
            orderId && (
                <strong>¡Gracias por tu compra! Tu número de orden es {orderId} </strong>
            )
        }


    </div>
  )
}

export default Checkout