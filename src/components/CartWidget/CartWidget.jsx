import './CartWidget.css'

export const CartWidget = () => {
    const imgCarrito = "../src/assets/carritosf.png";
    return (

        <div className='btnCarrito'>
            <img className="imgCarrito" src={imgCarrito} alt="Carrito de compras" />
            <span className='numeroCarrito'>20</span>
        </div>
    )
}
export default CartWidget
