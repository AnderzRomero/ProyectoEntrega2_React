import { useState, useEffect } from "react"
import './Contador.css'

const Contador = ({inicial, stock}) => {
    const [contador, setContador] = useState(inicial)
    const [color, setColor] = useState("black");

    useEffect( ()=> {
        console.log("Se ejecutó el useEffect!!!");
        document.title = `Contador: ${contador}`;        

        if(contador > 5) {
            setColor("red");
        } else {
            setColor("black");
        }

    }, [contador])

    const aumentarContador = () => {
        if ( contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if(contador > inicial ) {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        console.log(`Agregado ${contador} items `);
    }

  return (
    <div>
        <h2>Contador</h2>

        <button onClick={ disminuirContador }> - </button>
        <strong> {contador} </strong>
        <button onClick={ aumentarContador}> + </button>
        <br /><br />

        <button onClick={ agregarAlCarrito} id="boton" style={{color: color}} > Agregar al Carrito </button>
    </div>
  )
}

export default Contador