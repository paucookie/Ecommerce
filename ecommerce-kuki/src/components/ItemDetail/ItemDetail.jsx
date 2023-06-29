import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {

  return (
    <div class='itemDetail'>
        <h3>Nombre: {nombre}</h3>
        <h4>Precio: {precio}</h4>
        <h4>Id: {id}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit dictum massa nostra porta urna, taciti donec eleifend id cras. Pulvinar et vehicula facilisis hendrerit mauris arcu mollis hac magnis, taciti purus congue ridiculus orci ornare tempus dictumst tellus, erat sem euismod sollicitudin donec porta sed nam. Class eros ultrices vestibulum a potenti posuere in, penatibus leo lobortis nunc maecenas nullam, augue dictumst sociosqu mattis aliquam nulla.</p>
        <img class='imgDetail' src={img} alt= {nombre} />
    </div>
  )
}

export default ItemDetail