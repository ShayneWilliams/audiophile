import Link from 'next/link';
import React from 'react';

export default function Categories() {
  const Category = (props:any) => (
    <Link href={props.href}>
      <div className="h-[217px]  sm:w-1/3 hover:cursor-pointer hover:text-peach">
        <div className="bg-dark-gray grid justify-items-center text-center h-[165px]  rounded-lg ">
          <img
            src={props.src}
            className="max-h-[125px] max-w-[160px] mt-[-48px]"
          />
          <h6 className="text-black">{props.title}</h6>
          <div className="grid grid-flow-col justify-items-center items-center text-center w-[50px] mb-[10px]">
            <div className="">SHOP</div>

            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-x-2.5 mt-[40px] pt-[72px] w-full justify-between bg-white text-black ">
        <Category
          src="/assets/shared/desktop/image-headphones.png"
          title="HEADPHONES"
          href="/Headphones"
        />
        <Category
          src="/assets/shared/desktop/image-speakers.png"
          title="SPEAKERS"
          href="/Speakers"
        />
        <Category
          src="/assets/shared/desktop/image-earphones.png"
          title="EARPHONES"
          href="/Earphones"
        />
      </div>
    </>
  );
}
