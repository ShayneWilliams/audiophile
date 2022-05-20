import React from 'react';
import Product from '../../components/Product';
export default function YX1() {
  return (
    <Product
      mainPicMobile="/assets/product-yx1-earphones/mobile/image-product.jpg"
      mainPicTablet="/assets/product-yx1-earphones/tablet/image-product.jpg"
      mainPicDesktop="/assets/product-yx1-earphones/desktop/image-product.jpg"
      type="EARPHONES"
      isNew
      title="YX1 WIRELESS"
      cartTitle='YX1'
      description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      price="599"
      features1="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
      features2="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
      inTheBox={[
        [2, 'Earphone Unit'],
        [6, 'Multi-size Earplugs'],
        [1, 'User Manual'],
        [1, 'USB-C Charging Cable'],
        [1, 'Travel Pouch'],
      ]}
      galleryOne="/assets/product-yx1-earphones/mobile/image-gallery-1.jpg"
      galleryTwo="/assets/product-yx1-earphones/tablet/image-gallery-2.jpg"
      galleryThree="/assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
      cartPic="/assets/cart/image-yx1-earphones.jpg"
    />
  );
}
