import React from 'react'
import { useState } from 'react'

const ItemCount = ({inicial, stock, functionAdd}) => {
    const [counter, setCounter] = useState(inicial);

    const increase = () =>{
        if (counter < stock){
            setCounter(counter + 1);
        }
    }

    const decrease = () =>{
        if (counter > inicial){
            setCounter (counter - 1);
        }
    }

return (
    <>
    <div>
        <button onClick={decrease}> - </button>
        <p> {counter} </p>
        <button onClick={increase}> + </button>
        <button onClick={()=> functionAdd (counter)}>Agregar al Carrito</button>
    </div>
    </>
)

}

export default ItemCount