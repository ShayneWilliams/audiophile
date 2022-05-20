import React, { createContext, useContext, useState, useEffect } from 'react';
import _ from 'lodash';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [visible, setVisible] = useState(false);
  const [total, setTotal] = useState(0);

  const addToCart = (input) => {
    const cartCopy = _.cloneDeep(cart);
    const { name, quantity } = input;

    if (cartCopy.length === 0) setCart([input]);

    for (let i = 0; i < cartCopy.length; i++) {
      if (!quantity || quantity < 1) quantity = 1;

      if (cartCopy[i].name === name) {
        cartCopy[i].quantity = cartCopy[i].quantity + quantity;
        setCart(cartCopy);
        break;
      }
      if (i === cartCopy.length - 1) {
        cartCopy.push(input);
        setCart(cartCopy);
        break;
      }
    }
    setVisible(true);
  };

  const removeFromCart = (index) => {
    const cartCopy = _.cloneDeep(cart);

    cartCopy.splice(index, 1);
    setCart(cartCopy);
  };

  const removeAll = () => {
    setCart([]);
  };

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      let cost = cart[i].price * cart[i].quantity;

      count = count + cost;

      if (cart[i].quantity === 0) removeFromCart(i);
    }
    setTotal(count);

    if (cart.length === 0) setVisible(false);
  }, [cart]);
  const value = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    removeAll,
    visible,
    setVisible,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
