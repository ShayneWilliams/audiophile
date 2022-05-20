import React, { useState } from 'react';
import { useCart } from '../context/CartContext';


interface Props {
  name:string;
  price:string;
  img:string;
}
export default function AddToCart({ name, price, img }: Props) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const incrementHandler = () => {
    let copy = quantity + 1;
    setQuantity(copy);
  };
  const decrementHandler = () => {
    let copy = quantity - 1;
    if (quantity === 0) return;
    setQuantity(copy);
  };
  return (
    <div className="flex mt-[31px] lg:mt[47px] ">
      <div className="grid bg-gray w-[120px] h-[48px] grid-flow-col content-center justify-around mr-[16px]">
        <button
          className="h-full hover:text-peach-hover"
          onClick={decrementHandler}
        >
          -
        </button>
        <div className="h-full">{quantity}</div>
        <button
          className="h-full hover:text-peach-hover"
          onClick={incrementHandler}
        >
          +
        </button>
      </div>

      <button
        className="text-white w-[160px] bg-peach hover:bg-peach-hover"
        onClick={() => addToCart({ name, price, quantity, img })}
      >
        ADD TO CART
      </button>
    </div>
  );
}
