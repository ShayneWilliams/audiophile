import React from 'react';
import Bring from './Bring';
import Categories from './Categories';
import Footer from './Footer';
import Nav from './Nav/Nav';

export default function Wrapper(props:any) {
  return (
    <div className='w-11/12 m-auto max-w-[1110px] lg:w-3/4'>
      <Nav />
      {props.children}
      <Categories />
      <Bring />
      <Footer />
    </div>
  );
}
