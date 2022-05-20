import React from 'react';
import SeeProduct from './SeeProduct';
import useMediaQuery from './useMediaQuery';
export default function ZX7Speaker() {
  const isMobile = useMediaQuery(500);
  const isTablet = useMediaQuery(800);

  let output = (
    <div
      className={`h-[320px] bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")] bg-cover bg-right-top pl-[7.5%] flex flex-col justify-center rounded-md mt-6`}
    >
      <h4 className="mb-8">ZX7 SPEAKER</h4>
      <SeeProduct
        border="border border-black "
        href="/products/ZX7"
        color="bg-none"
        textColor="text-[black]"
        width="w-[160px]"
        height="h-[48px]"
        hover="hover:bg-black hover:text-white"


      />
    </div>
  );

  if (isMobile === false && isTablet === true) output = (
    <div
      className={`h-[320px] bg-[url("/assets/home/tablet/image-speaker-zx7.jpg")] bg-cover bg-right-top pl-[7.5%] flex flex-col justify-center rounded-md mt-6`}
    >
      <h4 className="mb-8">ZX7 SPEAKER</h4>
      <SeeProduct
        border="border border-black "
        href="/products/ZX7"
        color="bg-none"
        textColor="text-black"
        width="w-[160px]"
        height="h-[48px]"
        hover="hover:bg-black hover:text-white"

      />
    </div>
  );
  if (isMobile === false && isTablet === false) output = (
    <div
      className={`h-[320px] bg-[url("/assets/home/desktop/image-speaker-zx7.jpg")] bg-cover bg-right-top pl-[7.5%] flex flex-col justify-center rounded-md mt-6`}
    >
      <h4 className="mb-8">ZX7 SPEAKER</h4>
      <SeeProduct
        border="border border-black "
        href="/products/ZX7"
        color="bg-none"
        textColor="text-black"
        width="w-[160px]"
        height="h-[48px]"
        hover="hover:bg-black hover:text-white"

      />
    </div>
  );

  return output;
}
