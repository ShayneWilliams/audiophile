import React from 'react';
import SeeProduct from './SeeProduct';
import useMediaQuery from './useMediaQuery';

export default function YX1Earphones() {
  const isMobile = useMediaQuery(500);
  const isTablet = useMediaQuery(800);

  let output = (
    <div className="mt-6 flex flex-col lg:flex-row lg:h-[320px]">
      <img
        src="/assets/home/mobile/image-earphones-yx1.jpg"
        className="h-[200px] w-full rounded-lg"
      />
      <div className="bg-gray h-[200px] mt-6 rounded-md pl-6 grid content-center gap-y-8 ">
        <h4>YX1 EARPHONES</h4>
        <SeeProduct
          border="border border-black "
          href="/products/YX1"
          color="bg-none"
          textColor="text-black"
          width="w-[160px]"
          height="h-[48px]"
          hover="hover:bg-black hover:text-white"
        />
      </div>
    </div>
  );

  if (isMobile === false && isTablet === true)
    output = (
      <div className="mt-6 flex flex-row h-[320px]">
        <img
          src="/assets/home/tablet/image-earphones-yx1.jpg"
          className="h-full w-1/2 rounded-lg"
        />
        <div className="w-1/2 bg-gray h-full  rounded-md pl-6 grid content-center  gap-y-8 ">
          <div className="ml-[12%]">
            <h4>YX1 EARPHONES</h4>
            <SeeProduct
              border="border border-black "
              href="/products/YX1"
              color="bg-none"
              textColor="text-black"
              width="w-[160px]"
              height="h-[48px]"
              hover="hover:bg-black hover:text-white"
            />
          </div>
        </div>
      </div>
    );

  if (isMobile === false && isTablet === false)
    output = (
      <div className="mt-6 flex flex-row h-[320px]">
        <img
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          className="h-full w-1/2 rounded-lg"
        />
        <div className="w-1/2 bg-gray h-full  rounded-md pl-6 grid content-center  gap-y-8 ">
          <div className="ml-[20%]">
            <h4>YX1 EARPHONES</h4>
            <SeeProduct
              border="border border-black "
              href="/products/YX1"
              color="bg-none"
              textColor="text-black"
              width="w-[160px]"
              height="h-[48px]"
              hover="hover:bg-black hover:text-white"
            />
          </div>
        </div>
      </div>
    );

  return output;
}
