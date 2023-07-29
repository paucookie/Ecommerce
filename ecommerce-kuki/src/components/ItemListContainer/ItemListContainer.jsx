import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
/* import { getProductos, getCategoria } from '../../asyncmock.js'; */
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);

  const {categoria} = useParams ();

  useEffect (()=>{
    const myProducts = categoria ? query(collection(db, "inventario"), where("categoria", "==", categoria)): collection(db,"inventario");
        
    getDocs(myProducts)
        .then(response => {
          const newProducts = response.docs.map (doc => {
            const data = doc.data();
            return {id: doc.id, ...data}

          })
          setProductos(newProducts);
        })

        .catch (error => console.log(error))

}, [categoria] )


  return (
    <div>
        <h2>Kuki en Línea</h2>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer