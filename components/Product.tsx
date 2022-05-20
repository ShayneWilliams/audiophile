import React from 'react';
import Wrapper from './Wrapper';
import MayAlsoLike from './MayAlsoLike';
import SeeProduct from './SeeProduct';
import AddToCart from './AddToCart';
import useMediaQuery from './useMediaQuery';



interface Props {
  mainPicMobile: string;
  mainPicTablet:string;
  mainPicDesktop:string;
  type:string;
  isNew:boolean;
  title:string;
  cartTitle:string;
  description:string;
  price: string;
  features1:string;
  features2:string;
  inTheBox: Array<any>;
  galleryOne: string;
  galleryTwo: string;
  galleryThree: string;
  cartPic: string;
}
export default function Product({
  mainPicMobile,
  mainPicTablet,
  mainPicDesktop,
  type,
  isNew,
  title,
  cartTitle,
  description,
  price,
  features1,
  features2,
  inTheBox,
  galleryOne,
  galleryTwo,
  galleryThree,
  cartPic,
}: Props) {
  const isMobile = useMediaQuery(500);
  const isTablet = useMediaQuery(800);
  let ITBOutput = inTheBox.map((val, index, arr) => {
    return (
      <div className="flex w-full" key={index}>
        <div className="text-peach font-bold">{val[0]}x</div>

        <div className="ml-[24px]">{val[1]}</div>
      </div>
    );
  });

  let image = <img src={mainPicMobile} className="mt-[24px]  " />;

  if (isMobile === false && isTablet === true)
    image = <img src={mainPicTablet} className="mt-[24px] w-[40%]  " />;

  if (isMobile === false && isTablet === false)
    image = <img src={mainPicDesktop} className="mt-[24px] w-[50%] " />;

  return (
    <div>
      <Wrapper>
        <div>
          <div className="md:flex justify-between lg:max-h-[560px] mb-[88px] md:mb-[120px] lg:mb-[160px]">
            {image}
            <div className="md:w-[50%] lg:w-[40%]">
              {isNew && (
                <div className="text-peach tracking-[10px] leading-[19px] mt-[32px]">
                  NEW PRODUCT
                </div>
              )}
              <div className="mt-[24px] mb-[24px]">
                <h2>{title}</h2>
                <h2>{type}</h2>
              </div>
              <p>{description}</p>

              <div className="mt-[24px] md:mt-[32px]">
                <b>$ {price}</b>
              </div>

              <AddToCart price={price} name={cartTitle} img={cartPic} />
            </div>
          </div>

          <div className="flex flex-col gap-[88px] md:gap-[120px] lg:flex-row">
            <div className="lg:w-[60%]">
              <h3>FEATURES:</h3>

              <div>{features1}</div>
              <br />
              <div>{features2}</div>
            </div>
            <div className="flex flex-col gap-[24px] mb-[88px]  md:flex-row  lg:flex-col md:justify-between md:w-[70%] md:mb-[120px] lg:justify-start lg:gap-[32px] lg:w-[30%] ">
              <h3>IN THE BOX</h3>
              <div className="">{ITBOutput}</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[20px] mt-[90px] md:mt-[160px]">
            <div className="flex flex-col justify-between gap-[20px]">
              <img className="rounded-[10px]" src={galleryOne} />
              <img className="rounded-[10px]" src={galleryTwo} />
            </div>

            <div>
              <img className="rounded-[10px] h-full" src={galleryThree} />
            </div>
          </div>
        </div>
        <MayAlsoLike />
      </Wrapper>
    </div>
  );
}
