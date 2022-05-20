import React from 'react';
import SeeProduct from './SeeProduct';

export default function CategoryCard(props) {
  return (
    <div className="font text-center ">
      <img src={props.img} alt="" className="mt-[64px]" />
      {props.new && <div className='mt-[32px] text-peach tracking-[10px] leading-[19px]'>NEW PRODUCT</div>}

      <div className="text-[28px] font-weight-[700] font-manrope mt-[24px]   ">
        <h2>{props.title}</h2>
        <h2>{props.type}</h2>
      </div>
      <p className='mt-[24px] mb-[24px]'>{props.description}</p>

      <div className=' mb-[120px]'>

      <SeeProduct color="bg-peach" href={props.href}  />
      </div>
    </div>
  );
}
