import React from "react";
import { getProductData } from "../productStore";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find((p) => p.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function getDetails(id){
    console.log(id)
    return (
        <div>Hola</div>
    )
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    // product is not in cart
    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      //product is in cart
      setCartProducts(
        cartProducts.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts(
      cartProducts.filter((p) => {
        return p.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((p) => {
      let product = getProductData(p.id);
      totalCost += product.price * p.quantity;
    });

    return totalCost;
  }

  return (
    <CartContext.Provider
      value={{
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        getDetails,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
