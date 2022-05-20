import React from 'react';
import SeeProduct from './SeeProduct';
export default function ZX9Speaker() {
  return (
    <div className="w-full text-center bg-peach text-white overflow-hidden min-h-[600px] pt-[55px] pb-[55px] rounded-lg  flex flex-col m-auto  lg:flex-row lg:ml-auto lg:mr-auto  lg:justify-center lg:gap-[110px] lg:text-left lg:max-h-[500px] lg:h-[600px]  lg:pb-0 ">
      <img
        src="/assets/home/mobile/image-speaker-zx9.png "
        className="h-[207px] w-[45%] m-auto max-w-[200px] mb-[32px] md:mb-[64px] lg:m-0 lg:w-[37%] lg:h-[90%] lg:max-w-[410px] lg:relative lg:top-[65px]  "
      />

      <div className=" lg:relative lg:top-[65px] ">
        <h1>
          ZX9
          <br /> SPEAKER
        </h1>

        <div className="m-auto mt-[24px] mb-[24px] max-w-[280px]  md:mb-[40px] md:mt-[24px] lg:mb">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </div>
        <SeeProduct
          color="bg-black"
          href="/products/ZX9"
          hover="hover:bg-[#4C4C4C]"
        />
      </div>
    </div>
  );
}
