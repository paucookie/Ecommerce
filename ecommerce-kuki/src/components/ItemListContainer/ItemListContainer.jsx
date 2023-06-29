import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProductos, getCategoria } from '../../asyncmock.js'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState ([])

  const {categoria} = useParams ();

  useEffect ( () => {
    const funcionProductos = categoria ? getCategoria : getProductos;

    funcionProductos (categoria)
      .then (res => setProductos (res))
      .catch (err => setProductos (error))

  }, [categoria] )

  return (
    <div>
        <h2>Kuki en Línea</h2>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer