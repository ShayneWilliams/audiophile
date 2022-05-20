import React from 'react';
import Wrapper from '../components/Wrapper';
import Category from '../components/Category';

export default function Speakers() {
  return (
    <Wrapper>
      <Category
        type="SPEAKERS"
        products={[
          {
            img: '/assets/category-speakers/mobile/image-zx9.jpg',
            title: 'ZX9',
            description:
              'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
            color: 'bg-peach',
            href: '/products/ZX9',
            new: true,
            type: 'SPEAKER',
          },
          {
            img: '/assets/category-speakers/mobile/image-zx7.jpg',
            title: 'ZX7',
            description:
              'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
            color: 'bg-peach',
            type: 'SPEAKER',
            href: '/products/ZX7',
          },
        ]}
      />
    </Wrapper>
  );
}
