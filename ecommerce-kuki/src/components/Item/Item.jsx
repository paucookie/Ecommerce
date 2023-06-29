import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, nombre, precio, img, marca}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>{nombre} </h3>
        <p>Precio : ${precio}</p>
        <p>ID: {id}</p>
        <p> Marca: {marca} </p>
        <button className='btnProducto'>
          <Link style={{textDecoration: 'none'}} to={`/item/${id}`}>Ver Detalles</Link>
        </button>
    </div>
  )
}

export default Item