import Image from 'next/image';
import React from 'react';
import SeeProduct from './SeeProduct';
import Categories from './Categories';
import ZX9Speaker from './ZX9Speaker';
import ZX7Speaker from './ZX7Speaker';
import YX1Earphones from './YX1Earphones';
import useMediaQuery from './useMediaQuery';
import Bring from './Bring';
import Footer from './Footer';
import Nav from './Nav/Nav';

export default function Home() {
  const isMobile = useMediaQuery(500);
  const isTablet = useMediaQuery(800);

  const mobile = (
    <div className="text-center w-full h-[600px] grid items-center justify-items-center relative">
      <div className="absolute z-10 text-white w-10/12 max-w-[379px] ">
        <div className="text-gray opacity-50 mb-16px tracking-[10px]">
          NEW PRODUCT
        </div>
        <h1 className="">XX99 MARK II HEADPHONES</h1>
        <div className="opacity-50 mt-[26px] mb-[26px] max-w[350px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music <br /> enthusiast.
        </div>
        <SeeProduct
          href="/products/XX99MarkTwo"
          color="bg-peach"
          hover="hover:bg-peach-hover"
          textColor="text-white"
        />
      </div>
      <img
        src="/assets/home/mobile/image-header.jpg"
        alt="background picture of headphones"
        className="h-[600px]  w-[100vw] absolute z-0 top-0 max-w-[unset]"
      />
    </div>
  );

  const tablet = (
    <div className="text-center w-full h-[600px] grid items-center justify-items-center relative">
      <div className="absolute z-10 text-white w-10/12 max-w-[379px] ">
        <div className="text-gray opacity-50 mb-16px tracking-[10px]">
          NEW PRODUCT
        </div>
        <h1 className="">XX99 MARK II HEADPHONES</h1>
        <div className="opacity-50 mt-[26px] mb-[26px] max-w[350px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music <br /> enthusiast.
        </div>
        <SeeProduct
          href="/products/XX99MarkTwo"
          color="bg-peach"
          hover="hover:bg-peach-hover"
          textColor="text-white"
        />
      </div>
      <img
        src="/assets/home/tablet/image-header.jpg"
        alt="background picture of headphones"
        className="h-[600px]  w-[100vw] absolute z-0 top-0 max-w-[unset]"
      />
    </div>
  );
  const desktop = (
    <div className="text-left w-full h-[600px] grid items-center m-auto">
      <div className="absolute z-10 text-white w-10/12 max-w-[379px] ">
        <div className="text-gray opacity-50 mb-16px tracking-[10px]">
          NEW PRODUCT
        </div>
        <h1 className="">XX99 MARK II HEADPHONES</h1>
        <div className="opacity-50 mt-[26px] mb-[26px] max-w[350px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music <br /> enthusiast.
        </div>
        <SeeProduct
          href="/products/XX99MarkTwo"
          color="bg-peach"
          hover="hover:bg-peach-hover"
          textColor="text-white"
        />
      </div>
      <img
        src="/assets/home/desktop/image-hero.jpg"
        alt="background picture of headphones"
        className="h-[600px] w-[100vw] absolute z-0 left-0 top-0 max-w-[unset]"
      />
    </div>
  );
  let output = mobile;
  if (isMobile === false && isTablet === true) output = tablet;
  if (isMobile === false && isTablet === false) output = desktop;
  return (
    <>
      <Nav />

      <main className=" w-11/12 m-auto max-w-[1110px] lg:w-3/4 ">
        {output}

        <div className="">
          <Categories />

          <ZX9Speaker />
          <ZX7Speaker />
          <YX1Earphones />
        </div>
        <Bring />
      </main>
      <Footer />
    </>
  );
}
