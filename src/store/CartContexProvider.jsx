import React from 'react'
import CartContex from './cart-contex'

const CartContexProvider = (props) => {
 
const addItemHandler = item =>{

}
const removeItemHandler = id =>{}

    const cartContex = {
        items: [],
        totalAmount: 0,
        addItem:addItemHandler ,
        removeItem:removeItemHandler
    } 
 
    return (
    <CartContex.Provider value={cartContex}>{props.children}</CartContex.Provider>
  )
}

export default CartContexProvider