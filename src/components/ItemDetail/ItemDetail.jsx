import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img, descripcion}) => {
  return (
    <div className='contenedorItem'>
        <img src={img} alt={nombre} />
        <h2>{nombre} </h2>
        <p>{descripcion}</p>
        <h3>Precio: $ {precio} </h3>
        <h3> ID: {id} </h3>
    </div>
  )
}

export default ItemDetail