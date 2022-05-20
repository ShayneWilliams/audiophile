import React from 'react';
import Product from '../../components/Product';
export default function XX59() {
  return (
    <Product
      mainPicMobile="/assets/product-xx59-headphones/mobile/image-product.jpg"
      mainPicTablet="/assets/product-xx59-headphones/tablet/image-product.jpg"
      mainPicDesktop="/assets/product-xx59-headphones/desktop/image-product.jpg"
      type="HEADPHONES"
      isNew={false}
      title="XX59"
      cartTitle="XX59"
      description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
      price="899"
      features1="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
      features2="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
      inTheBox={[
        [1, 'Headphone Unit'],
        [2, 'Replacement Earcups'],
        [1, 'User Manual'],
        [1, '3.5mm Audio Cable'],
      ]}
      galleryOne="/assets/product-xx59-headphones/mobile/image-gallery-1.jpg"
      galleryTwo="/assets/product-xx59-headphones/tablet/image-gallery-2.jpg"
      galleryThree="/assets/product-xx59-headphones/desktop/image-gallery-3.jpg"
      cartPic="/assets/cart/image-xx59-headphones.jpg"
    />
  );
}
