import React from 'react';
import Link from 'next/link';

export default function SeeProduct(props) {
  return (
    <Link href={props.href}>
      <button className={`font-manrope w-40 h-12  ${props.color} ${props.hover} ${props.border} ${props.textColor} ${props.height} ${props.width}`}>
        SEE PRODUCT
      </button>
    </Link>
  );
}
