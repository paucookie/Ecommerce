import { useState, useEffect } from "react";
/* import { getUnProducto } from "../../asyncmock"; */
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState (null);

    const {idItem} = useParams ();

    useEffect (() => {
        const newDoc = doc(db, "inventario", idItem);

        getDoc(newDoc)
            .then(res => {
                const data = res.data();
                const newProduct = {id:res.id,...data};
                setProducto (newProduct);
            })

            .catch (error => console.log(error));
    }, [idItem])

    
    return (
    <div className="cardDetail">
        <ItemDetail{...producto}/>
    </div>

  )
}

export default ItemDetailContainer