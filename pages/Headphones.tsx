import React from 'react';
import Category from '../components/Category';
import Wrapper from '../components/Wrapper';

export default function Headphones() {
  return (
    <Wrapper>


      <Category
        type='HEADPHONES'
        products={[
          {
            img: '/assets/category-headphones/mobile/image-xx99-mark-two.jpg',
            title: 'XX99 MARK II',
            description:
              'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
            color: 'bg-peach',
            href: '/products/XX99MarkTwo',
            new: true,
            type: 'HEADPHONES',
          },
          {
            img: '/assets/category-headphones/mobile/image-xx99-mark-one.jpg',
            title: 'XX99 MARK I',
            description:
              'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
            color: 'bg-peach',
            type: 'HEADPHONES',
            href: '/products/XX99MarkOne',
          },
          {
            img: 'assets/category-headphones/mobile/image-xx59.jpg',
            title: 'XX59',
            description:
              'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
            type: 'HEADPHONES',
            color: 'bg-peach',
            href: '/products/XX59',
          },
        ]}
      />
    </Wrapper>
  );
}
