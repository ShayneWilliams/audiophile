import React from 'react';
import useMediaQuery from './useMediaQuery';
export default function Bring() {

  const isMobile = useMediaQuery(500);
  const isTablet = useMediaQuery(800);

  let output = (
    <div className='mt-[120px] mb-[120px]  m-auto text-center'>
        <img src='/assets/shared/mobile/image-best-gear.jpg' className='rounded-lg mb-[40px] w-full'></img>
      <div>
        <h2>BRINGING YOU THE <br/><span className='text-peach'>BEST</span> AUDIO GEAR</h2>
        <p className='opacity-50 mt-[32px]'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );

  if (isMobile === false && isTablet === true)
  output = (
    <div className='mt-[120px] mb-[120px]  m-auto text-center'>
        <img src='/assets/shared/tablet/image-best-gear.jpg' className='rounded-lg mb-[40px] w-full'></img>
      <div className='w-[90%] m-auto'>
        <h2>BRINGING YOU THE <br/> <span className='text-peach'>BEST</span>  AUDIO GEAR</h2>
        <p className='opacity-50 mt-[32px]'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );

  if (isMobile === false && isTablet === false)
    output = (
      <div className='flex flex-row-reverse mt-[120px] mb-[120px] m-auto text-start gap-[12%]'>
      <img src='/assets/shared/desktop/image-best-gear.jpg' className='rounded-lg mb-[40px] w-full'></img>
    <div className='w-[90%] m-auto '>
      <h2>BRINGING YOU THE  <br/><span className='text-peach'>BEST</span> AUDIO GEAR</h2>
      <p className='opacity-50 mt-[32px]'>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories.
        We have a large showroom and luxury demonstration rooms available for
        you to browse and experience a wide range of our products. Stop by our
        store to meet some of the fantastic people who make Audiophile the
        best place to buy your portable audio equipment.
      </p>
    </div>
  </div>
    );

  return output;

}
