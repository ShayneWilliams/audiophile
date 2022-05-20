import React from 'react';
import useMediaQuery from './useMediaQuery';
import SeeProduct from './SeeProduct';

interface Props {
  products: Array<any>;
  type: string;
}
export default function Category({ products, type }: Props) {
  const isTablet = useMediaQuery(800);

  let counter = 0;

  let output = null;

  if (isTablet) {
    output = products.map((val, index) => (
      <div key={index} className="text-center m-auto mt-[120px] relative">
        <img src={val.img} alt="" className="m-auto mb-[52px]" />
        {val.new && (
          <div className="mb-[15px] text-peach tracking-[10px] leading-[19px]">
            NEW PRODUCT
          </div>
        )}

        <div className="text-[28px] font-weight-[700] font-manrope mt-[24px]   ">
          <div>
            <h2>
              {val.title} <br />
              {val.type}
            </h2>
          </div>
        </div>
        <p className="mt-[24px] mb-[24px]">{val.description}</p>

        <div className=" mb-[120px]">
          <SeeProduct
            color="bg-peach"
            href={val.href}
            hover="hover:bg-peach-hover"
            textColor="text-white"
          />
        </div>
      </div>
    ));
  } else {
    output = products.map((val, index) => {
      counter++;

      if (counter % 2 === 0) {
        return (
          <div
            key={index}
            className="text-left flex flex-row-reverse justify-between mb-[160px] relative"
          >
            <img src={val.img} alt="" className=" w-[50%]  max-h-[560px]" />

            <div className="w-[40%] grid content-center">
              {val.new && (
                <div className="mt-[32px] text-peach tracking-[10px] leading-[19px]">
                  NEW PRODUCT
                </div>
              )}

              <div className="text-[28px] font-weight-[700] font-manrope mt-[24px]   ">
                <h2>
                  {val.title} <br />
                  {val.type}
                </h2>
              </div>
              <p className="mt-[24px] mb-[24px]">{val.description}</p>

              <div className=" mb-[120px]">
                <SeeProduct
                  color="bg-peach"
                  href={val.href}
                  hover="hover:bg-peach-hover"
                  textColor="text-white"
                />
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div
            key={index}
            className="text-left flex flex-row justify-between mb-[160px] relative"
          >
            <img src={val.img} alt="" className=" w-[50%] max-h-[560px]" />

            <div className="w-[40%] grid content-center">
              {val.new && (
                <div className="text-peach tracking-[10px] leading-[19px]">
                  NEW PRODUCT
                </div>
              )}

              <div className="text-[28px] font-weight-[700] font-manrope mt-[24px]   ">
                <h2>
                  {val.title} <br />
                  {val.type}
                </h2>
              </div>
              <p className="mt-[24px] mb-[24px]">{val.description}</p>

              <div className=" mb-[120px]">
                <SeeProduct
                  color="bg-peach"
                  href={val.href}
                  hover="hover:bg-peach-hover"
                  textColor="text-white"
                />
              </div>
            </div>
          </div>
        );
      }
    });
  }
  return (
    <div>
      <div className="text-white bg-black h-[100px] md:h-[250px] w-[100vw] absolute left-0 top-[90px] grid justify-center content-center bold">
        <h2>{type}</h2>
      </div>
      <div className="h-[100px] md:h-[250px]" />
      <div className="mt-[65px] md:mt-[120px] lg:mt-[160px]">{output}</div>
    </div>
  );
}
