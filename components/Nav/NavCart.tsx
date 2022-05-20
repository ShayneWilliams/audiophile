import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import _ from 'lodash';
export default function NavCart() {
  const { cart, removeAll, setCart, visible, setVisible, total } = useCart();

  let output = cart.map((val, index, arr) => {
    const addQuantity = () => {
      const cartCopy = _.cloneDeep(cart);

      cartCopy[index].quantity++;
      setCart(cartCopy);
    };
    const subtractQuantity = () => {
      const cartCopy = _.cloneDeep(cart);

      cartCopy[index].quantity--;
      setCart(cartCopy);
    };
    return (
      <div
        key={index}
        className="grid grid-flow-col mb-[24px] justify-between h-[64px] items-center"
      >
        <div className="flex justify-between gap-[16px]">
          <img src={val.img} className="max-w-[64px] rounded-[10px]" />

          <div className='w-[90px] overflow-hidden'>
            <div className="font-bold">{val.name}</div>
            <div className="text-white opacity-[50%] text-[#272727]">
              $ {val.price}
            </div>
          </div>
        </div>

        <div className="grid justify-center content-center grid-flow-col w-[96px] h-[32px] bg-dark-gray rounded-[2px] ">
          <button className='w-[30px]' onClick={subtractQuantity}>-</button>
          <div className='w-[30px] text-center'>{val.quantity}</div>
          <button className='w-[30px]' onClick={addQuantity}>+</button>
        </div>
      </div>
    );
  });

  let finalTotal = total.toLocaleString('en-US');


  return (
    <div
      className="w-[100vw] h-[100vh] bg-none grid absolute top-0 bg-[#0a0a0a85] hover:cursor-pointer "
      onClick={() => {
        setVisible(false);
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="text-black fixed w-[327px] pt-[32px] pb-[32px] md:w-[377px] bg-white rounded-[10px]  grid  justify-self-center md:justify-self-end md:mr-[5%] lg:mr-[11%] md:self-start mt-[115px] lg:mt-[100px] "
      >
        <div className="w-[270px] md:w-[310px] m-auto">
          <div className="flex justify-between  mb-[30px]">
            <div>CART ({cart.length})</div>
            {visible && (
              <button onClick={removeAll} className="text-[#777777] underline">
                Remove All
              </button>
            )}
          </div>
          <div className="overflow-y-auto h-[300px]">{output}</div>

          <div className="flex justify-between mt-[32px] mb-[24px]  ">
            <div className="text-[#7c7c7c]">TOTAL</div>${finalTotal}
          </div>
          <div className=" mt-[24px]">
            <div className="text-white bg-peach w-[270px] h-[48px] grid content-center justify-center m-auto">
              <Link href="/Checkout">
                <button className='w-[270px] h-[48px] hover:bg-peach-hover' onClick={() => setVisible(false)} >CHECKOUT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
