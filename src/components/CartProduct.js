import React from 'react'
import Button from 'react-bootstrap/Button'
import {CartContext} from '../context/CartContext'
import { useContext } from 'react' 
import { getProductData } from '../productStore'

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id)

  return (<>
    <h4 className='pt-3'>Producto: {productData.title}</h4>
    <p>Cantidad: {quantity}</p>
    <p>Precio unitario: ${(quantity*productData.price).toFixed(2)}</p>
    <Button size="sm" onClick={()=> cart.deleteFromCart(id)}>Eliminar</Button>
    <hr></hr>
    </>
  )
}

export default CartProduct