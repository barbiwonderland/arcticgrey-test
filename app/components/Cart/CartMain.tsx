import {useOptimisticCart} from '@shopify/hydrogen';
import {Await, Link} from '@remix-run/react';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Common/Aside';
import {CartLineItem} from '~/components/Cart/CartLineItem';
import {CartSummary} from './CartSummary';
import {ProductProvider, useCart} from '@shopify/hydrogen-react';
import {
  CartLine,
  ComponentizableCartLine,
  Product,
} from '@shopify/hydrogen-react/storefront-api-types';

import {Suspense, useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import CartRecomendations from './CartRecommendations';
import {progress, Progress} from '@material-tailwind/react';
export type CartLayout = 'page' | 'aside';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: CartLayout;
  featuredProducts: Promise<Product[] | null> | undefined;
};

/**
 * The main cart component that displays the cart items and summary.
 * It is used by both the /cart route and the cart aside dialog.
 */
export function CartMain({
  layout,
  cart: originalCart,
  featuredProducts,
}: CartMainProps) {
  // The useOptimisticCart hook applies pending actions to the cart
  // so the user immediately sees feedback when they modify the cart.
  const cart = useOptimisticCart(originalCart);
  const {lines, cost} = useCart();

  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  // const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;
  const cartHasItems = cart?.totalQuantity && cart?.totalQuantity > 0;

  const [freeShippingProgress, setFreeShipingProgress] = useState(0);
  //price to get for free shipping
  const shippingAmount = 80;
  const getProgressDiference = () => {
    setProgressDiference(shippingAmount - Number(cost?.subtotalAmount?.amount));
  };
  //percent to get free shipping
  const [progressDiference, setProgressDiference] = useState(
    shippingAmount - Number(cost?.subtotalAmount?.amount),
  );

  //function tu update progress
  const getProgress = () => {
    if (freeShippingProgress < 100) {
      let costCart = Number(cost?.subtotalAmount?.amount);
      let newProgress = costCart && (costCart / 80) * 100;
      setFreeShipingProgress(newProgress);
      getProgressDiference();
    }
  };

  useEffect(() => {}, [lines]);

  return (
    <div className="h-full overflow-y-auto w-full ">
      <CartEmpty hidden={linesCount} layout={layout} />
      <div className="freeshiping flex justify-around my-4 items-center flex-wrap">
        <div className="">$0</div>
        <ProgressBar />
        <div className="">$80</div>
      </div>

      <div className="cart-details flex flex-col bg-[#F6F6F5] gap-2 p-2 max-h-[370px] overflow-y-auto">
        <div aria-labelledby="cart-lines   ">
          <ul>
            {lines &&
              lines.map((line) => (
                <CartLineItem
                  key={line?.id}
                  line={line as CartLine | ComponentizableCartLine}
                  layout={layout}
                />
              ))}
          </ul>
        </div>
        {/* {cartHasItems && <CartSummary cart={cart} layout={layout} />} */}
      </div>
      <div className="carousel-featured">
        {/* <CarouselCards products={featuredProducts}/> */}
        <Suspense>
          <Await resolve={featuredProducts}>
            {(result) => {
              console.log(result, 'productos desde carrito');
              //Swipper
              const swiperRef = useRef<any>(null);

              const handleScrollRight = () => {
                swiperRef.current?.slideNext();
              };

              const handleScrollLeft = () => {
                swiperRef.current?.slidePrev();
              };
              return (
                <>
                  <div className="carousel w-full py-7  ">
                    {/* <div className="cards w-full flex flex-row flex-nowrap overflow-x-auto  md:gap-8 md:px-0"> */}
                    <div className="titles flex flex-row justify-between text-center">
                      <div className="text font-main text-[18px]">
                        <div className="font-normal font-main ">
                          Enhance Your Performance
                        </div>
                      </div>
                      <div className="arrows flex">
                        <div
                          className="left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center mr-5"
                          onClick={handleScrollLeft}
                        >
                          <AiOutlineArrowLeft />
                        </div>
                        <div
                          className="right-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center"
                          onClick={handleScrollRight}
                        >
                          <AiOutlineArrowRight />
                        </div>
                      </div>
                    </div>
                    <Swiper
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => (swiperRef.current = swiper)}
                      simulateTouch={true}
                      className="w-full"
                      slidesPerView={2.5}
                      spaceBetween={20}
                    >
                      {result?.map((product, key) => (
                        <SwiperSlide key={key}>
                          <ProductProvider data={product}>
                            <CartRecomendations />
                          </ProductProvider>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="cart-total flex justify-around mt-10 w-full mx-4 font-main">
                      <div className="subtotal-title  ">
                        <h3 className=" font-medium text-[14px}!">Subtotal</h3>
                        <p className="text-gray-500 text-[14px]">
                          Tax included. Shipping calculated at checkout.
                        </p>
                      </div>
                      <div className="subtotal-price font-medium text-[17px]">
                        {cost?.totalAmount?.amount}
                      </div>
                    </div>
                    <div className="bg-black mt-3 text-white py-6 flex items-center justify-center rounded-xl w-[90%] mx-auto mb-5">
                      Checkout
                    </div>
                  </div>
                </>
              );
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

function CartEmpty({
  hidden = false,
}: {
  hidden: boolean;
  layout?: CartMainProps['layout'];
}) {
  const {close} = useAside();
  return (
    <div hidden={hidden}>
      <br />
      <p>
        Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
        started!
      </p>
      <br />
      <Link to="/collections" onClick={close} prefetch="viewport">
        Continue shopping →
      </Link>
    </div>
  );
}

export function ProgressBar() {
  const value = 50; // valor dinámico si quieres

  return (
    <div className="w-[80%] bg-gray-300 rounded-full h-1.5 overflow-hidden">
      <div
        className="bg-gray-900 h-full transition-all duration-300"
        style={{width: `${value}%`}}
      />
    </div>
  );
}
