import { useState, useEffect } from "react";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "../../firebase/config";
//getDocs me permite obtener los documentos de una conexión
//collection me permite obtener una colección
//query cuando quiero generar una consulta a la base de datos
//db database de Firebase

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect ( () => {
        
        const myProducts = query (collection(db, "inventario"));
        
        getDocs(myProducts)
            .then(response => {setProducts(response.docs.map((doc)=> ({id: doc.id, ...doc.data()})))
            })

            .catch (error => console.log(error))

    }, [] )
    //obtengo los datos cuando se hace el componente.

    return (
        <>
            <h2>Productos</h2>
            <div className="products-container">
                {
                    products.map(product => (
                        <div className="product-card">
                            <img className="img-product" src={product.img} alt={product.nombre} />
                            <h2> {product.nombre}</h2>
                            <p>Marca: {product.marca}</p>
                            <p>Precio: ${product.precio}</p>
                            <p>Stock: {product.stock}</p>
                            <button> Comprar </button>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Products