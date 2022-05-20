import React from 'react';
import Product from '../../components/Product';

export default function ZX7() {
  return (
    <Product
      mainPicMobile="/assets/product-zx7-speaker/mobile/image-product.jpg"
      mainPicTablet="/assets/product-zx7-speaker/tablet/image-product.jpg"
      mainPicDesktop="/assets/product-zx7-speaker/desktop/image-product.jpg"
      type="SPEAKER"
      isNew={false}
      title="ZX7"
      cartTitle="ZX7"
      description="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
      price="3500"
      features1="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
      features2="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
      inTheBox={[
        [2, 'Speaker Unit'],
        [2, 'Speaker Cloth Panel'],
        [1, 'User Manual'],
        [1, '3.5mm 7.5m Audio Cable'],
        [1, '7.5m Optical Cable'],
      ]}
      galleryOne="/assets/product-zx7-speaker/mobile/image-gallery-1.jpg"
      galleryTwo="/assets/product-zx7-speaker/tablet/image-gallery-2.jpg"
      galleryThree="/assets/product-zx7-speaker/desktop/image-gallery-3.jpg"
      cartPic="/assets/cart/image-zx7-speaker.jpg"
    />
  );
}
