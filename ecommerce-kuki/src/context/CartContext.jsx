//importar useState y creatContext
import { useState, createContext } from "react";

//crear el contexto

export const CartContext = createContext({
    cart : [],
    total: 0,
    totalQuantity: 0,
})

// creamor un componente cartProvider

export const CartProvider = ({children}) => {
    //creamos un estado local cart, total y cantidad total con el hook useState
    const [cart, setCart] = useState ([]);
    const [total, setTotal] = useState (0);
    const [totalQuantity, setTotalQuantity] = useState (0);

    //Hay que verificar el carrito por consola
    console.log (cart);

    //Agregamos métodos al proveedor de contexto para poder manipular el carrrito
    //Función agregar al carrito
    const addProduct = (item, quantity) => {
        const existintProduct = cart.find(prod => prod.item.id === item.id);

        if (!existintProduct){
            setCart(prev => [...prev, {item, quantity}]);
            //crea un nuevo objeto que representa la compra del visitante
            setTotalQuantity (prev => prev + quantity);
            setTotal (prev => prev + (item.precio + quantity));
        } else {
            const refreshCart = cart.map (prod => {
                if (prod.item.id === item.id){
                    return { ...prod, quantity: prod.quantity + quantity};
                } else{
                    return prod;
                }
            });
            setCart(refreshCart);
            setTotalQuantity(prev => prev + quantity);
            setTotal (prev => (item.precio * quantity));
        }
    }

    //función eliminar productos del carrito
    const deleteProduct = (id) => {
        const deletedProduct = cart.find ( prod => prod.item.id === id);
        const refreshCart = cart.filter(prod => prod.item.id !== id);
        setCart (refreshCart);
        setTotalQuantity (prev => prev - deletedProduct.quantity);
        setTotal (prev => prev - (deletedProduct.item.precio * deletedProduct.quantity));
    }

    //función vaciar carrito de compras
    const emptyCart = () => {
        setCart ([]);
        setTotalQuantity (0);
        setTotal (0);
    }

    //usamos el componente carrito context.provider para enviar el valor actual del carrito y los métodos a los componentes de mi aplicación que lo necesite
    return(
        <CartContext.Provider value= {{cart, total, totalQuantity, addProduct, deleteProduct, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}

//children: propiedad especial que se puede utilizar para representar todos los componentes que necesitan del carrito y sus métodos


