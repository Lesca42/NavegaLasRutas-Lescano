import React, { useState } from 'react'
import Button from '../Button/Button'

export const ItemDetail = ({producto}) => {
    const [counter, setCounter] = useState(1)
    const [addedProduct, setAddedProduct] = useState({})


    const handleAdd = () =>{
        setCounter(counter+1)
    }
    const handleSubstract = () =>{
        setCounter(counter-1)
    }

    const handleAddToCart = () => {
        setAddedProduct({...producto, cantidad:counter})
        console.log(addedProduct)
    }

  return (
    <>
    {producto&&
    <>
    <div>{producto.id}</div>
    <div>{producto.name}</div>
    <div>Precio: ${producto.price}</div>
    <div>Stock disponible: {producto.stock}</div>
    <img src= {producto.img} widht="200" height="200"/>
    <div>cantidad: {counter}</div>
    <Button label='+' callback={handleAdd} />
    <Button label='agregar al carrito' callback={handleAddToCart}/>
    <Button label='-' callback={handleSubstract} />
    </>
    }
    </>
  )
}

export default ItemDetail