import React from 'react';
import Wrapper from '../components/Wrapper';
import Category from '../components/Category';

export default function Earphones() {
  return (
    <Wrapper>
      <Category
        type="EARPHONES"
        products={[
          {
            img: '/assets/category-earphones/mobile/image-yx1-earphones.jpg',
            title: 'YX1 WIRELESS',
            description:
              'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
            color: 'bg-peach',
            href: '/products/YX1',
            new: true,
            type: 'EARPHONES',
          },
        ]}
      />
    </Wrapper>
  );
}
