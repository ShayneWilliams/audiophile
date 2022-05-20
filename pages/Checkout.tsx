import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import _ from 'lodash';
import Footer from '../components/Footer';
import Nav from '../components/Nav/Nav';
export default function Checkout() {
  const { cart, setCart, total } = useCart();
  const grandTotal = total + 50;

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    payment: '',
    eMoney: '',
    ePin: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [complete, setComplete] = useState(false);
  const [payment, setPayment] = useState();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const zipRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  let output = cart.map((val, index) => {
    return (
      <div
        className="grid grid-flow-col justify-between h-[64px] content-center mb-[24px]"
        key={index}
      >
        <div className="flex gap-[16px]">
          <img className="w-[64px]" src={val.img} />
          <div className="grid content-center">
            <div>{val.name}</div>
            <div>{val.price}</div>
          </div>
        </div>

        <div className="grid content-center text-[#858585]">
          x{val.quantity}
        </div>
      </div>
    );
  });

  const paymentHandler = (method) => {
    setPayment(method);
  };

  let paymentMethod;

  if (payment === 'Cash')
    paymentMethod = (
      <div>
        <div></div>
        <div>
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </div>
      </div>
    );
  if (payment === 'E-Money')
    paymentMethod = (
      <div className="flex flex-wrap md:justify-between m-auto gap-y-[10px]">
        <div className="flex flex-col w-full min-w-[280px] md:w-[48%] focus-within:text-peach">
          <label className="mb-[10px] " htmlFor="eNumber">
            e-Money Number
          </label>
          <input
            className="text-black border-solid border-2 border-[#CFCFCF] rounded-[5px]   h-[56px] pl-[24px] focus:outline-peach focus:outline focus:outline-2 focus:border-none"
            type="text"
            placeholder="238521993"
            name="eNumber"
          />
        </div>

        <div className="flex flex-col w-full min-w-[280px] md:w-[48%] focus-within:text-peach">
          <label className="mb-[10px]" htmlFor="ePin">
            e-Money PIN
          </label>
          <input
            className="border-solid border-2 border-[#CFCFCF] rounded-[5px]   h-[56px] pl-[24px] focus:outline-peach focus:outline focus:outline-2 focus:border-none"
            type="text"
            placeholder="6891"
            name="ePin"
          />
        </div>
      </div>
    );

  const errorCheck = (e, reference, value, type) => {
    let errors = '';

    if (value.length < 1) {
      reference.current.classList.add('border-[red]');
      reference.current.labels[0].classList.add('text-[red]');
      errors = 'Name cannot be empty.';
      setFormErrors({
        ...formErrors,
        [reference.current.name]: errors,
      });
    }

    if (type === 'email' && value.includes('@') === false) {
      errors = 'Wrong email format.';
      setFormErrors({
        ...formErrors,
        [reference.current.name]: errors,
      });
    }

    if (errors === '' && reference.current.classList.contains('border-[red]')) {
      reference.current.classList.remove('border-[red]');
      reference.current.labels[0].classList.remove('text-[red]');
      setFormErrors({ ...formErrors, [reference.current.name]: null });
    }
  };

  let order = null;
  const handleSubmit = () => {
    setComplete(true);
  };

  if (complete === true) {
    order = (
      <div className="w-[100vw] h-[100vh] bg-[#9999998a] fixed left-0 grid justify-items-center">
        <div className="bg-white fixed w-[400px]  top-[20%] p-[32px] md:p-[48px] ">
          <h3 className="mt-[30px] mb-[30px]">
            THANK YOU <br />
            FOR YOUR ORDER
          </h3>
          <p className="text-[#9c9c9c] mb-[30px]">
            You will receive an email confirmation shortly.
          </p>
          <Link href="/">
            <button
              className="h-[48px] w-full bg-peach text-white hover:bg-peach-hover"
              onClick={() => setCart([])}
            >
              BACK TO HOME
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Nav />

      <div className="bg-gray w-[100vw] absolute left-0">
        <div className="w-11/12 m-auto max-w-[1110px] mb-[100px] md:mb-[115px] lg:mb-[140px] lg:w-3/4 bg-gray flex flex-col lg:flex-row gap-[30px]">
          <form className="bg-white mt-[24px] p-[5%] w-full lg:min-w-[730px]">
            <h3>CHECKOUT</h3>

            <div className="text-peach mt-[50px] mb-[16px] ">
              BILLING DETAILS
            </div>
            <div className="flex flex-wrap md:justify-between m-auto gap-y-[10px]">
              <div className="flex flex-col w-full min-w-[280px] md:w-[48%] focus-within:text-peach">
                <label className="mb-[10px] " htmlFor="name">
                  Name
                </label>
                <input
                  className="text-black border-solid border-2 border-[#CFCFCF] rounded-[5px]   h-[56px] pl-[24px] focus:outline-peach focus:outline focus:outline-2 focus:border-none"
                  type="text"
                  id="name"
                  placeholder="alexei@gmail.com"
                  name="name"
                  onChange={handleChange}
                  value={formValues.name}
                  ref={nameRef}
                  onBlur={(e) => errorCheck(e, nameRef, formValues.name)}
                />
                <p className="text-[red]">{formErrors.name}</p>
              </div>

              <div className="flex flex-col w-full min-w-[280px] md:w-[48%] focus-within:text-peach">
                <label className="mb-[10px]" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="border-solid border-2 border-[#CFCFCF] rounded-[5px]   h-[56px] pl-[24px] focus:outline-peach focus:outline focus:outline-2 focus:border-none"
                  type="email"
                  id="email"
                  placeholder="Alexei"
                  name="email"
                  onChange={handleChange}
                  value={formValues.email}
                  ref={emailRef}
                  onBlur={(e) =>
                    errorCheck(e, emailRef, formValues.email, 'email')
                  }
                />
                <p className="text-[red]">{formErrors.email}</p>
              </div>

              <div className="flex flex-col w-full min-w-[280px] md:w-[48%] focus-within:text-peach">
                <label className="mb-[10px]" htmlFor="phone">
                  Phone Number
                </label>

                <input
                  className="border-solid border-2 border-[#CFCFCF] rounded-[5px]   h-[56px] pl-[24px] focus:outline-peach focus:outline focus:outline-2 focus:border-none"
                  type="text"
                  id="phone"
                  placeholder="+1 (202) 555-0136"
                  name="phone"
                  onChange={handleChange}
                  value={formValues.phone}
                  ref={phoneRef}
                  onBlur={(e) => errorCheck(e, phoneRef, formValues.phone)}
                />
                <p className="text-[red]">{formErrors.phone}</p>
              </div>
            </div>

            <div className="text-peach mt-[50px] mb-[16px] ">SHIPPING INFO</div>
            <div className="flex flex-wrap md:justify-between m-auto gap-y-[10px]">
              <div className="flex flex-col w-full focus-within:text-peach">
                <label className="mb-[10px]" htmlFor="address">
                  Address
                </label>
                <input
                  className="border-solid border-2 border-[#CFCFCF] rounded-[5px]  h-[56px] pl-[24px] focus:outline-peach focus:outline focus:outline-2 focus:border-none"
                  type="text"
                  id="address"
                  placeholder="1137 Williams Avenue"
                  name="address"
                  onChange={handleChange}
                  value={formValues.address}
                  ref={addressRef}
                  onBlur={(e) => errorCheck(e, addressRef, formValues.address)}
                />
                <p className="text-[red]">{formErrors.address}</p>
              </div>

              <div className="flex flex-col  w-full min-w-[280px] md:w-[48%] focus-within:text-peach">
                <label className="mb-[10px]" htmlFor="zip">
                  ZIP CODE
                </label>
                <input
                  className="border-solid border-2 border-[#CFCFCF] rounded-[5px] h-[56px] pl-[24px] focus:outline-peach focus:outline focus:outline-2 focus:border-none"
                  type="text"
                  id="zip"
                  placeholder="10001"
                  name="zip"
                  onChange={handleChange}
                  value={formValues.zip}
                  ref={zipRef}
                  onBlur={(e) => errorCheck(e, zipRef, formValues.zip)}
                />
                <p className="text-[red]">{formErrors.zip}</p>
              </div>

              <div className="flex flex-col  w-full min-w-[280px] md:w-[48%] focus-within:text-peach">
                <label className="mb-[10px]" htmlFor="city">
                  City
                </label>
                <input
                  className="border-solid border-2 border-[#CFCFCF] rounded-[5px] h-[56px] pl-[24px] focus:outline-peach focus:outline focus:outline-2 focus:border-none"
                  type="text"
                  id="city"
                  placeholder="New York"
                  name="city"
                  onChange={handleChange}
                  value={formValues.city}
                  ref={cityRef}
                  onBlur={(e) => errorCheck(e, cityRef, formValues.city)}
                />
                <p className="text-[red]">{formErrors.city}</p>
              </div>
              <div className="flex flex-col  w-full min-w-[280px] md:w-[48%] focus-within:text-peach">
                <label className="mb-[10px]" htmlFor="country">
                  Country
                </label>
                <input
                  className="border-solid border-2 border-[#CFCFCF] rounded-[5px] h-[56px] pl-[24px] focus:outline-peach focus:outline focus:outline-2 focus:border-none"
                  type="text"
                  id="country"
                  placeholder="United States"
                  name="country"
                  onChange={handleChange}
                  value={formValues.country}
                  ref={countryRef}
                  onBlur={(e) => errorCheck(e, countryRef, formValues.country)}
                />
                <p className="text-[red]">{formErrors.country}</p>
              </div>
            </div>

            <div className="text-peach mt-[50px] mb-[16px]">PAYING DETAILS</div>

            <div className="flex justify-between mb-[30px] flex-wrap">
              <div className="font-bold">Payment Method</div>

              <div className="grid gap-[16px] ">
                <div className="grid content-center justify-start grid-flow-col gap-[16px] w-full min-w-[280px] md:w-[48%] w-full border-solid border-2 border-dark-gray focus-within:outline focus-within:outline-peach focus-within:outline-2  h-[56px] rounded-[5px]">
                  <input
                    type="radio"
                    id="e-money"
                    value="E-MONEY"
                    name="payment"
                    onChange={() => paymentHandler('E-Money')}
                    className="ml-[20px]"
                  />
                  <label className=" hover:cursor-pointer" htmlFor="e-money">
                    E-MONEY
                  </label>
                </div>

                <div className="grid content-center justify-start grid-flow-col  gap-[16px] w-full  border-solid border-2 border-dark-gray focus-within:outline focus-within:outline-peach focus-within:outline-2 h-[56px]  rounded-[5px]">
                  <input
                    type="radio"
                    id="Cash"
                    value="Cash on Delivery"
                    name="payment"
                    className="ml-[20px] "
                    onChange={() => paymentHandler('Cash')}
                  />
                  <label className=" hover:cursor-pointer" htmlFor="Cash">
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </div>
            {paymentMethod}
          </form>

          <div className="w-full bg-white p-[32px] mb-[116px] mt-[24px] rounded-[5px] lg:w-[350px] lg:min-w-[350px]">
            <div className="font-bold mb-[30px]">SUMMARY</div>
            {output}
            <div className="flex justify-between">
              <div className="text-[#858585]">TOTAL</div>
              <div>${total.toLocaleString('en-US')}</div>
            </div>

            <div className="flex justify-between">
              <div className="text-[#858585]">SHIPPING</div>
              <div>$50</div>
            </div>

            <div className="flex justify-between mt-[24px] mb-[32px]">
              <div className="text-[#858585]">GRAND TOTAL</div>
              <div className="text-peach">
                ${grandTotal.toLocaleString('en-US')}
              </div>
            </div>

            <button
              className="bg-peach h-[48px] w-full text-white hover:bg-peach-hover"
              onClick={handleSubmit}
            >
              CONTINUE &#38; Pay
            </button>
          </div>
          {order}
        </div>
        <Footer />
      </div>
    </>
  );
}
