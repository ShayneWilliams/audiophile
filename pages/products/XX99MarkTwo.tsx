import React from 'react';
import Product from '../../components/Product';
export default function XX99MarkTwo() {
  return (
    <Product
      mainPicMobile="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
      mainPicTablet="/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg"
      mainPicDesktop="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
      type="HEADPHONES"
      isNew
      title="XX99 MARK II"
      cartTitle ='XX99 MK II'
      description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      price="2999"
      features1="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz."
      features2="From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
      inTheBox={[
        [1, 'Headphone Unit'],
        [2, 'Replacement Earcups'],
        [1, 'User Manual'],
        [1, '3.5mm 5m Audio Cable'],
        [1, 'Travel Bag'],
      ]}
      galleryOne="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
      galleryTwo="/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg"
      galleryThree="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
      cartPic="/assets/cart/image-xx99-mark-two-headphones.jpg"
    />
  );
}
