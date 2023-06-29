//Método map: en React transforma una lista de componentes a partir de un array de datos

const Map = () => {
    const productos = [
        {id: "A001", nombre: "Bose QuietComfort", Marca: "Bose", precio: 299},
        {id: "A002", nombre: "Sony WH-1000XM4", Marca: "Sony", precio: 349},
        {id: "A003", nombre: "Apple Airpods Pro", Marca: "Apple", precio: 249},
        {id: "A004", nombre: "JBL Charge 4", Marca: "JBL", precio: 149}
    ]



  return (
    <div>
        <h2>Audio</h2>
        <ul>
            {
                productos.map(producto => (
                    <li key={producto.id}>
                        <p>{producto.nombre} </p>
                        <p>{producto.precio}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Map