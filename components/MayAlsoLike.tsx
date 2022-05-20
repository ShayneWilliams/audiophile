import React from 'react';
import { useRouter } from 'next/router';
import SeeProduct from './SeeProduct';
import useMediaQuery from './useMediaQuery';
export default function MayAlsoLike() {
  const router = useRouter();

  const items = [
    {
      mobile: '/assets/shared/mobile/image-xx59-headphones.jpg',
      tablet: '/assets/shared/tablet/image-xx59-headphones.jpg',
      desktop: '/assets/shared/desktop/image-xx59-headphones.jpg',
      title: 'XX59',
      href: '/XX59',
    },
    {
      mobile: '/assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
      tablet: '/assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
      desktop: '/assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
      title: 'XX99 MARK I',
      href: '/XX99MarkOne',
    },
    {
      mobile: '/assets/shared/mobile/image-xx99-mark-two-headphones.jpg',
      tablet: '/assets/shared/tablet/image-xx99-mark-two-headphones.jpg',
      desktop: '/assets/shared/desktop/image-xx99-mark-two-headphones.jpg',
      title: 'XX99 MARK II',
      href: '/XX99MarkTwo',
    },
    {
      mobile: '/assets/shared/mobile/image-zx7-speaker.jpg',
      tablet: '/assets/shared/tablet/image-zx7-speaker.jpg',
      desktop: '/assets/shared/desktop/image-zx7-speaker.jpg',
      title: 'ZX7',
      href: '/ZX7',
    },
    {
      mobile: '/assets/shared/mobile/image-zx9-speaker.jpg',
      tablet: '/assets/shared/tablet/image-zx9-speaker.jpg',
      desktop: '/assets/shared/desktop/image-zx9-speaker.jpg',
      title: 'ZX9',
      href: '/ZX9',
    },
  ];

  const isMobile = useMediaQuery(500);
  const isTablet = useMediaQuery(800);

  let counter = 0;

  let output = items.map((val, index, arr) => {
    if (`/products${val.href}` === router.pathname) return;
    if (counter === 3) return;
    counter++;
    let image;

    if (isMobile) image = val.mobile;
    if (isMobile === false && isTablet === true) image = val.tablet;
    if (isMobile === false && isTablet === false) image = val.desktop;
    return (
      <div key={index} className="text-center m-auto">
        <img className="m-auto" src={image} />
        <div>{val.title}</div>
        <div className="mb-[56px]">
          <SeeProduct href={val.href} color="bg-peach" />
        </div>
      </div>
    );
  });

  return (
    <div className="mt-[120px] mb-[120px] lg:mt-[120px] lg:mb-[120px]">
      <h3 className="mt-[120px] mb-[40px] md:mb-[56px] lg:mt-[160px] lg:mb-[64px] text-center">
        YOU MAY ALSO LIKE
      </h3>

      <div className="flex flex-col md:flex-row md:gap-[5%] lg:gap-[8%]">
        {output}
      </div>
    </div>
  );
}
